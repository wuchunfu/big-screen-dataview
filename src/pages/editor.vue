<template>
  <div class="editor-page">
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
            v-drag
            v-for="(item, index) in dataView.chartlist"
            :key="index"
            @click="currentIndex = index"
            style="position: absolute"
            :class="currentIndex == index ? 'active' : ''"
            :style="{
              left: item.left + '%',
              top: item.top + '%',
              width: item.width + '%',
              height: item.height + '%',
            }"
          >
            <!-- 边框 -->
            <div class="fill-view">
              <lazy-component
                v-if="item.border.name != 'none'"
                :is="borderLazy[item.border.name]"
              ></lazy-component>
            </div>
            <!-- 图表 -->
            <echart
              :options="item.chart.options"
              v-if="item.chart.type == 'echart'"
            ></echart>
          </div>
        </div>
      </div>
      <div
        class="config-btn"
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
        v-show="currentIndex != -1"
      >
        <h2 v-move>
          选中配置
          <span @click="currentIndex = -1">X</span>
        </h2>
        <ui-chart-config
          v-if="currentIndex != -1"
          :modelValue="dataView.chartlist[currentIndex].chart"
          @update:modelValue="updateCurrentChart"
        ></ui-chart-config>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DataView from "../types/DataView";

import vDrag from "../directives/v-drag";

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

    let currentIndex = ref(-1);

    return {
      dataView,
      currentIndex,
      currentConfig: ref("all"),
      updateCurrentChart(val) {
        dataView.chartlist[currentIndex.value].chart = val;
      },
      borderLazy: ref(borderLazy),
      chartLazy: ref(chartLazy),
      allConfigShow: ref(false),
    };
  },
  directives: {
    drag: vDrag,
  },
  components: {
    uiViewConfig,
    uiChartConfig,
    lazyComponent,
  },
});
</script>
