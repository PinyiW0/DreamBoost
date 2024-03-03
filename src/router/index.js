import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior(savedPosition) {
    if (!savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
  routes: [
    {
      // 前台
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          // 首頁
          path: 'home',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          // 探索頁面
          path: 'explore',
          name: 'explore',
          component: () => import('../views/front/ExploreView.vue'),
        },
        {
          path: 'product/:id',
          component: () => import('../views/front/SingleProductView.vue'),
          children: [
            {
              // 探索/指定專案頁面
              path: 'info',
              component: () => import('../views/front/SingleProductInfo.vue'),
            },
            {
              // 探索/指定專案頁面/常見問答區
              path: 'qa',
              component: () => import('../views/front/SingleProductQa.vue'),
            },
            {
              // 探索/指定專案頁面/留言區
              path: 'commit',
              component: () => import('../views/front/SingleProductCommit.vue'),
            },
          ],
        },
        {
          // 探索/指定專案頁面/贊助方案列表
          path: 'choose',
          component: () => import('../views/front/DpProjectChoose.vue'),
        },
        {
          // 探索/指定專案頁面/付款頁面
          path: 'payinfo',
          component: () => import('../views/front/DpPayInfo.vue'),
        },
        {
          // 探索/指定專案頁面/信用卡付款頁面
          path: 'cardpay',
          component: () => import('../views/front/DpCardPay.vue'),
        },
        {
          // 發起專案
          path: 'launch',
          component: () => import('../views/front/LaunchView.vue'),
        },
        {
          // 專案大綱
          path: 'launch/outline',
          component: () => import('../views/front/LaunchOutline.vue'),
        },
        {
          // 專案內容
          path: 'launch/content',
          component: () => import('../views/front/LaunchContent.vue'),
        },
        {
          // 專案回饋設定
          path: 'launch/feedback',
          component: () => import('../views/front/LaunchFeedback.vue'),
        },
        {
          // 提案資料
          path: 'launch/data',
          component: () => import('../views/front/LaunchData.vue'),
        },
        {
          // 登入註冊
          path: 'member',
          name: 'member',
          component: () => import('../views/front/MemberView.vue'),
        },
        {
          // 忘記密碼
          path: 'forgetpassord',
          name: 'forgetpassord',
          component: () => import('../views/front/ForgetPassord.vue'),
        },
        {
          path: 'proposalmanage/:id',
          component: () => import('../views/front/ProposalManage.vue'),
          children: [
            {
              path: 'salesdata',
              component: () => import('../views/front/ProposalManageSalesData.vue'),
            },
            {
              path: 'orders',
              component: () => import('../views/front/ProposalManageOrders.vue'),
            },
            {
              path: 'replymessage',
              component: () => import('../views/front/ProposalManageReplyMessage.vue'),
            },
          ],
        },
        {
          // 會員後台
          path: 'userboard/:id',
          component: () => import('../views/front/UserBoard.vue'),
          children: [
            {
              // 會員/個人頁面
              path: 'personal',
              component: () => import('../views/front/UbPersonal.vue'),
            },
            {
              // 會員/收藏專案
              path: 'favorite',
              component: () => import('../views/front/UbFavorite.vue'),
            },
            {
              // 會員/贊助紀錄
              path: 'sponsorrecord',
              component: () => import('../views/front/UbSponsor.vue'),
            },
            {
              // 會員/提案紀錄
              path: 'proposalrecord',
              component: () => import('../views/front/UbProposal.vue'),
            },
            {
              // 會員/最新通知（缺設計稿但只要有通知就好）
              path: 'news',
              component: () => import('../views/front/UbNews.vue'),
            },
          ],
        },
      ],
    },
    {
      // 後台
      path: '/admin',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          // 管理員登入
          path: 'login',
          name: 'login',
          component: () => import('../views/dashboard/AdminLogin.vue'),
        },
        {
          path: 'home',
          component: () => import('../views/dashboard/AdminHome.vue'),
          children: [
            {
              // 管理帳號
              path: 'manageaccount',
              component: () => import('../views/dashboard/AdminManageAccount.vue'),
            },
            {
              // 方案審核
              path: 'reviewproposals',
              component: () => import('../views/dashboard/AdminReviewProposals.vue'),
            },
            {
              // 銷售數據
              path: 'salesdata',
              component: () => import('../views/dashboard/AdminSalesData.vue'),
            },
            {
              // 更換首頁BN
              path: 'updatebanner',
              component: () => import('../views/dashboard/AdminUpdateBanner.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
