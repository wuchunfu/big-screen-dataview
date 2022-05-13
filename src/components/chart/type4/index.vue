<template>
  <div class="view">
    <image3d :draw="draw" :shader="shader"></image3d>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import fragmentShader from "./shader-fragment.c";
import vertexShader from "./shader-vertex.c";
const ThreeGeometry = require("three-geometry");
import geometrys from "./geometry";
export default defineComponent({
  setup() {
    return {
      draw(image3d, width, height) {
        // https://www.npmjs.com/package/three-geometry
        let threeGeometry = ThreeGeometry({
          precision: 0.1,
          normal: true,
        });

        let painter = image3d.Painter();
        let buffer = image3d.Buffer();
        let camera = image3d
          .Camera({
            size: 2,

            // 默认的时候，Z轴承的方向是朝里的，这里进行了校对
            // https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set
            proof: true,
          })
          .rotateBody(-0.5, 1, 0, 0)
          .rotateBody(0.2, 0, 0, 1)
          .rotateBody(0.5, -1, 1, -1);

        // 设置点光源的颜色和位置
        image3d.setUniformFloat("u_LColor", 1, 1, 1, 1);
        image3d.setUniformFloat("u_LPosition", -5, 5, 5);

        let doit = () => {
          // 传递照相机
          image3d.setUniformMatrix("u_matrix", camera.value());

          for (let geometry of geometrys) {
            threeGeometry[geometry.name]((data) => {
              buffer
                .write(new Float32Array(data.points))
                .use("a_position", 3, 6, 0)
                .use("a_normal", 3, 6, 3);
              image3d.setUniformFloat("u_color", ...geometry.color);
              painter["draw" + data.methods](0, data.length);
            }, ...geometry.params);
          }
        };

        doit();

        setInterval(() => {
          camera.rotateBody(0.01, 0, 1, 0);
          doit();
        }, 200);
      },
      shader: {
        vertex: vertexShader,
        fragment: fragmentShader,
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.view {
  height: calc(100% - 40px);
  margin-top: 35px;
}
</style>
