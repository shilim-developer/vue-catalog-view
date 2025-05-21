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
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "introduction", link: "/introduction" },
          { text: "install", link: "/install" },
        ],
      },
      {
        text: "Usage",
        items: [
          { text: "basic", link: "/usage/basic" },
          { text: "theme", link: "/usage/theme" },
          { text: "customize", link: "/usage/customize" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
};
export default config;
