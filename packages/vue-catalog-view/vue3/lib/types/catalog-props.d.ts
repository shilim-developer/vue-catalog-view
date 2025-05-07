import { VueInstance } from '@vueuse/core';

export interface CatalogProps {
    contentContainer: HTMLElement | VueInstance;
    scrollContainer?: HTMLElement | Window;
    selector: string[];
    isWatch?: boolean;
    topDistance?: number;
    useAnchor?: boolean;
}
