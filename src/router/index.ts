import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MainView from '@/views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
  },
  {
    path: '/about',
    name: 'About',
    component: MainView,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
