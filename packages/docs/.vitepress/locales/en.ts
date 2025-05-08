import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

const config: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
} = {
  label: "English",
  lang: "en",
  title: "vue3-catalog-view",
  description: "catalog view auto product for vue3",
  themeConfig: {
    outline: {
      level: [1, 3],
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'Bubble', link: '/bubble/index.md' },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
};
export default config;
