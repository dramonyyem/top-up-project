
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Home from '@/views/public/Home.vue';
import ProductDetail from '@/views/public/ProductDetail.vue';
import Payment from '@/views/public/Payment.vue';
import PaymentList from '@/views/public/PaymentList.vue';

import { createRouter, createWebHistory } from 'vue-router/auto';
// import { routes } from 'vue-router/auto-routes'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/p2paid/mlbb/:id',
    component: ProductDetail
  },
  {
    path: '/payment',
    component: Payment
  },
  {
    path : '/payment/list',
    component: PaymentList
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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
