import { createRouter, createWebHistory } from 'vue-router';

// 排行榜
import rank from '@/modules/rank/rank-route';
import roomList from '@/modules/roomList/roomList-route';
import room from '@/modules/room/room-route';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 排行榜
  ...rank,
  ...roomList,
  ...room
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
