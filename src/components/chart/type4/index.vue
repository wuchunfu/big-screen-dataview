<template>
  <div class="view" id="chart-type4"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
const Puly = require("puly");
export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    onMounted(() => {
      // 创建3d对象
      var puly = new Puly(document.getElementById("chart-type4"));

      // 设置意图
      puly.setOption({
        series: [
          {
            data: props.data.value,
            type: "candlestick",
          },
        ],
      });
    });
  },
});
</script>
<style lang="scss" scoped>
.view {
  height: calc(100% - 40px);
  margin-top: 35px;
}
</style>
