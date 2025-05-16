import { Anchor } from '../types/anchor';

declare function __VLS_template(): Readonly<{
    default?: (params: {
        active: boolean;
        anchor: Anchor;
    }) => void;
}> & {
    default?: (params: {
        active: boolean;
        anchor: Anchor;
    }) => void;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"default" | "line" | "point">;
        default: string;
    };
    contentContainer: {
        type: import('vue').PropType<HTMLElement | import('@vueuse/core').VueInstance>;
        default: () => HTMLElement;
    };
    scrollContainer: {
        type: import('vue').PropType<HTMLElement | import('@vueuse/core').VueInstance>;
        default: () => Window & typeof globalThis;
    };
    selector: {
        type: import('vue').PropType<string[]>;
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"default" | "line" | "point">;
        default: string;
    };
    contentContainer: {
        type: import('vue').PropType<HTMLElement | import('@vueuse/core').VueInstance>;
        default: () => HTMLElement;
    };
    scrollContainer: {
        type: import('vue').PropType<HTMLElement | import('@vueuse/core').VueInstance>;
        default: () => Window & typeof globalThis;
    };
    selector: {
        type: import('vue').PropType<string[]>;
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
}>> & Readonly<{}>, {
    type: "default" | "line" | "point";
    contentContainer: HTMLElement | import('@vueuse/core').VueInstance;
    scrollContainer: HTMLElement | import('@vueuse/core').VueInstance;
    selector: string[];
    topDistance: number;
    indent: number;
    useAnchor: boolean;
    isWatch: boolean;
    ellipsis: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
