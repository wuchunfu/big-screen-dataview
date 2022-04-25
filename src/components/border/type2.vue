<template>
  <div class="outline2"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.outline2 {
  height: 100%;
  border: 1px solid #0cabf5;
}
</style>
