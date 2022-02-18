<template>
  <component :is="instance" :data="data"></component>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: ["is", "data"],
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
      data: ref(props.data),
    };
  },
});
</script>
