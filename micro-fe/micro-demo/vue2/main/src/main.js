import Vue from 'vue'
import App from './App.vue'
import router from "@/routes"
import microApp from '@micro-zoe/micro-app'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


microApp.start()

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
