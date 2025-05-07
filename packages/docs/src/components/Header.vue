<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

defineProps<{ breadList: { name: string; url: string }[] }>();
</script>

<template>
  <header class="flex h-[64px] shrink-0 items-center gap-2 border-b">
    <div class="flex items-center gap-2 px-3">
      <SidebarTrigger />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <template v-for="(item, index) in breadList" :key="index">
            <BreadcrumbSeparator class="hidden md:block" v-if="index !== 0" />
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink :href="item.url">{{ item.name }} </BreadcrumbLink>
            </BreadcrumbItem>
          </template>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
