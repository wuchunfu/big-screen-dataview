<template>
  <div class="view">
    <image2d :draw="draw"></image2d>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import doDraw from "./draw";

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    return {
      draw(painter, width, height) {
        doDraw(
          painter,
          {
            width,
            height,
          },
          props.data.value
        );
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.view {
  height: calc(100% - 40px);
  margin-top: 35px;
}
</style>
