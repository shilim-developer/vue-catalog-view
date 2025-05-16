import { join, resolve } from "path";
import { defineConfig } from "vitepress";
import enConfig from "./locales/en";
import zhConfig from "./locales/zh";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { whyframeVue } from "@whyframe/vue";
import { whyframe } from "@whyframe/core";
import { postcssIsolateStyles } from "vitepress";
console.log(
  "--------------------" + join(__dirname, "../../vue3-catalog-view/src")
);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "vue3-catalog-view",
  // description: "catalog view auto product for vue3",
  srcDir: join(__dirname, "./docs"),
  cleanUrls: true,
  lang: "zh",
  locales: {
    root: enConfig,
    zh: zhConfig,
  },
  rewrites: {
    "index-zh.md": "zh/index.md",
    ":page-zh.md": "zh/:page.md",
    ":pkg/:page-zh.md": "zh/:pkg/:page.md",
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: resolve(__dirname, "../../vue3-catalog-view/src/demo"),
      });
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "../../vue3-catalog-view/src"),
        "vue3-catalog-view": resolve(
          __dirname,
          "../../vue3-catalog-view/src/index"
        ),
        // "@utils": resolve(__dirname, "../components/_util"),
      },
    },
    plugins: [
      vueJsx() as any,
      whyframe({
        defaultSrc: "/frames/default",
      }),
      whyframeVue({
        include: /\.(?:vue|md)$/, // also scan in markdown files
      }),
      postcssIsolateStyles({
        includeFiles: [/vp-doc\.css/, /base\.css/], // defaults to /base\.css/
      }),
    ],
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
