import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomePage.vue")
    },
    {
      //路由路径最好是非严格匹配
      path: "/app-vue2-demo*",
      name: "Vue2DemoPage",
      component: () => import("@/views/subAppContainer/Vue2Demo.vue")
    },
    {
      //路由路径最好是非严格匹配
      path: "/app-vue3-demo*",
      name: "Vue2DemoPage",
      component: () => import("@/views/subAppContainer/Vue3Demo.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("主--->", to);
  console.log("主--->", from);

  next();
})

export default router;