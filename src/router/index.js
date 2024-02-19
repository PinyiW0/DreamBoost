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
        { // 探索/指定專案頁面
          path: 'explore/designatepro',
          name: 'designatepro',
          component: () => import('../views/front/DesignateProject.vue'),
        },
        { // 探索/指定專案頁面/常見問答區
          path: 'explore/recentqa',
          name: 'recentqa',
          component: () => import('../views/front/DpRecentQa.vue'),
        },
        { // 探索/指定專案頁面/留言區
          path: 'explore/leavemessage',
          name: 'leavemessage',
          component: () => import('../views/front/DpLeaveMessage.vue'),
        },
        { // 探索/指定專案頁面/贊助方案列表
          path: 'explore/projectchoose',
          name: 'projectchoose',
          component: () => import('../views/front/DpProjectChoose.vue'),
        },
        { // 探索/指定專案頁面/付款頁面
          path: 'explore/payinfo',
          name: 'payinfo',
          component: () => import('../views/front/DpPayInfo.vue'),
        },
        { // 探索/指定專案頁面/信用卡付款頁面
          path: 'explore/cardpay',
          name: 'cardpay',
          component: () => import('../views/front/DpCardPay.vue'),
        },
        { // 發起專案
          path: 'launch',
          component: () => import('../views/front/LaunchView.vue'),
        },
        { // 登入註冊
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
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/front/ForgotView.vue'),
    },
  ],
});

export default router;
