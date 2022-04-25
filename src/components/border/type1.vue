<template>
  <div class="outline1">
    <div>
      {{ data.title }}
    </div>
  </div>
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
.outline1 {
  height: 100%;
  border: 1px solid #0cabf5;
  & > div {
    color: white;
    height: 30px;
    line-height: 30px;
    background-color: #0672a436;
    padding-left: 10px;
  }
}
</style>
