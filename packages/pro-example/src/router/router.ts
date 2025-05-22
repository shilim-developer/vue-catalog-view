import LineDemo from "@/pages/LineDemo.vue";
import PointDemo from "@/pages/PointDemo.vue";
import NormalDemo from "@/pages/NormalDemo.vue";
import CustomDemo from "@/pages/CustomDemo.vue";
import CustomContainerDemo from "@/pages/CustomContainerDemo.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/line-demo", component: LineDemo },
  { path: "/point-demo", component: PointDemo },
  { path: "/normal-demo", component: NormalDemo },
  { path: "/custom-demo", component: CustomDemo },
  { path: "/custom-container-demo", component: CustomContainerDemo },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
