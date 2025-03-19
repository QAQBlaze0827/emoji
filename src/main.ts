import { createApp } from 'vue'

import App from './App.vue'
//路由氣
import router from './router'
//複製插件
const app = createApp(App)
app.use(router)
app.mount('#app')
