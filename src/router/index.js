import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        { // 首頁
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
    {
      path: '/admin',
      component: () => import('../views/Dashboard/DashboardView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Dashboard/AdminLogin.vue'),
        },
        {
          path: 'home',
          component: () => import('../views/Dashboard/AdminHome.vue'),
          children: [
            {
              path: 'ManageAccount',
              component: () => import('../views/Dashboard/AdminManageAccount.vue'),
            },
            {
              path: 'ReviewProposals',
              component: () => import('../views/Dashboard/AdminReviewProposals.vue'),
            },
            {
              path: 'SalesData',
              component: () => import('../views/Dashboard/AdminSalesData.vue'),
            },
            {
              path: 'UpdateBanner',
              component: () => import('../views/Dashboard/AdminUpdateBanner.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
