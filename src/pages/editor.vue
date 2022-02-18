<template>
  <div class="editor-page">
    <header>
      <h2>大屏编辑器</h2>
    </header>
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
      <div class="config">
        <!-- 全局视图配置 -->
        <ui-view-config
          v-model:background="dataView.background"
        ></ui-view-config>

        <!-- 当前选中的小图表配置 -->
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
      updateCurrentChart(val) {
        dataView.chartlist[currentIndex.value].chart = val;
      },
      borderLazy: ref(borderLazy),
      chartLazy: ref(chartLazy),
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
<style lang="scss" scoped>
.editor-page {
  .container {
    & > div {
      background-size: cover !important;
      background-position: center center !important;
    }
  }
  .fill-view {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
