<script setup lang="ts">
import { NormalCatalog } from "vue3-catalog-view";
import ArticleContent from "@/components/ArticleContent.vue";
import { ref } from "vue";
import { VueInstance } from "@vueuse/core";

const articleRef = ref<HTMLElement | VueInstance | undefined>(undefined);
</script>

<template>
  <article-content ref="articleRef" class="article"></article-content>
  <normal-catalog
    class="catalog"
    :content-container="articleRef"
    :selector="['h1', 'h2', 'h3', 'h4']"
    :use-anchor="false"
    :top-distance="20"
    :is-watch="true"
  >
    <template #default="{ active, anchor }">
      <div
        class="catalog-item"
        :class="{ active }"
        :style="{ paddingLeft: `${anchor.level * 15}px` }"
      >
        {{ anchor.title }}
      </div>
    </template>
  </normal-catalog>
</template>

<style scoped lang="scss">
.catalog {
  width: 150px;
  max-height: 80%;
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 999;
}
.article {
  padding: 0 20px;
  padding-right: 320px;
}

.catalog-item {
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
  &.active {
    background: rgba(0, 0, 0, 0.1);
    color: rgba(30, 97, 243, 0.836);
  }
  &:hover {
    color: rgba(30, 97, 243, 0.836);
  }
}
</style>
