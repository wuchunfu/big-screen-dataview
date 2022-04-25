export class Border {
    // 边框需要适应自定义组件，
    // name是自定义组件的名称
    name: string

    options?: any
}

export class Chart {
    // 边框有类似，
    // 自定义：define
    // echarts:echarts
    type: string

    // 如果是自定义组件，
    // 需要设置name
    name?: string

    options?: any
}

/**
 * 拖拽的小图表的数据结构
 */
export default class ChartItem {

    // 位置和尺寸
    basic: {
        /**
         * 大小和位置的单位都是%，
         * 当我们拖拽或者缩放的时候，
         * 都会在每个1%的边界线上进行吸附
         */
        width: number
        height: number
        left: number
        top: number
    }

    // 边框
    border: Border

    // 图表
    chart: Chart

}
