<template>
  <div class="ui-chart-config">
    <nav>
      <span @click="flag = 'basic'" :active="flag == 'basic' ? 'yes' : 'no'"
        >基本</span
      >|
      <span @click="flag = 'border'" :active="flag == 'border' ? 'yes' : 'no'"
        >边框</span
      >|
      <span @click="flag = 'chart'" :active="flag == 'chart' ? 'yes' : 'no'"
        >图表</span
      >
    </nav>

    <div v-show="flag == 'basic'">
      <div ref="uiBasicConfig"></div>
      <button @click="doUpdateBasic">更新</button>
    </div>

    <div v-show="flag == 'border'">
      <div>
        <div v-if="borderVal && borderFlag == 'design'">
          <ui-panel-config
            v-model="borderVal"
            :configScheml="borderScheml"
          ></ui-panel-config>
        </div>
        <div v-show="borderFlag == 'source'" ref="uiBorderConfig"></div>

        <span>
          <button
            @click="borderFlag = 'design'"
            :active="borderFlag == 'design' ? 'yes' : 'no'"
          >
            Design
          </button>

          <button
            @click="borderFlag = 'source'"
            :active="borderFlag == 'source' ? 'yes' : 'no'"
          >
            Source
          </button>
        </span>
      </div>
      <button @click="doUpdateBorder">更新</button>
    </div>

    <div v-show="flag == 'chart'">
      <div>
        <div v-show="chartFlag == 'design'">
          <div class="panel-nav">
            <span
              :active="chartVal && chartVal.type == 'define' ? 'yes' : 'no'"
              @click="chartVal.type = 'define'"
              >自定义</span
            >
            <span
              :active="chartVal && chartVal.type == 'echart' ? 'yes' : 'no'"
              @click="chartVal.type = 'echart'"
              >EChart</span
            >
          </div>
          <div v-if="chartVal && chartVal.type == 'define'">
            <ui-panel-config
              v-model="chartVal"
              :configScheml="chartScheml"
            ></ui-panel-config>
          </div>
          <div v-if="chartVal && chartVal.type == 'echart'">
            <ui-echart-config v-model="chartVal"></ui-echart-config>
          </div>
        </div>
        <div v-show="chartFlag == 'source'" ref="uiChartConfig"></div>

        <span>
          <button
            @click="chartFlag = 'design'"
            :active="chartFlag == 'design' ? 'yes' : 'no'"
          >
            Design
          </button>

          <button
            @click="chartFlag = 'source'"
            :active="chartFlag == 'source' ? 'yes' : 'no'"
          >
            Source
          </button>
        </span>
      </div>
      <button @click="doUpdateChart">更新</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
const OpenWebEditor = require("open-web-editor");

import uiPanelConfig from "./ui-panel-config.vue";
import uiEchartConfig from "./ui-echart-config.vue";

import borderScheml from "../config/border/index";
import chartScheml from "../config/chart/index";

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

    let borderVal = ref(props.border);
    let chartVal = ref(props.chart);

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
          chartVal.value = chart;
        }
      );

      watch(
        () => props.border,
        (border) => {
          oweBorder.valueOf(JSON.stringify(border, null, 2));
          borderVal.value = border;
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
      borderVal,
      chartVal,
      doUpdateBorder() {
        //   源码界面
        if (this.borderFlag == "source") {
          let val = JSON.parse(oweBorder.valueOf());
          context.emit("update:border", val);
          this.borderVal = val;
        }

        // 设计界面
        else {
          oweBorder.valueOf(JSON.stringify(borderVal.value, null, 2));
        }
      },
      doUpdateChart() {
        //   源码界面
        if (this.chartFlag == "source") {
          let val = JSON.parse(oweChart.valueOf());
          context.emit("update:chart", val);
          this.chartVal = val;
        }

        // 设计界面
        else {
          oweChart.valueOf(JSON.stringify(chartVal.value, null, 2));
        }
      },
      doUpdateBasic() {
        context.emit("update:basic", JSON.parse(oweBasic.valueOf()));
      },
      borderFlag: ref("design"),
      chartFlag: ref("design"),
      flag: ref("chart"),
      borderScheml: ref(borderScheml),
      chartScheml: ref(chartScheml),
    };
  },
  components: {
    uiPanelConfig,
    uiEchartConfig,
  },
});
</script>
<style lang="scss" scoped>
.ui-chart-config {
  & > nav {
    text-align: center;
    margin: 7px 0;
    user-select: none;
    & > span {
      padding: 6px 10px;
      cursor: pointer;
      font-weight: 800;
      &[active="yes"] {
        border-bottom: 2px solid red;
      }
    }
  }
  & > div {
    & > div {
      border: 1px solid gray;
      margin: 10px;
      & > div {
        height: 300px;
        overflow: auto;
        & > .panel-nav {
          text-align: center;
          margin: 10px 0;
          & > span {
            background-color: rgb(235, 228, 228);
            margin: 5px 0;
            display: inline-block;
            font-size: 12px;
            padding: 3px 10px;
            outline: 2px solid rgb(118, 113, 113);
            &[active="no"] {
              background-color: rgb(118, 113, 113);
              color: white;
              cursor: pointer;
            }
            &[active="yes"] {
              font-weight: 800;
            }
          }
        }
      }
      & > span {
        display: block;
        background-color: gray;
        & > button {
          border: none;
          outline: none;
          padding: 3px 5px;
          &[active="yes"] {
            background-color: white;
          }
          &[active="no"] {
            cursor: pointer;
            background-color: rgb(180, 179, 179);
            color: white;
            outline: 1px solid white;
          }
        }
      }
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
