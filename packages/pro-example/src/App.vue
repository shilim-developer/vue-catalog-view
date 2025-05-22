<script setup lang="ts">
// import { LineCatalog, PointCatalog } from "@shilim-developer/vue-catalog";
// import { ref } from "vue";

// const articleRef = ref<HTMLElement | null>(null);

// function paste(params: any) {
//   const data = params.clipboardData
//     .getData("text")
//     .split("\r\n")
//     .filter((item) => item)
//     .map((item) => item.split("\t"));
//   console.log(data);
// }
</script>

<template>
  <router-view></router-view>
</template>

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
