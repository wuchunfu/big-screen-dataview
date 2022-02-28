import type { DefineComponent } from 'vue'

const component = Object.create(null)

import PlainChart from './plain-chart/index'
import Image2D from './image2d/index'
import Image3D from './image3d/index'

component.install = function (Vue: DefineComponent) {
    Vue.component('plainChart', PlainChart)
    Vue.component('image2d', Image2D)
    Vue.component('image3d', Image3D)
}

export default component
