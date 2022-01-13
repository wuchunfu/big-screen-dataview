import type { DefineComponent } from 'vue'

const component = Object.create(null)

import Echart from './echart/index'

component.install = function (vue: DefineComponent) {
    vue.component('echart', Echart)
}

export default component
