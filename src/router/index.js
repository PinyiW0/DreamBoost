import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          // 首頁
          path: 'home',
          name: 'home',
          component: () => import('../views/front/HomeViews.vue'),
        },
        {
          path: 'explore',
          name: 'explore',
          component: () => import('../views/front/ExploreViews.vue'),
        },
        {
          path: 'product/:id',
          component: () => import('../views/front/SingleProductView.vue'),
        },
        {
          path: 'launch',
          component: () => import('../views/front/LaunchView.vue'),
        },
        {
          path: 'launch/outline',
          component: () => import('../views/front/LaunchOutline.vue'),
        },
        {
          path: 'launch/content',
          component: () => import('../views/front/LaunchContent.vue'),
        },
        {
          path: 'launch/feedback',
          component: () => import('../views/front/LaunchFeedback.vue'),
        },
        {
          path: 'launch/data',
          component: () => import('../views/front/LaunchData.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/front/MemberView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('../views/Dashboard/DashboardView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Dashboard/AdminViews.vue'),
        },
      ],
    },
  ],
});

export default router;
