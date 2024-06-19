import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// console.log(import.meta.env.BASE_URL, createWebHistory(import.meta.env.BASE_URL))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // hash
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/app-vue2-demo',
      name: 'appVue2Demo',
      component: () => import('../views/subAppContainer/vue2.vue')
    }
  ]
})

export default router
