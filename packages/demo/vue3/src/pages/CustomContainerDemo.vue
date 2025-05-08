<script setup lang="ts">
import { NormalCatalog } from "../../../../vue3/src";
import ArticleContent from "@/components/ArticleContent.vue";
import { ref } from "vue";
import { VueInstance } from "@vueuse/core";

const articleRef = ref<HTMLElement | VueInstance | undefined>(undefined);
const articleContainerRef = ref<HTMLElement | undefined>(undefined);
</script>

<template>
  <div class="wrapper">
    <div class="article-content" ref="articleContainerRef">
      <article-content ref="articleRef" class="article"></article-content>
    </div>
    <normal-catalog
      class="catalog"
      :content-container="articleRef"
      :scroll-container="articleContainerRef"
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
  </div>
</template>

<style scoped lang="scss">
.catalog {
  width: 300px;
  max-height: 80%;
}
.article {
  padding: 0 20px;
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

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  .article-content {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
