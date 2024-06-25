import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Fragrance from '../views/Fragrance.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fragrance',
    name: 'Fragrance',
    component: Fragrance
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
});

export default router;
