<template>
  <div class="editor-page">
    <header>
      <h2>大屏编辑器</h2>
    </header>
    <div>
      <div class="container">
        <div>
          <!-- 一个个可以拖拽的小图表 -->
          <div
            v-drag
            v-for="(item, index) in dataView.chartlist"
            :key="index"
            style="outline: 1px dashed red; position: absolute"
            :style="{
              left: item.left + '%',
              top: item.top + '%',
              width: item.width + '%',
              height: item.height + '%',
            }"
          ></div>
        </div>
      </div>
      <div class="config"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import DataView from "../types/DataView";
import vDrag from "../directives/v-drag";

export default defineComponent({
  setup() {
    // 存储着大屏信息的对象
    let dataView: DataView = reactive({
      chartlist: [
        {
          width: 100,
          height: 10,
          left: 0,
          top: 0,
        },
        {
          width: 40,
          height: 45,
          left: 0,
          top: 10,
        },
        {
          width: 20,
          height: 45,
          left: 40,
          top: 10,
        },
        {
          width: 40,
          height: 45,
          left: 60,
          top: 10,
        },
        {
          width: 33.3,
          height: 45,
          left: 0,
          top: 55,
        },
        {
          width: 33.3,
          height: 45,
          left: 33.3,
          top: 55,
        },
        {
          width: 33.3,
          height: 45,
          left: 66.6,
          top: 55,
        },
      ],
    });

    return {
      dataView,
    };
  },
  directives: {
    drag: vDrag,
  },
});
</script>
