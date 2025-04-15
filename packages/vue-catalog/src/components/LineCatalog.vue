<template>
  <div class="vc-wrapper">
    <div class="vc-line"></div>
    <div class="vc-catalog-content" ref="catalogRef">
      <slot
        v-for="(anchor, index) in titles"
        :key="anchor.title"
        v-bind="{ active: currentIndex === index, anchor }"
      >
        <div
          :id="`vcAnchor${index}`"
          class="vc-line-catalog-item"
          :class="currentIndex === index ? 'active' : ''"
          :style="{ paddingLeft: `${10 + anchor.level * 15}px` }"
          @click="handleAnchorClick(anchor, index)"
        >
          <a :href="`#${anchor.id}`" v-if="useAnchor">{{ anchor.title }}</a>
          <span v-else>{{ anchor.title }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCatalog } from "../hooks/use-catalog";

export interface LineCataLogProps {
  contentContainer?: HTMLElement;
  scrollContainer?: HTMLElement | Window;
  selector: string[];
  isWatch: boolean;
  topDistance?: number;
  useAnchor?: boolean;
}

const props = withDefaults(defineProps<LineCataLogProps>(), {
  contentContainer: () => document.body,
  scrollContainer: () => window,
  topDistance: 0,
  useAnchor: true,
});
const { titles, currentIndex, catalogRef, handleAnchorClick } =
  useCatalog(props);
</script>
<style lang="scss" scoped>
.vc-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.vc-line {
  content: "";
  position: fixed;
  top: 1px;
  left: 2px;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.06);
  z-index: 999;
}
.vc-catalog-content {
  height: 100%;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 8px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.3);
    border-radius: 40px;
    width: 4px;
  }

  .vc-line-catalog-item {
    display: block;
    padding: 4px 2px;
    cursor: pointer;
    color: rgba(95, 93, 93, 0.973);
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    user-select: none;
    position: relative;

    &.active {
      color: rgba(30, 97, 243, 0.836);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 1px;
        width: 3px;
        height: 100%;
        background: rgba(30, 97, 243, 0.836);
        border-radius: 3px;
      }
    }
    &:hover {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 1px;
        width: 3px;
        height: 100%;
        background: rgba(30, 97, 243, 0.836);
      }
    }
    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
