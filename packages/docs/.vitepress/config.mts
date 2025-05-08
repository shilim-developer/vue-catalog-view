import { join, resolve } from "path";
import { defineConfig } from "vitepress";
import enConfig from "./locales/en";
import zhConfig from "./locales/zh";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import vueJsx from "@vitejs/plugin-vue-jsx";

console.log(
  "--------------------" + join(__dirname, "../../vue3-catalog-view")
);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "vue3-catalog-view",
  // description: "catalog view auto product for vue3",
  srcDir: join(__dirname, "../../vue3-catalog-view/src"),
  cleanUrls: true,
  lang: "zh",
  locales: {
    root: enConfig,
    zh: zhConfig,
  },
  rewrites: {
    "index-zh.md": "zh/index.md",
    ":pkg/index-zh.md": "zh/:pkg/index.md",
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: resolve(__dirname, "../../vue3-catalog-view"),
      });
    },
  },
  vite: {
    resolve: {
      alias: {
        // '@/': '/src',
        // "vai-component": resolve(__dirname, "../components/index.ts"),
        // "@utils": resolve(__dirname, "../components/_util"),
      },
    },
    plugins: [vueJsx() as any],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // includePaths: ["node_modules/"],
        },
      },
    },
  },
});
