<template>
  <div class="ui-chart-config">
    <h4>图表</h4>
    {{ chart }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Chart } from "../types/ChartItem";

export default defineComponent({
  props: {
    modelValue: Chart,
  },
  setup(props) {
    let chart = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (modelValue) => {
        chart.value = modelValue;
      }
    );

    return {
      chart,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
