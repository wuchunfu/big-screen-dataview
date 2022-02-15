import ChartItem from "./ChartItem";
import Background from "./Background";

/**
 * 拖拽的大的数据结构
 */
export default class DataView {

    // 背景
    background: Background

    // 一个个图表信息
    chartlist: Array<ChartItem>

}
