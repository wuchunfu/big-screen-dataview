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

import store from './store/index'

import vMove from './directives/v-move'

// 创建应用
let app = createApp(App)

app.config.globalProperties.alert = function (msg, title, funPos) {

    msg = msg || "未知错误";

    this.$store.commit('openDialog', {
        id: "warning",
        initdata: ['alert', msg, title || "温馨提示", "确定"],
        callback: function () {
            if (typeof funPos == 'function') funPos();
        }
    });
}

// 安装插件、组件等
app.use(remoteInstall)
    .use(commonInstall)
    .use(route)
    .use(store)
    .directive('move', vMove)

    // 挂载到页面
    .mount('#app')
