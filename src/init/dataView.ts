import DataView from '../types/DataView';

import chinaMap from './chinaMap.js';
import getBar from './bar.js';
import getRose from './rose.js';
import k from './k.js';
import scatter from './scatter.js';
import line from './line.js';
import boxplot from './boxplot.js'

let dataView: DataView = {
    background: {
        type: "image",
        color: "#000000",
        image: "./background.png",
    },
    chartlist: [
        {
            basic: {
                width: 100,
                height: 8,
                left: 0,
                top: 0,
            },
            border: {
                name: "none",
                options: {}
            },
            chart: {
                type: "define",
                name: "uiChartType1",
                options: {
                    title: "可视化大屏探索和实践"
                }
            }
        },
        {
            "basic": {
                "width": 22,
                "height": 35,
                "left": 1,
                "top": 8
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "环境情况"
                }
            },
            "chart": {
                "type": "echarts",
                "options":scatter
            }

        }, {
            "basic": {
                "width": 22,
                "height": 26,
                "left": 1,
                "top": 45
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "运动分类"
                }
            },
            "chart": {
                "type": "echarts",
                "options": getRose([
                    { name: '跑步', value: 750 },
                    { name: '游泳', value: 165 },
                    { name: '羽毛球', value: 160 },
                    { name: '足球', value: 550 }
                ])
            }
        }, {
            "basic": {
                "width": 22,
                "height": 26,
                "left": 1,
                "top": 73
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "市场动态"
                }
            },
            "chart": {
                "type": "echarts",
                "options": line
            }
        }, {
            "basic": {
                "width": 22,
                "height": 29,
                "left": 77,
                "top": 8
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "常吃的事物"
                }
            },
            "chart": {
                "type": "echarts",
                "options": getBar(['苹果', '橘子', '菠萝', '西红柿'], [500, 500, 350, 640])
            }
        }, {
            "basic": {
                "width": 22,
                "height": 29,
                "left": 77,
                "top": 39
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "数据分析"
                }
            },
            "chart": {
                "type": "echarts",
                "options":boxplot
            }
        }, {
            "basic": {
                "width": 22,
                "height": 29,
                "left": 77,
                "top": 70
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "消费分类"
                }
            },
            "chart": {
                "type": "echarts",
                "options": getBar(['食物', '交通', '服装', '其它'], [500, 5500, 3500, 640])
            }
        }, {
            "basic": {
                "width": 52,
                "height": 29,
                "left": 24,
                "top": 70
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "家庭资产走势"
                }
            },
            "chart": {
                "type": "echarts",
                "options": k
            }
        },
        {
            "basic": {
                "width": 52,
                "height": 60,
                "left": 24,
                "top": 8
            },
            "border": {
                name: "uiBorderType2",
                options: {

                }
            },
            "chart": {
                "type": "echarts",
                "options": chinaMap
            }
        }]
};


export default dataView;
