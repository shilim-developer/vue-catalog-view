import { VueInstance } from "@vueuse/core";
import { ExtractPropTypes, PropType } from "vue";

export function catalogViewProps() {
  return {
    type: {
      type: String as PropType<"default" | "line" | "point">,
      default: "default",
    },
    contentContainer: {
      type: Object as PropType<HTMLElement | VueInstance>,
      default: () => document.body,
    },
    scrollContainer: {
      type: Object as PropType<HTMLElement | VueInstance>,
      default: () => window,
    },
    selector: {
      type: Array as PropType<string[]>,
      default: () => ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    topDistance: {
      type: Number,
      default: 0,
    },
    indent: {
      type: Number,
      default: 15,
    },
    useAnchor: {
      type: Boolean,
      default: false,
    },
    isWatch: {
      type: Boolean,
      default: true,
    },
    ellipsis: {
      type: Boolean,
      default: true,
    },
  };
}

export type CatalogViewProps = Partial<
  ExtractPropTypes<ReturnType<typeof catalogViewProps>>
>;
