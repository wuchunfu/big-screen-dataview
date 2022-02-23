<template>
  <div class="ui-echart-config">
    <div style="padding: 50px; color: red; font-weight: 800">
      此面板设计开发中！
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
  },
  setup(props, context) {
    let config = ref(JSON.parse(JSON.stringify(props.modelValue)));
    return {
      config,
      updateValue() {
        context.emit("update:modelValue", config.value);
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-echart-config {
}
</style>
