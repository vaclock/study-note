import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import microApp from '@micro-zoe/micro-app'
microApp.start()
const app = createApp(App)

app.use(naive);
app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
