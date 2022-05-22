import DataView from '../types/DataView';

import chinaMap from './chinaMap.js';
import getBar from './bar.js';
import getRose from './rose.js';
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
                "options": scatter
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
                    title: "消费分析"
                }
            },
            "chart": {
                type: "define",
                name: "uiChartType4",
                options: {
                    value: [
                        [20, 34, 10, 38],
                        [40, 35, 30, 50],
                        [31, 38, 33, 44],
                        [38, 15, 5, 42]
                    ]
                }
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
                "options": boxplot
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
                "width": 25.5,
                "height": 29,
                "left": 24,
                "top": 70
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "消费top5"
                }
            },
            "chart": {
                type: "define",
                name: "uiChartType3",
                options: {
                    value: [{
                        "name": "电脑",
                        "value": 8000
                    }, {
                        "name": "猫",
                        "value": 6900
                    }, {
                        "name": "椅子",
                        "value": 6875
                    }, {
                        "name": "水壶",
                        "value": 4675
                    }, {
                        "name": "食物",
                        "value": 300
                    }]
                }
            }
        },
        {
            "basic": {
                "width": 25.5,
                "height": 29,
                "left": 50.5,
                "top": 70
            },
            "border": {
                name: "uiBorderType1",
                options: {
                    title: "消费明细"
                }
            },
            "chart": {
                type: "define",
                name: "uiChartType2",
                options: {
                    value: {
                        "title": ["名称", "金额", "时间"],
                        "data": [
                            ["买猫", "600元", "5月13日"],
                            ["出去吃饭", "230元", "5月1日"],
                            ["买花瓶", "34元", "5月19日"],
                            ["一些日常用品", "430元", "5月1日"],
                            ["生病了", "12元", "5月13日"],
                            ["盆栽", "17元", "5月25日"],
                            ["椅子坏了", "137元", "5月10日"],
                            ["刨土的工具", "17元", "5月15日"],
                            ["风扇", "40元", "5月30日"],
                            ["水杯", "90元", "5月2日"]
                        ]
                    }
                }
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
