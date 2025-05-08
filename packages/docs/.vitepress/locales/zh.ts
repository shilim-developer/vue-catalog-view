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
    nav: [
      { text: "Home", link: "/zh" },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'Bubble', link: '/zh/bubble/index.md' },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
};
export default config;
