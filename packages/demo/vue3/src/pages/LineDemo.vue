<script setup lang="ts">
import { CatalogView } from "vue3-catalog-view";
import ArticleContent from "@/components/ArticleContent.vue";
import { ref } from "vue";
import { VueInstance } from "@vueuse/core";

const articleRef = ref<HTMLElement | VueInstance | undefined>(undefined);
</script>

<template>
  <article-content ref="articleRef" class="article"></article-content>
  <catalog-view
    class="catalog"
    :content-container="articleRef"
    :selector="['h1', 'h2', 'h3', 'h4']"
    :use-anchor="false"
    :top-distance="20"
    :is-watch="true"
  >
  </catalog-view>
</template>

<style scoped>
.catalog {
  width: 300px;
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
</style>
<style>
::-webkit-scrollbar {
  width: 8px;
  background: none;
}
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.3);
  border-radius: 40px;
  width: 4px;
}
</style>
