import { createApp } from 'vue'
import App from './App.vue'

// 引入全局样式
import '@hai2007/style/normalize.css'
import './style/common.scss'
import './style/editor.scss'
import './style/view.scss'

// 引入路由
import route from './pages/route'

import commonInstall from './common/install'
import remoteInstall from './hooks/$remote'

// 创建应用并挂载到页面
createApp(App)
    .use(remoteInstall)
    .use(commonInstall)
    .use(route)
    .mount('#app')
