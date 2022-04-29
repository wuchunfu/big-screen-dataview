export default function (painter, size, data) {

    let itemHeight = size.height * 0.2

    // 先清空画布
    painter.clearRect()

    for (let i = 0; i < data.length; i++) {

        painter.config({
            fillStyle: ["red", "#ecb202", '#0370e4'][i] || "gray"
        })
            .fillRect(0.3 * itemHeight, itemHeight * (i + 0.3), 0.4 * itemHeight, 0.4 * itemHeight)

            .config({
                "font-size": itemHeight * 0.3,
                textBaseline: "middle",
                textAlign: "center",
                fillStyle: "white"
            })
            .fillText(i + 1, 0.5 * itemHeight, (i + 0.5) * itemHeight)

            .config({
                fillStyle: "#1b96ee"
            })
            .fillRect(itemHeight, (i + 0.5) * itemHeight, (data[i].value / data[0].value) * (size.width - itemHeight * 3), 0.25 * itemHeight)
            .config({
                textBaseline: "top",
                textAlign: "left",
                "font-size": itemHeight * 0.3,
            })
            .fillText(data[i].value, itemHeight * 1.5 + (data[i].value / data[0].value) * (size.width - itemHeight * 3), (i + 0.5) * itemHeight)
            .config({
                textBaseline: "bottom",
                "font-size": itemHeight * 0.3,
                fillStyle: "white"
            })
            .fillText(data[i].name, itemHeight, (i + 0.4) * itemHeight)

    }

}
