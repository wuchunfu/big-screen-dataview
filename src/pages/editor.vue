<template>
  <div
    class="editor-page"
    @mousemove="
      mousemoveMoveChart($event);
      mousemoveResizeChart($event);
    "
    @mouseup="
      mouseupMoveChart();
      mouseupResizeChart();
    "
  >
    <div>
      <div class="container">
        <div
          :style="{
            background:
              dataView.background.type == 'color'
                ? dataView.background.color
                : 'url(' + dataView.background.image + ')',
          }"
        >
          <!-- 一个个小图表 -->
          <div
            v-for="(item, index) in dataView.chartlist"
            :key="item"
            style="position: absolute"
            :class="currentIndex == index ? 'active' : ''"
            @mousedown.stop="mousedownMoveChart($event, index)"
            :style="{
              left: item.basic.left + '%',
              top: item.basic.top + '%',
              width: item.basic.width + '%',
              height: item.basic.height + '%',
            }"
          >
            <!-- 缩放 -->
            <div
              class="resize"
              @mousedown.stop="mousedownResizeChart($event)"
            ></div>
            <!-- 按钮 -->
            <div class="btn-list" v-show="currentIndex == index">
              <span
                class="config"
                @click.stop="currentConfigShow = !currentConfigShow"
                >配置</span
              >
              <span class="delete" @click.stop="deleteItem(index)">删除</span>
              <span class="close" @mousedown.stop="currentIndex = -1"
                >关闭</span
              >
            </div>
            <!-- 辅助拖拽 -->
            <div v-show="currentIndex == index" class="help-move"></div>
            <!-- 边框 -->
            <div class="fill-view">
              <lazy-component
                v-if="item.border.name != 'none'"
                :is="borderLazy[item.border.name]"
                :data="item.border.options"
              >
              </lazy-component>
            </div>
            <!-- 图表 -->
            <echarts
              :options="item.chart.options"
              v-if="item.chart.type == 'echarts'"
            ></echarts>
            <div class="fill-view" v-if="item.chart.type == 'define'">
              <lazy-component
                :is="chartLazy[item.chart.name]"
                :data="item.chart.options"
              ></lazy-component>
            </div>
          </div>
        </div>
      </div>
      <div
        class="download-btn fixed-btn"
        title="点击我下载当前JSON"
        @click="downloadChart"
      ></div>
      <div
        class="add-btn fixed-btn"
        title="点击我新增小图形"
        @click="addNewChart"
      ></div>
      <div
        class="config-btn fixed-btn"
        title="点击我打卡或关闭全局配置界面"
        @click="allConfigShow = !allConfigShow"
      ></div>
      <div
        class="config all"
        defType="dialogFrame"
        @mousedown="currentConfig = 'all'"
        :style="{ zIndex: currentConfig == 'all' ? 3 : 2 }"
        v-show="allConfigShow"
      >
        <h2 v-move>
          全局配置
          <span @click="allConfigShow = false">X</span>
        </h2>
        <ui-view-config
          v-model:background="dataView.background"
        ></ui-view-config>
      </div>
      <div
        class="config chart"
        defType="dialogFrame"
        @mousedown="currentConfig = 'chart'"
        :style="{ zIndex: currentConfig == 'chart' ? 3 : 2 }"
        v-show="currentConfigShow && currentIndex != -1"
      >
        <h2 v-move>
          选中配置
          <span @click="currentConfigShow = false">X</span>
        </h2>
        <ui-chart-config
          v-show="currentIndex != -1"
          :chart="
            dataView.chartlist[currentIndex] &&
            dataView.chartlist[currentIndex].chart
          "
          @update:chart="updateCurrentChart"
          :border="
            dataView.chartlist[currentIndex] &&
            dataView.chartlist[currentIndex].border
          "
          @update:border="updateCurrentBorder"
          :basic="
            dataView.chartlist[currentIndex] &&
            dataView.chartlist[currentIndex].basic
          "
          @update:basic="updateCurrentBasic"
        ></ui-chart-config>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DataView from "../types/DataView";

import uiViewConfig from "../components/ui-view-config.vue";
import uiChartConfig from "../components/ui-chart-config.vue";

import dataView_init from "../init/dataView";

// 懒加载组件
import lazyComponent from "../components/lazy-component.vue";
import borderLazy from "../components/border/lazy-load";
import chartLazy from "../components/chart/lazy-load";

export default defineComponent({
  setup() {
    // 存储着大屏信息的对象
    let dataView: DataView = reactive(dataView_init);

    // 当前点击选中
    let currentIndex = ref(-1);
    let currentConfigShow = ref(false);

    // 纪录移动需要的信息
    let currentMoveChartPosition = null;
    let preBasicPosition = null;

    // 移动处理
    let doMoveChart = function (x, y) {
      let w =
        ((x - currentMoveChartPosition[0]) / document.body.clientWidth) * 100;
      let h =
        ((y - currentMoveChartPosition[1]) / document.body.clientHeight) * 100;
      dataView.chartlist[currentIndex.value].basic.left =
        preBasicPosition[0] + w;
      dataView.chartlist[currentIndex.value].basic.top =
        preBasicPosition[1] + h;
    };

    // 纪录缩放需要的信息
    let currentResizeChartSize = null;
    let preBasicSize = null;

    // 缩放处理
    let doResizeChart = function (x, y) {
      let w =
        ((x - currentResizeChartSize[0]) / document.body.clientWidth) * 100;
      let h =
        ((y - currentResizeChartSize[1]) / document.body.clientHeight) * 100;
      dataView.chartlist[currentIndex.value].basic.width = preBasicSize[0] + w;
      dataView.chartlist[currentIndex.value].basic.height = preBasicSize[1] + h;
    };

    // 同步basic
    let updateBasic = function () {
      let index = currentIndex.value;
      currentIndex.value = -1;
      setTimeout(() => {
        currentIndex.value = index;
      });
    };

    return {
      // 删除图表
      deleteItem(index) {
        this.$confirm("温馨提示", "是否确定删除当前选中图表?", () => {
          dataView.chartlist.splice(index, 1);
        });
      },

      // 大屏信息和当前选中
      dataView,
      currentIndex,
      currentConfigShow,
      currentConfig: ref("all"),

      // 更新图表、边框、基本配置等方法
      updateCurrentChart(val) {
        dataView.chartlist[currentIndex.value].chart = val;
      },
      updateCurrentBorder(val) {
        dataView.chartlist[currentIndex.value].border = val;
      },
      updateCurrentBasic(val) {
        dataView.chartlist[currentIndex.value].basic = val;
      },

      // 边框和图表的懒加载组件
      borderLazy: ref(borderLazy),
      chartLazy: ref(chartLazy),

      //   全局（基础）配置界面是否显示
      allConfigShow: ref(false),

      // 添加新的图表
      addNewChart() {
        this.$store.commit("openDialog", {
          id: "addLayer",
        });
      },

      // 下载全局json
      downloadChart() {
        let Link = document.createElement("a");
        Link.download = "big-screen-dataview.json";
        Link.style.display = "none";
        let blob = new Blob([JSON.stringify(dataView)]);
        Link.href = URL.createObjectURL(blob);
        document.body.appendChild(Link);
        Link.click();
        document.body.removeChild(Link);
      },

      // 控制图表移动
      mousedownMoveChart(event, index) {
        currentIndex.value = index;
        currentMoveChartPosition = [event.x, event.y];
        preBasicPosition = [
          dataView.chartlist[currentIndex.value].basic.left,
          dataView.chartlist[currentIndex.value].basic.top,
        ];
      },
      mousemoveMoveChart(event) {
        if (currentMoveChartPosition != null) doMoveChart(event.x, event.y);
      },
      mouseupMoveChart() {
        if (currentMoveChartPosition != null) updateBasic();
        currentMoveChartPosition = null;
      },

      // 控制图表缩放
      mousedownResizeChart(event) {
        currentResizeChartSize = [event.x, event.y];
        preBasicSize = [
          dataView.chartlist[currentIndex.value].basic.width,
          dataView.chartlist[currentIndex.value].basic.height,
        ];
      },
      mousemoveResizeChart(event) {
        if (currentResizeChartSize != null) doResizeChart(event.x, event.y);
      },
      mouseupResizeChart() {
        if (currentResizeChartSize != null) updateBasic();
        currentResizeChartSize = null;
      },
    };
  },
  components: {
    uiViewConfig,
    uiChartConfig,
    lazyComponent,
  },
});
</script>
