import { ref, watch, nextTick, computed } from "vue";
import { useMutationObserver, useScroll, VueInstance } from "@vueuse/core";
import { scrollToPromise, sleep } from "../utils";
import { CatalogProps } from "../types/catalog-props";

export const useCatalog = (props: Required<CatalogProps>) => {
  const titles = ref<any[]>([]);
  const currentIndex = ref(0);
  const isClickAnchor = ref(false);
  const catalogRef = ref<HTMLElement>();
  const scrollContainer = computed(() => props.scrollContainer);
  const { y } = useScroll(scrollContainer, {
    throttle: 100,
  });
  const containerElement = ref<HTMLElement>(document.createElement("div"));

  const getArticleTitles = async () => {
    await nextTick();
    const levelMap = props.selector.reduce(
      (acc: { [key: string]: number }, cur, index) => {
        acc[cur] = index;
        return acc;
      },
      {}
    );
    const anchors = containerElement.value.querySelectorAll(
      props.selector.join(",")
    );
    const titles = Array.from(anchors).filter(
      (title) => title instanceof HTMLElement && title.innerText.trim()
    );
    if (!titles.length) {
      return [];
    }
    const getLevel = (el: Element) => {
      const tagName = el.tagName.toLowerCase();
      const classList = Array.from(el.classList);
      let level = 0;
      // 优先查询class
      for (const className of classList) {
        if (Object.prototype.hasOwnProperty.call(levelMap, `.${className}`)) {
          level = levelMap[`.${className}`] || 0;
          break;
        }
      }
      // 查询tag
      if (Object.prototype.hasOwnProperty.call(levelMap, tagName)) {
        level = levelMap[tagName] || 0;
      }
      return level;
    };

    return titles.map((el, index) => {
      if (!el.id) {
        el.id = `vcvTitle${index}`;
      }
      return {
        title: (el as HTMLElement).innerText,
        id: el.id,
        catalogId: `vcvAnchor${index}`,
        level: getLevel(el),
        offsetTop: (el as HTMLElement).offsetTop,
      };
    });
  };

  const readerScroll = (scrollTop: number) => {
    if (isClickAnchor.value) return;
    // 找到当前在视图中的第一个标题
    for (let index = 0; index < titles.value.length; index++) {
      const offsetTop = titles.value[index].offsetTop;
      const top = offsetTop - scrollTop - props.topDistance;
      console.log("top:", top, index);
      if (top > 0 && index - 1 >= 0) {
        currentIndex.value = index - 1;
        updateActiveClass();
        break;
      }
      currentIndex.value = index;
    }
    return;
  };

  // 添加用于更新 active 类的函数
  const updateActiveClass = () => {
    const currentCatalog = document.querySelector(
      `#vcvAnchor${currentIndex.value}`
    );
    const viewPortHeight = catalogRef.value?.clientHeight || 0;
    const offsetTop = (currentCatalog as HTMLElement).offsetTop;
    const scrollTop = catalogRef.value?.scrollTop || 0;
    const top = offsetTop - scrollTop;
    if (top > viewPortHeight / 2 || top < viewPortHeight / 2) {
      catalogRef.value?.scrollTo({
        top: offsetTop - viewPortHeight / 2,
        behavior: isClickAnchor.value ? "instant" : "smooth",
      });
    }
  };

  const handleAnchorClick = async (anchor: any, index: number) => {
    isClickAnchor.value = true;
    currentIndex.value = index;
    updateActiveClass();
    if (props.useAnchor) {
      isClickAnchor.value = false;
      return;
    }
    await scrollToPromise(props.scrollContainer, {
      top: anchor.offsetTop - props.topDistance,
      behavior: "smooth",
    });
    await sleep(100);
    isClickAnchor.value = false;
  };

  watch(
    () => y.value,
    () => {
      // console.log(y.value);
      readerScroll(y.value);
    }
  );

  let stopMutationObserver: () => void;
  watch(
    () => [props.contentContainer, props.isWatch],
    async (val) => {
      console.log("val:", val);
      const [contentContainer, isWatch] = val;
      if (contentContainer) {
        if ((contentContainer as VueInstance).$el) {
          containerElement.value = (contentContainer as VueInstance).$el;
        } else {
          containerElement.value = contentContainer as HTMLElement;
        }
        if (isWatch) {
          if (stopMutationObserver) stopMutationObserver();
          const { stop } = useMutationObserver(
            containerElement as any,
            async () => {
              titles.value = await getArticleTitles();
            },
            {
              childList: true,
              subtree: true,
            }
          );
          stopMutationObserver = stop;
        } else {
          if (stopMutationObserver) stopMutationObserver();
        }
        titles.value = await getArticleTitles();
      }
    },
    {
      immediate: true,
    }
  );

  return {
    titles,
    currentIndex,
    catalogRef,
    handleAnchorClick,
  };
};
