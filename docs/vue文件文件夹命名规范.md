https://www.cnblogs.com/mouseleo/p/11484550.html 原文地址
https://segmentfault.com/a/1190000009805187
一 文件或文件夹的命名遵循以下原则：

1.index.js 或者 index.vue，统一使用小写字母开头的(kebab-case)命名规范
2.属于组件或类的，统一使用大写字母开头的(PascalCase)命名规范
3.其他非组件或类的，统一使用小写字母开头的(kebab-case)命名规范
4.尽量是名词,大写开头，开头的单词就是所属模块名字（CarDetail、CarEdit、CarList）
5.名字至少两个单词（good: CarDetail）（bad: Car）常用结尾单词有（Detail、Edit、List、Info、Report）以Item 结尾的代表着组件（CarListItem、CarInfoItem）

原因:展开node_modules中的项目依赖，会发现，几乎所有的项目文件夹命名都是 kebab-case命名的，使用kebab-case命名的文件夹比camelCase命名的文件夹看起来更清晰

二 文件夹命名规范
1.全局通用的组件放在 /src/components下
2.其他业务页面中的组件，放在各自页面下的 ./components文件夹下
3.每个components文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有index.vue或
index.js，其他.vue文件统一大写开头（Pascal case），components下的子文件夹名称统一大写开头（PascalCase）,其他文件夹统一使用kebab-case的风格
4.主文件夹名字最好使用复数

全局公共组件：/src/components示例
  - [components]
    - [Breadcrumb]
      - index.vue
    - [Hamburger]
      - index.vue
    - [SvgIcon]
      - index.vue

业务页面内部封装的组件：以 /src/views/layout/components
-[src]
  - [views]
    - [layout]
      - [components]
        - [Sidebar]
          - index.vue
          - Item.vue
          - SidebarItem.vue
        - AppMain.vue
        - index.js
        - Navbar.vue`









