# CatalogView API

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
