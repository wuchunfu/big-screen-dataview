import DataView from '../types/DataView';

let dataView: DataView = {
    background: {
        type: "color",
        color: "#000000",
        image: "",
    },
    chartlist: [
        {
            width: 100,
            height: 10,
            left: 0,
            top: 0,
            border: {
                name: "none"
            },
            chart: {
                type: ""
            }
        },
        {
            width: 40,
            height: 45,
            left: 0,
            top: 10,
            border: {
                name: "none"
            },
            chart: {
                type: "echart",
                options: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
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
            width: 20,
            height: 45,
            left: 40,
            top: 10,
            border: {
                name: "none"
            },
            chart: {
                type: ""
            }
        },
        {
            width: 40,
            height: 45,
            left: 60,
            top: 10,
            border: {
                name: "none"
            },
            chart: {
                type: ""
            }
        },
        {
            width: 33.3,
            height: 45,
            left: 0,
            top: 55,
            border: {
                name: "none"
            },
            chart: {
                type: "echart",
                options: {
                    legend: {
                        top: 'bottom'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
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
            width: 33.3,
            height: 45,
            left: 33.3,
            top: 55,
            border: {
                name: "none"
            },
            chart: {
                type: ""
            }
        },
        {
            width: 33.3,
            height: 45,
            left: 66.6,
            top: 55,
            border: {
                name: "none"
            },
            chart: {
                type: ""
            }
        },
    ],
};


export default dataView;
