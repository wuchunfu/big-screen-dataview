<template>
  <div class="ui-panel-config">
    {{ config }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
    configScheml: {
      type: Object,
    },
  },
  setup(props, context) {
    console.error(props.configScheml);

    return {
      config: ref(props.modelValue),
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-panel-config {
}
</style>
