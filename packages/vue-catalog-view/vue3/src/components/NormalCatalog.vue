<template>
  <div class="vcv-wrapper">
    <div class="vcv-catalog-content" ref="catalogRef">
      <div
        v-for="(anchor, index) in titles"
        :key="anchor.title"
        :id="`vcvAnchor${index}`"
        @click="handleAnchorClick(anchor, index)"
        :style="{ paddingLeft: `${(anchor.level - 1) * indent}px` }"
      >
        <slot v-bind="{ active: currentIndex === index, anchor }">
          <div
            class="vcv-line-catalog-item"
            :class="{
              active: currentIndex === index,
              'text-ellipsis': ellipsis,
            }"
          >
            <a :href="`#${anchor.id}`" v-if="useAnchor">{{ anchor.title }}</a>
            <span v-else>{{ anchor.title }}</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Anchor } from "../types/anchor";
import { useCatalog } from "../hooks/use-catalog";
import { CatalogProps } from "../types/catalog-props";

const props = withDefaults(defineProps<CatalogProps>(), {
  contentContainer: () => document.body,
  scrollContainer: () => window,
  topDistance: 0,
  indent: 15,
  useAnchor: true,
  isWatch: false,
  ellipsis: true,
});

defineSlots<{
  default?: (params: { active: boolean; anchor: Anchor }) => void;
}>();

const { titles, currentIndex, catalogRef, handleAnchorClick } =
  useCatalog(props);
</script>
<style lang="scss" scoped>
.vcv-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.vcv-line {
  content: "";
  position: fixed;
  top: 1px;
  left: 2px;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.06);
  z-index: 999;
}
.vcv-catalog-content {
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

  .vcv-line-catalog-item {
    display: block;
    padding: 4px 8px;
    cursor: pointer;
    color: rgba(95, 93, 93, 0.973);
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    user-select: none;
    position: relative;
    &.text-ellipsis {
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }

    &.active {
      color: rgba(30, 97, 243, 0.836);
    }
    &:hover {
      color: rgba(30, 97, 243, 0.836);
    }
    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
