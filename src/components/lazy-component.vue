<template>
  <div>
    <component :is="instance"></component>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    is: Function,
  },
  setup(props) {
    let instance = ref(null);
    let toInstance = (ClazzFun) => {
      ClazzFun().then((data) => {
        instance.value = data.default;
      });
    };

    toInstance(props.is);

    watch(
      () => props.is,
      (is) => {
        toInstance(is);
      }
    );

    return {
      instance,
    };
  },
});
</script>
<style scoped>
div {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
