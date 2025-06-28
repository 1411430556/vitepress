import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '👇公众号👇 ---👇 赞赏 👇' },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033',
            style: 'display: inline-block;width:46%;padding-right:6px',
          },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea',
            style: 'display: inline-block;width:46%;padding-left:6px',
          },
        ],
        footer: [
          {
            type: 'text',
            content: '欢迎大家私信&加群交流',
          },
          {
            type: 'button',
            content: '作者博客',
            link: 'https://sugarat.top',
          },
          {
            type: 'button',
            content: '博客主题',
            link: 'https://theme.sugarat.top',
            props: {
              type: 'success',
            },
          },
        ],
      }),
    ],
  },
  base: '/vitepress',
  head: [['link', { rel: 'icon', href: '/vitepress/icon.png' }]],
  title: '简言',
  description: '情感故事',
  themeConfig: {
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    editLink: {
      pattern: 'https://github.com/1411430556/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
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
