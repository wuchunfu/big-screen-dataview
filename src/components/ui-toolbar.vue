<template>
  <ul class="toolbar">
    <li v-for="(key,index) in level1" :key="index">{{ key }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ui-toolbar",
  setup() {
    return {
        level1: ['Design', 'Source'],
    }
  },
});
</script>

<style lang="scss" scoped>
.toolbar{
    display: flex;
    text-align: center;
    
    li{
        flex: 1;
        background: -webkit-linear-gradient(rgb(0, 157, 255), white)
    }
}
</style>