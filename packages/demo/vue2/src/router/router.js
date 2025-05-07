import LineDemo from "@/pages/LineDemo.vue";
import PointDemo from "@/pages/PointDemo.vue";
import NormalDemo from "@/pages/NormalDemo.vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/line-demo", component: LineDemo },
  { path: "/point-demo", component: PointDemo },
  { path: "/normal-demo", component: NormalDemo },
];

export const router = new VueRouter({
  routes,
});
