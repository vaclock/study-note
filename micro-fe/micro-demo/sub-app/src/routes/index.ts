// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHashHistory(),
//   routes: [
//     {
//       path: '/',
//       alias:"/index*",
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      alias:"/index*",
      name:"Home",
      component:()=>import("@/views/HomeView.vue")
    },
    {
      path:"/about",
      name:"About",
      component:()=>import("@/views/AboutView.vue")
    }
  ]
})

export default router;