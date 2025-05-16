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

[English](README.md) | 简体中文

</samp>
</strong>
</div>

## 项目介绍

一个 Vue3 组件库, 自动根据标签提取文章中的目录

## 功能介绍

- 自动根据标签提取文章中的目录
- 可以观测内容变化和容器宽度变化自动更新
- 支持锚点
- 内置两种主题
- 可以自定义样式

## 安装

```sh
npm install vue3-catalog-view
```

```sh
yarn add vue3-catalog-view
```

```sh
pnpm install vue3-catalog-view
```

## 文档

[文档](https://shilim-developer.github.io/vue3-catalog-view/)

## Attributes

| 属性名           | 说明               | 类型                       | 默认值                               |
| :--------------- | :----------------- | :------------------------- | :----------------------------------- |
| type             | 主题类型           | default \| line \| point   | default                              |
| contentContainer | 文章内容容器       | HTMLElement \| VueInstance | document.body                        |
| scrollContainer  | 滚动容器           | HTMLElement \| VueInstance | window                               |
| selector         | 目目录匹配标签或类 | string[]                   | ["h1", "h2", "h3", "h4", "h5", "h6"] |
| topDistance      | 标题距离顶部距离   | number                     | 0                                    |
| indent           | 子目录缩进距离     | number                     | 15                                   |
| useAnchor        | 使用锚点           | boolean                    | true                                 |
| isWatch          | 监听内容变化       | boolean                    | false                                |
| ellipsis         | 超出一行显示省略号 | boolean                    | true                                 |

## Slots

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义目录内容 |

## 许可证

[License MIT](./LICENSE)
