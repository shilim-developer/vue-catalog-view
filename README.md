<center>
  <img src="./logo.svg"/>
</center>

<h1 align="center">vue3-catalog-view</h1>

<p align="center">
  <a href="https://github.com/shilim-developer/vue3-catalog-view/blob/master">
    <img alt="version" src="https://img.shields.io/github/package-json/v/shilim-developer/vue3-catalog-view"/>
  </a>
  <a href="https://github.com/shilim-developer/vue3-catalog-view/blob/master/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/shilim-developer/vue3-catalog-view"/>
  </a>
</p>

<div align="center">
<strong>
<samp>

English | [简体中文](README.zh-Hans.md)

</samp>
</strong>
</div>

## Introductions

A Vue3 component that automatically extracts directories from articles based on tags

## Features

- Automatically extract table of contents from articles based on tags
- Can automatically update content changes and container width changes through observation
- Support anchor points
- Built in two themes
- Customize the style

## Install

```sh
npm install vue3-catalog-view
```

```sh
yarn add vue3-catalog-view
```

```sh
pnpm install vue3-catalog-view
```

## Document

[Document](https://shilim-developer.github.io/vue3-catalog-view/)

## Attributes

| Property Name    | Description                                            | Type                       | Default Value                        |
| :--------------- | :----------------------------------------------------- | :------------------------- | :----------------------------------- |
| type             | Theme Type                                             | default \| line \| point   | default                              |
| contentContainer | Article content container                              | HTMLElement \| VueInstance | document.body                        |
| scrollContainer  | Scroll container                                       | HTMLElement \| VueInstance | window                               |
| selector         | Directory matching tags or classes                     | string[]                   | ["h1", "h2", "h3", "h4", "h5", "h6"] |
| topDistance      | Distance from title to top                             | number                     | 0                                    |
| indent           | Subdirectory indent distance                           | number                     | 15                                   |
| useAnchor        | Use Anchor Points                                      | boolean                    | false                                |
| isWatch          | Listening for content changes                          | boolean                    | true                                 |
| ellipsis         | Ellipses are displayed when the line exceeds the limit | boolean                    | true                                 |

## Slots

| Slot Name | Description               |
| :-------- | :------------------------ |
| default   | Customize catalog content |

## License

[License MIT](./LICENSE)
