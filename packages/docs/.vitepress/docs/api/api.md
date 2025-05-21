# CatalogView API

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
