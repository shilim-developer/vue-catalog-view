import Install from "@/pages/install/Install.vue";
import UsageNormal from "@/pages/usage/normal/Index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/install", component: Install },
  { path: "/usage-normal", component: UsageNormal },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
