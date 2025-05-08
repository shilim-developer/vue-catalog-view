<template>
  <div class="vcv-wrapper" :class="type">
    <div class="vcv-line" v-if="type !== 'default'"></div>
    <div class="vcv-catalog-content" ref="catalogRef">
      <div
        v-for="(anchor, index) in titles"
        :key="anchor.title"
        :id="`vcvAnchor${index}`"
        @click="handleAnchorClick(anchor, index)"
        class="vcv-catalog-item-wrapper"
        :class="currentIndex === index ? 'active' : ''"
        :style="{ paddingLeft: `${(anchor.level - 1) * indent}px` }"
      >
        <slot v-bind="{ active: currentIndex === index, anchor }">
          <div
            class="vcv-catalog-item"
            :class="{
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
import { Anchor } from "@/types/anchor";
import { useCatalog } from "@/hooks/use-catalog";
import { catalogViewProps } from "@/types/catalog-types";

const props = defineProps(catalogViewProps());

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

    .vcv-catalog-item-wrapper {
      position: relative;
    }

    .vcv-catalog-item {
      display: block;
      padding: 4px 15px;
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

  // 默认主题
  &.default {
  }

  // 边线主题
  &.line {
    .vcv-line {
      left: 2px;
    }
    .vcv-catalog-item-wrapper {
      &.active {
        .vcv-catalog-item {
          color: rgba(30, 97, 243, 0.836);
          a {
            color: rgba(30, 97, 243, 0.836);
          }
        }
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
        .vcv-catalog-item {
          color: rgba(30, 97, 243, 0.836);
          a {
            color: rgba(30, 97, 243, 0.836);
          }
        }
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
    }
  }

  // 点主题
  &.point {
    .vcv-line {
      left: 3px;
    }
    .vcv-catalog-item-wrapper {
      &.active {
        .vcv-catalog-item {
          color: rgba(30, 97, 243, 0.836);
          a {
            color: rgba(30, 97, 243, 0.836);
          }
        }
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
    }
  }
}
</style>
