import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
const outputDir = path.resolve(__dirname, "./lib");
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      [name]: path.resolve(__dirname, "src/index.ts"),
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
          if (chunk.fileName === `${name}.umd.js`) {
            return `require("./style.css");`;
          } else if (chunk.fileName === `${name}.es.js`) {
            return `import "./style.css";`;
          }
          return "";
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name,
      formats: ["es", "umd"],
      fileName: (format) => `${name}.${format}.js`,
    },
    outDir: outputDir,
  },
});
