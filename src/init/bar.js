export default function getBar(rulers, datas) {
    return {
        grid: {
            top: 50,
            bottom: 30,
            right: 10,
            left: 50
        },
        xAxis: {
            type: "category",
            data: rulers,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "white",
                textStyle:{
                    fontSize:7
                }
            },
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: "white",
                textStyle:{
                    fontSize:7
                }
            },
        },
        tooltip: {},
        series: [
            {
                data: datas,
                type: "bar",
                label: {
                    show: true,
                    position: "top",
                },
                barWidth: "20%",
                itemStyle: {
                    normal: {
                        barBorderRadius: [10, 10, 10, 10]
                    }
                }
            },
        ],
    }

}
