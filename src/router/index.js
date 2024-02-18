import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { // 前台
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        { // 首頁
          path: 'home',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        { // 探索頁面
          path: 'explore',
          name: 'explore',
          component: () => import('../views/front/ExploreView.vue'),
        },
        { // 首頁
          path: 'launch',
          component: () => import('../views/front/LaunchView.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/front/MemberView.vue'),
        },
      ],
    },
    { // 後台
      path: '/admin',
      component: () => import('../views/Dashboard/DashboardView.vue'),
      children: [
        { // 管理員登入
          path: 'login',
          name: 'login',
          component: () => import('../views/Dashboard/AdminView.vue'),
        },
      ],
    },
  ],
});

export default router;
