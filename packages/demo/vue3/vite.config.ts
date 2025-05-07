import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "vue3-catalog-view",
        replacement: join(__dirname, "../../vue-catalog-view/vue3/src/index"),
      },
      {
        find: "@",
        replacement: join(__dirname, "src"),
      },
    ],
  },
});
