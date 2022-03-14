import DataView from '../types/DataView';

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
            basic: {
                width: 40,
                height: 46,
                left: 0,
                top: 10,
            },
            border: {
                name: "uiBorderType1",
                options: {
                    title: "一周收入纪录"
                }
            },
            chart: {
                type: "echart",
                options: {
                    grid: {
                        left: 70
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    xAxis: {
                        type: 'value'
                    },
                    "tooltip": {},
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar'
                        }
                    ]
                }
            }
        },
        {
            basic: {
                width: 20,
                height: 46,
                left: 40,
                top: 10,
            },
            border: {
                name: "uiBorderType2",
                options: {
                    title: "一周消费记录"
                }
            },
            chart: {
                type: "echart",
                options: {
                    angleAxis: {},
                    radiusAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu']
                    },
                    "tooltip": {},
                    polar: {},
                    series: [
                        {
                            type: 'bar',
                            data: [1, 2, 3, 4],
                            coordinateSystem: 'polar',
                            name: 'A',
                            stack: 'a',
                            emphasis: {
                                focus: 'series'
                            }
                        },
                        {
                            type: 'bar',
                            data: [2, 4, 6, 8],
                            coordinateSystem: 'polar',
                            name: 'B',
                            stack: 'a',
                            emphasis: {
                                focus: 'series'
                            }
                        },
                        {
                            type: 'bar',
                            data: [1, 2, 3, 4],
                            coordinateSystem: 'polar',
                            name: 'C',
                            stack: 'a',
                            emphasis: {
                                focus: 'series'
                            }
                        }
                    ]
                }
            }
        },
        {
            basic: {
                width: 40,
                height: 46,
                left: 60,
                top: 10,
            },
            border: {
                name: "uiBorderType1",
                options: {
                    title: "消费类型分布情况"
                }
            },
            chart: {
                type: "echart",
                options: {
                    xAxis: {},
                    yAxis: {},
                    "tooltip": {},
                    series: [
                        {
                            symbolSize: 20,
                            data: [
                                [10.0, 8.04],
                                [8.07, 6.95],
                                [13.0, 7.58],
                                [9.05, 8.81],
                                [11.0, 8.33],
                                [14.0, 7.66],
                                [13.4, 6.81],
                                [10.0, 6.33],
                                [14.0, 8.96],
                                [12.5, 6.82],
                                [9.15, 7.2],
                                [11.5, 7.2],
                                [3.03, 4.23],
                                [12.2, 7.83],
                                [2.02, 4.47],
                                [1.05, 3.33],
                                [4.05, 4.96],
                                [6.03, 7.24],
                                [12.0, 6.26],
                                [12.0, 8.84],
                                [7.08, 5.82],
                                [5.02, 5.68]
                            ],
                            type: 'scatter'
                        }
                    ]
                }
            }
        },
        {
            basic: {
                width: 33.3,
                height: 45,
                left: 0,
                top: 56,
            },
            border: {
                name: "uiBorderType1",
                options: {
                    title: "不同商品的比例"
                }
            },
            chart: {
                type: "echart",
                options: {
                    series: [
                        {
                            type: 'map',
                            map: 'hk',
                            data: [
                                { name: '中西区', value: 20057.34 },
                                { name: '湾仔区', value: 15477.48 },
                                { name: '东区', value: 31686.1 },
                                { name: '南区', value: 6992.6 },
                                { name: '油尖旺区', value: 44045.49 },
                                { name: '深水埗区', value: 40689.64 },
                                { name: '九龙城区', value: 37659.78 },
                                { name: '黄大仙区', value: 45180.97 },
                                { name: '观塘区', value: 55204.26 },
                                { name: '葵青区', value: 21900.9 },
                                { name: '荃湾区', value: 4918.26 },
                                { name: '屯门区', value: 5881.84 },
                                { name: '元朗区', value: 4178.01 },
                                { name: '北区', value: 2227.92 },
                                { name: '大埔区', value: 2180.98 },
                                { name: '沙田区', value: 9172.94 },
                                { name: '西贡区', value: 3368 },
                                { name: '离岛区', value: 806.98 }
                            ]
                        }
                    ],
                    "tooltip": {},
                    "visualMap": {
                        "max": "60000",
                        "min": "0",
                        "top": "middle",
                        "left": "20"
                    }
                }
            }
        },
        {
            basic: {
                width: 33.3,
                height: 45,
                left: 33.3,
                top: 56,
            },
            border: {
                name: "uiBorderType1",
                options: {
                    title: "组之间的类比"
                }
            },
            chart: {
                type: "echart",
                options: {
                    grid: {
                        left: 70
                    },
                    tooltip: {},
                    dataset: {
                        dimensions: ['product', '2015', '2016', '2017'],
                        source: [
                            { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
                            { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
                            { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
                            { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
                        ]
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
                }
            }
        },
        {
            basic: {
                width: 33.3,
                height: 45,
                left: 66.6,
                top: 56,
            },
            border: {
                name: "uiBorderType1",
                options: {
                    title: "指数变化拟合"
                }
            },
            chart: {
                type: "echart",
                options: {
                    grid: {
                        left: 70
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    "tooltip": {},
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true
                        }
                    ]
                }
            }
        },
    ],
};


export default dataView;
