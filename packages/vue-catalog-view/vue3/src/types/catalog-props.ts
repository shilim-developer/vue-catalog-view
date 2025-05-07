import { VueInstance } from "@vueuse/core";

export interface CatalogProps {
  contentContainer: HTMLElement | VueInstance | undefined;
  scrollContainer?: HTMLElement | Window;
  selector: string[];
  isWatch?: boolean;
  indent?: number;
  topDistance?: number;
  useAnchor?: boolean;
  ellipsis?: boolean;
}
