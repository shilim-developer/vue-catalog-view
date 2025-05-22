import { CatalogViewProps } from '../types/catalog-types';

export declare const useCatalog: (props: Required<CatalogViewProps>, key?: string) => {
    titles: import('vue').Ref<any[], any[]>;
    currentIndex: import('vue').Ref<number, number>;
    catalogRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    handleAnchorClick: (anchor: any, index: number) => Promise<void>;
};
