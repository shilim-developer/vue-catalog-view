import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path, { resolve } from "path";
import { MD2Vue } from "vite-plugin-mdtovue";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MD2Vue({
      markdown: {
        lineNumbers: true, // 显示行号
        math: true, // 支持数学公式，需要额外安装markdown-it-mathjax3插件，具体参考vitepress文档
        codeCopyButtonTitle: "复制", // 复制按钮显示文字
        config: (md) => {
          md.use(vitepressDemoPlugin, {
            demoDir: resolve(__dirname, "../components"),
          });
        },
      },
    }) as any,
    vue({ include: [/\.vue$/, /\.md$/] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@shilim-developer/vue-catalog": path.resolve(
        __dirname,
        "../../vue-catalog/src/index"
      ),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
