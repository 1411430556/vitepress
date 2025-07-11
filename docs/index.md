---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: "m-home-layout"

hero:
  name: 游戏日记
  text: 仍怜故乡水,万里送行舟
  tagline: 大鹏一日同风起，扶摇直上九万里
  image:
    src: /赛博朋克AR.svg
    alt: 背景图
  actions:
    - theme: brand
      text: 开始
      link: /文档/1-Vue笔记
    - theme: alt
      text: API Examples
      link: /文档/8-api-examples

features:
  - icon: ⚡️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🏖️
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🐼
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 首页下划线组件 -->
<HomeUnderline />

<!-- 五彩纸屑组件 -->
<confetti />

<style>
/*爱的魔力转圈圈*/
.VPImage:hover,
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>