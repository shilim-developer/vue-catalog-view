<script setup lang="ts">
import { ArticleContent } from "vue3-catalog-view";
// import ArticleContent from "./components/ArticleContent.vue";
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
