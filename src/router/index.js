/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
  // scrollBehavior 定義路由切換時頁面滾動的行為
  scrollBehavior(to, from, savedPosition) {
    // 如果有錨點(#) => 滾動到對應的 id 區塊
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // 平滑滾動效果
      }
    } else if (savedPosition) {
      // 返回上一頁時 => 滾動到之前儲存的位置
      return savedPosition
    } else {
      // 否則滾動到頂部
      return { top: 0 }
    }
  },
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
