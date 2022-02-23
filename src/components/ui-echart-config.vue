<template>
  <div class="ui-echart-config">
    {{ config }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// echart配置界面的元素信息
import configScheml from "../config/chart/echart";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
  },
  setup(props, context) {
    return {
      config: ref(props.modelValue),
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-echart-config {
}
</style>
