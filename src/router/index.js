import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/launch',
      component: () => import('../views/front/LaunchView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/front/HomeViews.vue'),
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/front/ExploreViews.vue'),
    },
  ],
});

export default router;
