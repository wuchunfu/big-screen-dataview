<template>
  <image2d :draw="draw"></image2d>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup(props) {
    return {
      draw(painter, width, height) {

         // 标题文字
            painter.config({
                textAlign: "center",
                fillStyle: "white",
                "font-size": 10
            }).fillText("标题", width * 0.5, 10);

            // 边细轮廓
            painter.config({
                strokeStyle: "#62639c"
            })
                .beginPath()
                .moveTo(20, 20)
                .lineTo(width - 20, 20)
                .lineTo(width - 10, 30)
                .lineTo(width - 10, height - 20)
                .lineTo(width - 20, height - 10)
                .lineTo(20, height - 10)
                .lineTo(10, height - 20)
                .lineTo(10, 30)
                .closePath()
                .stroke();

            // 边粗白轮廓
            painter.config({
                strokeStyle: "white",
                lineWidth: 2
            })

                // 右上
                .beginPath()
                .moveTo(width - 50, 20)
                .lineTo(width - 20, 20)
                .lineTo(width - 10, 30)
                .lineTo(width - 10, 60)
                .stroke()

                // 左下
                .beginPath()
                .moveTo(10, height - 50)
                .lineTo(10, height - 20)
                .lineTo(20, height - 10)
                .lineTo(50, height - 10)
                .stroke();

            // 蓝色射线
            painter.config({
                strokeStyle: "#172878",
                fillStyle: "#172878",
                lineWidth: 3
            })

                // 左上
                .beginPath()
                .moveTo(0, 23)
                .lineTo(13, 10)
                .lineTo(50, 10)
                .stroke()
                .fillCircle(52, 10, 4)

                // 右上
                .beginPath()
                .moveTo(width, 23)
                .lineTo(width - 13, 10)
                .lineTo(width - 50, 10)
                .stroke()
                .fillCircle(width - 52, 10, 4);

      },
    };
  },
});
</script>
