import { VueInstance } from "@vueuse/core";
import { ExtractPropTypes, PropType } from "vue";

export function catalogViewProps() {
  return {
    type: {
      type: String as PropType<"default" | "line" | "point">,
      default: "default",
    },
    contentContainer: {
      type: Object as PropType<HTMLElement | VueInstance | undefined>,
      default: () => document.body,
    },
    scrollContainer: {
      type: Object as PropType<HTMLElement | VueInstance | undefined>,
      default: () => window,
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
      default: true,
    },
    isWatch: {
      type: Boolean,
      default: false,
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

// export interface CatalogViewProps {
//   type?: "default" | "line" | "point";
//   contentContainer: HTMLElement | VueInstance | undefined;
//   scrollContainer?: HTMLElement | Window;
//   selector: string[];
//   isWatch?: boolean;
//   indent?: number;
//   topDistance?: number;
//   useAnchor?: boolean;
//   ellipsis?: boolean;
// }
