import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Fragrances from '@/views/Fragrances.vue'
import Perfume from '@/views/Perfume.vue';

const router = createRouter({
  history: createWebHashHistory('/perfume-chanel/'),
  routes: [
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
    {
      path: '/perfume',
      name: 'Perfume',
      component: Perfume
    }
  ]
})

export default router
