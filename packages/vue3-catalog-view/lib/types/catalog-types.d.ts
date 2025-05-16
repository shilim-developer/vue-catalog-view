import { VueInstance } from '@vueuse/core';
import { ExtractPropTypes, PropType } from 'vue';

export declare function catalogViewProps(): {
    type: {
        type: PropType<"default" | "line" | "point">;
        default: string;
    };
    contentContainer: {
        type: PropType<HTMLElement | VueInstance>;
        default: () => HTMLElement;
    };
    scrollContainer: {
        type: PropType<HTMLElement | VueInstance>;
        default: () => Window & typeof globalThis;
    };
    selector: {
        type: PropType<string[]>;
        default: () => string[];
    };
    topDistance: {
        type: NumberConstructor;
        default: number;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    useAnchor: {
        type: BooleanConstructor;
        default: boolean;
    };
    isWatch: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type CatalogViewProps = Partial<ExtractPropTypes<ReturnType<typeof catalogViewProps>>>;
