import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

const config: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
} = {
  label: "简体中文",
  lang: "zh",
  title: "vue3-catalog-view",
  description: "根据文章生成目录视图",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "开始",
        items: [
          { text: "介绍", link: "/zh/introduction" },
          { text: "安装", link: "/zh/install" },
        ],
      },
      {
        text: "使用",
        items: [
          { text: "基础使用", link: "/zh/usage/basic" },
          { text: "主题", link: "/zh/usage/theme" },
          { text: "自定义", link: "/zh/usage/customize" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
};
export default config;
