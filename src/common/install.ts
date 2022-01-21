import type { DefineComponent } from 'vue'

const component = Object.create(null)

import Echart from './echart/index'
import Image2D from './image2d/index'
import Image3D from './image3d/index'

component.install = function (vue: DefineComponent) {
    vue.component('echart', Echart)
    vue.component('image2d', Image2D)
    vue.component('image3d', Image3D)
}

export default component
