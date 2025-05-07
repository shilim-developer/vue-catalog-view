<script lang="ts">
export const iframeHeight = "800px";
export const description = "A sidebar with submenus.";
</script>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider } from "@/components/ui/sidebar";
import { RouterView } from "vue-router";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <RouterView></RouterView>
  </SidebarProvider>
</template>
