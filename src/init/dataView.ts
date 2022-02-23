import DataView from '../types/DataView';

let dataView: DataView = {
    background: {
        type: "color",
        color: "#000000",
        image: "",
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
                        data: ['Mon', 'Tue', 'Wed', 'Thu'],
                        z: 10
                    },
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
                            name: 'Nightingale Chart',
                            type: 'pie',
                            radius: [30, 70],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 8
                            },
                            data: [
                                { value: 40, name: 'rose 1' },
                                { value: 38, name: 'rose 2' },
                                { value: 32, name: 'rose 3' },
                                { value: 30, name: 'rose 4' },
                                { value: 28, name: 'rose 5' },
                                { value: 26, name: 'rose 6' },
                                { value: 22, name: 'rose 7' },
                                { value: 18, name: 'rose 8' }
                            ]
                        }
                    ]
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
