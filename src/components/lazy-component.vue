<template>
  <component :is="instance" :data="data"></component>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { isFunction } from "@hai2007/tool";

export default defineComponent({
  props: ["is", "data"],
  setup(props) {
    let instance = ref(null);
    let toInstance = (ClazzFun) => {
      if (isFunction(ClazzFun)) {
        ClazzFun().then((data) => {
          instance.value = data.default;
        });
      } else {
        instance.value = undefined;
      }
    };

    toInstance(props.is);

    watch(
      () => props.is,
      (is) => {
        toInstance(is);
      }
    );

    let dataRef = ref(props.data);
    watch(
      () => props.data,
      (data) => {
        dataRef.value = data;
      }
    );

    return {
      instance,
      data: dataRef,
    };
  },
});
</script>
