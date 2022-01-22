<template>
  <div class="editor-page">
    <header>
      <h2>大屏编辑器</h2>
    </header>
    <div>
      <div class="container">
        <div></div>
      </div>
      <div class="config"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { DataView } from "../interface/DataView";

export default defineComponent({
  setup() {
    let dataView: DataView = reactive({
      chartlist: [],
    });

    return {
      dataView,
    };
  },
});
</script>
