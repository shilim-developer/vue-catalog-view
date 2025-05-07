import { CatalogProps } from '../types/catalog-props';

export declare const useCatalog: (props: Required<CatalogProps>) => {
    titles: import('vue-demi').Ref<any[], any[]>;
    currentIndex: import('vue-demi').Ref<number, number>;
    catalogRef: import('vue-demi').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    handleAnchorClick: (anchor: any, index: number) => Promise<void>;
};
