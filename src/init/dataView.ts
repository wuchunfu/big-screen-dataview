import DataView from '../types/DataView';

let dataView: DataView = {
    background: {
        type: "color",
        color: "rgb(17, 39, 88)",
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
                type: "plainchart",
                options: {
                    type: "bar",
                    data: [34, 10, 20, 79, 13, 4],
                    xAxis: {
                        values: ["小麦", "大豆", "土豆", "玉米", "青菜", "香蕉"]
                    },
                    yAxis: {}
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
                type: "plainchart",
                options: {
                    type: "ring",
                    data: [4, 1, 20, 79, 13, 9]
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
                type: "plainchart",
                options: {
                    type: "line",
                    data: [34, 10, 20, 79, 13, 4],
                    xAxis: {
                        values: ["小麦", "大豆", "土豆", "玉米", "青菜", "香蕉"]
                    },
                    yAxis: {}
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
                type: "plainchart",
                options: {
                    type: "pie",
                    data: [{
                        name: "玉米",
                        value: 14
                    }, {
                        name: "大豆",
                        value: 9
                    }, {
                        name: "香蕉",
                        value: 24
                    }, {
                        name: "西瓜",
                        value: 41
                    }]
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
                type: "plainchart",
                options: {
                    type: "bar",
                    data: [34, 10, 20, 79, 13, 4],
                    xAxis: {
                        values: ["小麦", "大豆", "土豆", "玉米", "青菜", "香蕉"]
                    },
                    yAxis: {}
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
                type: "plainchart",
                options: {
                    type: "bar",
                    data: [34, 10, 20, 79, 13, 4],
                    xAxis: {
                        values: ["小麦", "大豆", "土豆", "玉米", "青菜", "香蕉"]
                    },
                    yAxis: {}
                }
            }
        },
    ],
};


export default dataView;
