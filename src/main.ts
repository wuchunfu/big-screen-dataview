import { createApp } from 'vue'
import App from './App.vue'

// 引入全局样式
import '@hai2007/style/normalize.css'
import './style/common.scss'
import './style/editor.scss'

// 引入路由
import route from './pages/route'

import commonInstall from './common/install'
import remoteInstall from './hooks/$remote'

import alertInstall from './hooks/$alert'

import store from './store/index'

import vMove from './directives/v-move'

// 创建应用
let app = createApp(App)

// 安装插件、组件等
app.use(remoteInstall)
    .use(commonInstall)
    .use(alertInstall)
    .use(route)
    .use(store)
    .directive('move', vMove)

    // 挂载到页面
    .mount('#app')
