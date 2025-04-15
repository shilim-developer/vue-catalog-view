import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@shilim-developer/vue-catalog",
        replacement: join(__dirname, "../../vue-catalog/src/index"),
      },
    ],
  },
});
