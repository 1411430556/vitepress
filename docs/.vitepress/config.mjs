import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { withSidebar } from 'vitepress-sidebar'
import footnote from 'markdown-it-footnote'
import { figure } from '@mdit/plugin-figure'

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  metaChunk: true,
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      lazyLoading: true,
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    config: md => {
      md.use(footnote, groupIconMdPlugin, figure)
      // 在 h1 下增加字数以及阅读时间
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />` // [!code focus]
        return htmlResult
      }
    },
  },
  vite: {
    plugins: [
      // 代码组图标
      groupIconVitePlugin(),
      // AnnouncementPlugin({
      //   title: '公告',
      //   body: [
      //     { type: 'text', content: '👇公众号👇 ---👇 赞赏 👇' },
      //     {
      //       type: 'image',
      //       src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033',
      //       style: 'display: inline-block;width:46%;padding-right:6px',
      //     },
      //     {
      //       type: 'image',
      //       src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea',
      //       style: 'display: inline-block;width:46%;padding-left:6px',
      //     },
      //   ],
      //   footer: [
      //     {
      //       type: 'text',
      //       content: '欢迎大家私信&加群交流',
      //     },
      //     {
      //       type: 'button',
      //       content: '作者博客',
      //       link: 'https://sugarat.top',
      //     },
      //     {
      //       type: 'button',
      //       content: '博客主题',
      //       link: 'https://theme.sugarat.top',
      //       props: {
      //         type: 'success',
      //       },
      //     },
      //   ],
      // }),
    ],
  },
  base: '/vitepress',
  head: [['link', { rel: 'icon', href: '/vitepress/icon.png' }]],
  title: '简言',
  description: '情感故事',
  themeConfig: {
    outline: [2, 6],
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // 是否在 markdown 中的外部链接旁显示外部链接图标
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
          { text: '情感故事', link: '/文档/6-图书馆30秒' },
          { text: 'Go初学者', link: '/文档/7-Go初学者' },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/44113085' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1411430556' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/44113085' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2025-present <a target="_blank" href="https://github.com/1411430556">COYG⚡️</a>',
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
}

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  capitalizeEachWords: true,
  rootGroupCollapsed: null,
  collapsed: true,
  collapseDepth: 2,
  capitalizeFirst: true,
  // sortMenusByName: true,
  sortMenusByFrontmatterOrder: true,
  // 如果值为 true，则显示带有 .md 文件中 h1 标题内容的标题。如果文件中不存在 h1 标题，则显示 Unknown。
  // useTitleFromFileHeading: true,

  // 根据文件Frontmatter中title的值显示标题
  useTitleFromFrontmatter: true,
}

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
