import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
const outputDir = path.resolve(__dirname, "./lib");

console.log(path.resolve(__dirname, "src"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue3-catalog-view": path.resolve(__dirname, "src/index.ts"),
    },
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        intro: (chunk) => {
          if (chunk.fileName === "vue3-catalog-view.umd.js") {
            return `require("./style.css");`;
          } else if (chunk.fileName === "vue3-catalog-view.es.js") {
            return `import "./style.css";`;
          }
          return "";
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue3-catalog-view",
      formats: ["es", "umd"],
      fileName: (format) => `vue3-catalog-view.${format}.js`,
    },
    outDir: outputDir,
  },
});
