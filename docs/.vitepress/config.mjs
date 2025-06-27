import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/茶树菇.png' }]],
  title: '简言',
  description: '情感故事',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      {
        text: '导航',
        items: [
          { text: '主页', link: '/index.md' },
          { text: '情感故事', link: '/图书馆30秒' },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/44113085' },
        ],
      },
    ],

    sidebar: [
      {
        text: '情感故事',
        items: [
          { text: '图书馆30秒', link: '/图书馆30秒' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1411430556' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/44113085' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/1411430556">简言</a>',
    },
    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
})
