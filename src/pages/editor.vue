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
            style="outline: 1px dashed #f5f2f280; position: absolute"
            :style="{
              left: item.left + '%',
              top: item.top + '%',
              width: item.width + '%',
              height: item.height + '%',
            }"
          ></div>
        </div>
      </div>
      <div class="config">
        <!-- 全局视图配置 -->
        <ui-view-config
          v-model:background="dataView.background"
        ></ui-view-config>

        <!-- 当前选中的小图表配置 -->
        <ui-chart-config></ui-chart-config>
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

export default defineComponent({
  setup() {
    // 存储着大屏信息的对象
    let dataView: DataView = reactive(dataView_init);

    return {
      dataView,
      currentIndex: ref(-1),
    };
  },
  directives: {
    drag: vDrag,
  },
  components: {
    uiViewConfig,
    uiChartConfig,
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
}
</style>
