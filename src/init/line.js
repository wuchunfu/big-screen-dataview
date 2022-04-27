let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}
export default {
    grid: {
        top: 50,
        bottom: 30,
        right: 10,
        left: 40
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel:{
            textStyle:{
                fontSize:7
            }
        },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLabel:{
            textStyle:{
                fontSize:7
            }
        },
    },
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: data
        }
    ]
};
