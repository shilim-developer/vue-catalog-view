<template>
  <div class="vcv-wrapper">
    <div class="vcv-line"></div>
    <div class="vcv-catalog-content" ref="catalogRef">
      <slot
        v-for="(anchor, index) in titles"
        :key="anchor.title"
        v-bind="{ active: currentIndex === index, anchor }"
      >
        <div
          :id="`vcvAnchor${index}`"
          class="vcv-point-catalog-item"
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
import { CatalogProps } from "../types/catalog-props";

const props = withDefaults(defineProps<CatalogProps>(), {
  scrollContainer: () => window,
  topDistance: 0,
  useAnchor: true,
  isWatch: false,
});
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
  left: 3px;
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

  .vcv-point-catalog-item {
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
        top: calc(50% - 3.5px);
        left: 0px;
        width: 7px;
        height: 7px;
        border-radius: 3.5px;
        background: rgba(30, 97, 243, 0.836);
      }
    }
    &:hover {
      &::before {
        content: "";
        position: absolute;
        top: calc(50% - 3.5px);
        left: 0px;
        width: 7px;
        height: 7px;
        border-radius: 3.5px;
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
