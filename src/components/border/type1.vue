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
            }).fillText("标题", width * 0.5, 10)

            // 主轮廓线
            painter.config({
                strokeStyle: "#76adfd"
            })

                // 上
                .beginPath()
                .moveTo(120, 20)
                .lineTo(width - 120, 20)
                .stroke()

                // 下
                .beginPath()
                .moveTo(120, height - 10)
                .lineTo(width - 120, height - 10)
                .stroke()

                // 左
                .beginPath()
                .moveTo(100, height - 10)
                .lineTo(60, height - 10)
                .lineTo(10, height - 60)
                .lineTo(10, 60)
                .lineTo(60, 20)
                .lineTo(100, 20)
                .stroke()

                // 右
                .beginPath()
                .moveTo(width - 100, height - 10)
                .lineTo(width - 60, height - 10)
                .lineTo(width - 10, height - 60)
                .lineTo(width - 10, 60)
                .lineTo(width - 60, 20)
                .lineTo(width - 100, 20)
                .stroke();

            // 粗亮边框
            painter.config({
                strokeStyle: "#aac9e7",
                lineWidth: 3
            })

                // 左上
                .beginPath()
                .moveTo(30, 50)
                .lineTo(60, 25)
                .lineTo(100, 25)
                .stroke()

                // 右上
                .beginPath()
                .moveTo(width - 30, 50)
                .lineTo(width - 60, 25)
                .lineTo(width - 100, 25)
                .stroke()

                // 左下
                .beginPath()
                .moveTo(30, height - 45)
                .lineTo(60, height - 15)
                .lineTo(100, height - 15)
                .stroke()

                // 右下
                .beginPath()
                .moveTo(width - 30, height - 45)
                .lineTo(width - 60, height - 15)
                .lineTo(width - 100, height - 15)
                .stroke();

      },
    };
  },
});
</script>
