<div align="center">
  
# 游戏日记

![GitHub stars](https://img.shields.io/github/stars/1411430556/vitepress?style=flat-square&logo=github&color=yellow&label=Stars)
![GitHub forks](https://img.shields.io/github/forks/1411430556/vitepress?style=flat-square&logo=github&color=blue&label=Forks)
![GitHub issues](https://img.shields.io/github/issues/1411430556/vitepress?style=flat-square&logo=github&color=red&label=Issues)
![GitHub commits](https://img.shields.io/github/commit-activity/t/1411430556/vitepress?style=flat-square&logo=github&color=green&label=Commits&include_all_commits)
![GitHub license](https://img.shields.io/github/license/1411430556/vitepress?style=flat-square&logo=github)
![VitePress](https://img.shields.io/badge/VitePress-1.6.3-brightgreen?style=flat-square&logo=vite)
![Vue](https://img.shields.io/badge/Vue-3.0+-brightgreen?style=flat-square&logo=vue.js)
![Node](https://img.shields.io/badge/Node-22.16.0-brightgreen?style=flat-square&logo=node.js)
![pnpm](https://img.shields.io/badge/pnpm-10.15.1-blue?style=flat-square&logo=pnpm)

[![Security Status](https://www.murphysec.com/platform3/v31/badge/1940988725560365056.svg)](https://www.murphysec.com/console/report/1940988725426147328/1940988725560365056)

这是一个基于 [VitePress](https://vitepress.dev/) 构建的个人网站，主要分享游戏相关内容、壁纸推荐、技术笔记和情感故事。
</div>

## 功能特点

- 简洁优雅的界面设计
- 壁纸推荐展示（含动态壁纸）
- 游戏新闻和赛事报道
- 编程技术笔记（Vue等）
- 情感故事分享
- Algolia 搜索功能
- 响应式设计，适配各种设备
- 自动生成侧边栏导航
- 数学公式支持
- 图片懒加载
- 代码组图标支持
- 脚注功能
- 自定义主题
- 图片缩放预览
- 文章阅读时间和字数统计
- 进度条加载效果
- 看板娘角色展示
- 烟花特效和动画效果

## 本地开发

### 环境要求

- Node.js 18.0 或更高版本 (当前使用 22.16.0)
- pnpm（推荐）或 npm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

### 构建静态网站

```bash
pnpm docs:build
```

### 预览构建结果

```bash
pnpm docs:preview
```

## 项目结构

```bash
├── docs/                     # 文档目录
│   ├── .vitepress/           # VitePress 配置目录
│   │   ├── config.mjs        # VitePress 配置文件
│   │   ├── configs/          # 配置模块目录
│   │   ├── theme/            # 主题自定义目录
│   │   │   ├── index.ts      # 主题入口文件
│   │   │   ├── components/   # 自定义组件目录
│   │   │   └── style.css     # 样式文件
│   │   ├── cache/            # 缓存目录
│   │   └── dist/             # 构建输出目录
│   ├── public/               # 静态资源目录
│   │   └── images/           # 图片资源
│   ├── 壁纸推荐/             # 壁纸推荐内容目录
│   ├── 游戏新闻/             # 游戏新闻内容目录
│   ├── 策略/                 # 策略内容目录
│   ├── 编程/                 # 编程技术笔记目录
│   └── *.md                  # Markdown 内容文件
├── package.json              # 项目依赖和脚本
├── pnpm-lock.yaml            # pnpm 依赖锁定文件
└── LICENSE                   # 许可证文件
```

## 技术栈

- [VitePress](https://vitepress.dev/) v1.6.3 - 静态网站生成器
- [vitepress-sidebar](https://www.npmjs.com/package/vitepress-sidebar) v1.33.0 - 自动生成侧边栏
- [markdown-it-mathjax3](https://www.npmjs.com/package/markdown-it-mathjax3) v4.3.2 - 数学公式支持
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) v4.0.0 - 脚注功能
- [vitepress-plugin-group-icons](https://www.npmjs.com/package/vitepress-plugin-group-icons) v1.6.1 - 代码组图标
- [@mdit/plugin-figure](https://www.npmjs.com/package/@mdit/plugin-figure) v0.22.1 - 图片标题支持
- [medium-zoom](https://www.npmjs.com/package/medium-zoom) v1.1.0 - 图片缩放
- [nprogress-v2](https://www.npmjs.com/package/nprogress-v2) v1.1.10 - 进度条
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) v1.9.3 - 烟花特效
- [@theojs/lumen](https://www.npmjs.com/package/@theojs/lumen) v6.3.1 - 文章元数据
- [oh-my-live2d](https://www.npmjs.com/package/oh-my-live2d) v0.19.3 - 看板娘展示

## 部署

本项目配置了 GitHub Pages 部署，基础路径设置为 `/vitepress/`。
可以部署到任何静态网站托管服务，如 GitHub Pages、Netlify、Vercel 等。

## 许可证

[MIT](LICENSE) 

## Star History

<a href="https://www.star-history.com/#1411430556/vitepress&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=1411430556/vitepress&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=1411430556/vitepress&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=1411430556/vitepress&type=Date" />
 </picture>
</a>
