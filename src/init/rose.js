export default function getRose(datas) {

    return {

        legend: {
            top: 'bottom',
            textStyle: {
                color: "white"
            }
        },
        tooltip: {},
        series: [
            {
                type: 'pie',
                radius: ["30%", "50%"],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 4
                },
                data: datas
            }
        ]
    }

}
