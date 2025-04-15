import { ref, watch, nextTick } from "vue-demi";
import { useScroll } from "@vueuse/core";
import { scrollToPromise, sleep } from "../utils";
import { CateLogProps } from "@/Index.vue";

export const useCatalog = (props: Required<CateLogProps>) => {
  const titles = ref<any[]>([]);
  const currentIndex = ref(0);
  const isClickAnchor = ref(false);
  const catalogRef = ref<HTMLElement>();
  const { y } = useScroll(props.scrollContainer, {
    throttle: 100,
  });

  const getArticleTitles = async () => {
    await nextTick();
    const levelMap = props.selector.reduce(
      (acc: { [key: string]: number }, cur, index) => {
        acc[cur] = index;
        return acc;
      },
      {}
    );
    const anchors = props.contentContainer.querySelectorAll(
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
      const classList = el.classList;
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
        el.id = `vcTitle${index}`;
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
      if (top > 0 && index - 1 >= 0) {
        currentIndex.value = index - 1;
        updateActiveClass();
        break;
      }
    }
    return;
  };

  // 添加用于更新 active 类的函数
  const updateActiveClass = () => {
    console.log(catalogRef);

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
      console.log(y.value);
      readerScroll(y.value);
    }
  );
  watch(
    () => props.contentContainer,
    async (val) => {
      if (val) {
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
