/**
 * 拖拽的小图表的数据结构
 */
export default class ChartItem {

    // 位置和尺寸
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
