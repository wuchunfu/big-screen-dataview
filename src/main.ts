import { createApp } from 'vue'
import App from './App.vue'

// 引入全局样式
import '@hai2007/style/normalize.css'
import './assets/style.scss'

import commonInstall from './common/install'

// 创建应用并挂载到页面
createApp(App)
    .use(commonInstall)
    .mount('#app')
