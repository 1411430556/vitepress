// https://vitepress.dev/guide/custom-theme
import { h, watch, onMounted, nextTick } from 'vue'
import { useRoute, inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'
// 首页文字下划线
import HomeUnderline from './components/HomeUnderline.vue'
// 五彩纸屑
import confetti from './components/confetti.vue'
// 鼠标粒子效果
import MouseClick from './components/MouseClick.vue'
// 鼠标粒子跟随效果
import MouseFollower from './components/MouseFollower.vue'
// 字数及阅读时间
import ArticleMetadata from './components/ArticleMetadata.vue'
// 图片描述
import '@theojs/lumen/pic'
// 代码组图标
import 'virtual:group-icons.css'
import './style.css'
import './style/index.scss'
import './style/custom.css'
// 明亮、暗黑模式切换
import MyLayout from './components/MyLayout.vue'
import RainbowAnimationSwitcher from './components/RainbowAnimationSwitcher.vue'
// 切换路由进度条
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
// 视频组件
import { Vid, BoxCube, Card, Links, Pill } from '@theojs/lumen'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,

  // 图片放大插件
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },

  Layout: () => {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('HomeUnderline', HomeUnderline)
    app.component('confetti', confetti)
    app.component('MouseClick', MouseClick)
    app.component('MouseFollower', MouseFollower)
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher)
    app.component('Vid', Vid)
    app.component('Pill', Pill)
    app.component('Links', Links)
    app.component('Card', Card)
    app.component('BoxCube', BoxCube)
    // 切换路由进度条
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChange = () => {
        NProgress.done() // 停止进度条
      }
    }

    // ...
    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/vitepress/'),
        { immediate: true },
      )
    }
  },
} satisfies Theme

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
