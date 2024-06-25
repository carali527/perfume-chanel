import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Fragrances from '../views/Fragrances.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fragrances',
    name: 'Fragrances',
    component: Fragrances
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
});

export default router;
