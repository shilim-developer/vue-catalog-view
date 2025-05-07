<template>
  <div>
    <article-content ref="articleRef" class="article"></article-content>
    <line-catalog
      class="catalog"
      :content-container="$refs.articleRef"
      :selector="['h1', 'h2', 'h3', 'h4', '.test']"
      :use-anchor="false"
      :top-distance="20"
      :is-watch="true"
    >
      <!-- <template v-slot="{ anchor }">
      <div :id="anchor.catalogId">{{ anchor.title }}</div>
    </template> -->
    </line-catalog>
  </div>
</template>

<script>
import ArticleContent from "@/components/ArticleContent.vue";
import { LineCatalog } from "@shilim-developer/vue-catalog";

export default {
  components: {
    ArticleContent,
    LineCatalog,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped lang="scss"></style>
