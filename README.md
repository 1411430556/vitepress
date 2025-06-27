# 简言

这是一个基于 [VitePress](https://vitepress.dev/) 构建的个人网站，主要用于分享情感故事和个人创作。

## 功能特点

- 简洁优雅的界面设计
- 支持情感故事内容展示
- 中文搜索功能
- 响应式设计，适配各种设备

## 本地开发

### 环境要求

- Node.js 16.0 或更高版本
- pnpm（推荐）或 npm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建静态网站

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 项目结构

```
├── .vitepress/        # VitePress 配置目录
├── public/            # 静态资源目录
├── *.md               # Markdown 内容文件
└── package.json       # 项目依赖和脚本
```

## 部署

本项目可以部署到任何静态网站托管服务，如 GitHub Pages、Netlify、Vercel 等。

## 许可证

[MIT](LICENSE) 