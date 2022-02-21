<template>
  <div class="ui-chart-config">
    <nav>
      <span @click="flag = 'basic'" :active="flag == 'basic' ? 'yes' : 'no'"
        >基本</span
      >
      <span @click="flag = 'border'" :active="flag == 'border' ? 'yes' : 'no'"
        >边框</span
      >
      <span @click="flag = 'chart'" :active="flag == 'chart' ? 'yes' : 'no'"
        >图表</span
      >
    </nav>

    <div v-show="flag == 'basic'">
      <div ref="uiBasicConfig"></div>
      <button @click="doUpdateBasic">更新</button>
    </div>

    <div v-show="flag == 'border'">
      <div ref="uiBorderConfig"></div>
      <button @click="doUpdateBorder">更新</button>
    </div>

    <div v-show="flag == 'chart'">
      <div ref="uiChartConfig"></div>
      <button @click="doUpdateChart">更新</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
const OpenWebEditor = require("open-web-editor");

let oweConfig = {
  // 设置颜色（可选）
  color: {
    background: "#ffffff" /*编辑器背景*/,
    text: "#000000" /*文本颜色*/,
    number: "#888484" /*行号颜色*/,
    edit: "#eaeaf1" /*编辑行背景色*/,
    cursor: "#ff0000" /*光标颜色*/,
    select: "#6c6cf1" /*选择背景*/,
  },

  shader: [
    "javascript",
    {
      text: "#000000" /*文本颜色*/,
      annotation: "#6a9955" /*注释颜色*/,
      insign: "#999999" /*符号颜色*/,
      key: "#ff0000" /*关键字颜色*/,
      string: "#ac4c1e" /*字符串颜色*/,
      funName: "#1e50b3" /*函数名称颜色*/,
      execName: "#1e83b1" /*执行方法颜色*/,
    },
  ],
};

export default defineComponent({
  props: {
    chart: {},
    border: {},
    basic: {},
  },
  setup(props, context) {
    let uiChartConfig = ref(null);
    let uiBorderConfig = ref(null);
    let uiBasicConfig = ref(null);
    let oweChart, oweBorder, oweBasic;

    onMounted(() => {
      oweChart = new OpenWebEditor({
        // 编辑器挂载点(必选)
        el: uiChartConfig.value,

        // 初始化文本（可选）
        content: JSON.stringify(props.chart, null, 2),

        ...oweConfig,
      });

      oweBorder = new OpenWebEditor({
        // 编辑器挂载点(必选)
        el: uiBorderConfig.value,

        // 初始化文本（可选）
        content: JSON.stringify(props.border, null, 2),

        ...oweConfig,
      });

      oweBasic = new OpenWebEditor({
        // 编辑器挂载点(必选)
        el: uiBasicConfig.value,

        // 初始化文本（可选）
        content: JSON.stringify(props.basic, null, 2),

        ...oweConfig,
      });

      watch(
        () => props.chart,
        (chart) => {
          oweChart.valueOf(JSON.stringify(chart, null, 2));
        }
      );

      watch(
        () => props.border,
        (border) => {
          oweBorder.valueOf(JSON.stringify(border, null, 2));
        }
      );

      watch(
        () => props.basic,
        (basic) => {
          oweBasic.valueOf(JSON.stringify(basic, null, 2));
        }
      );
    });

    return {
      uiBorderConfig,
      uiChartConfig,
      uiBasicConfig,
      doUpdateBorder() {
        context.emit("update:border", JSON.parse(oweBorder.valueOf()));
      },
      doUpdateChart() {
        context.emit("update:chart", JSON.parse(oweChart.valueOf()));
      },
      doUpdateBasic() {
        context.emit("update:basic", JSON.parse(oweBasic.valueOf()));
      },
      flag: ref("basic"),
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-chart-config {
  & > nav {
    text-align: center;
    margin: 5px 0;
    & > span {
      padding: 0 30px;
      cursor: pointer;
      &[active="yes"] {
        border-bottom: 2px solid red;
      }
    }
  }
  & > div {
    & > div {
      max-height: 400px;
    }
    & > button {
      display: block;
      padding: 5px;
      width: 200px;
      margin: 10px auto;
      border-radius: 5px;
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
