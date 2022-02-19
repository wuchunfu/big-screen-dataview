<template>
  <div class="ui-chart-config">
    <div ref="uiChartConfig"></div>
    <button @click="doUpdate">更新</button>
  </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        watch,
        onMounted
    } from "vue";
    const OpenWebEditor = require("open-web-editor");
    import {
        Chart
    } from "../types/ChartItem";

    export default defineComponent({
        props: {
            modelValue: Chart,
        },
        setup(props, context) {
            let uiChartConfig = ref(null);
            let owe;

            onMounted(() => {
                owe = new OpenWebEditor({
                    // 编辑器挂载点(必选)
                    el: uiChartConfig.value,

                    // 初始化文本（可选）
                    content: JSON.stringify(props.modelValue, null, 2),

                    // 设置颜色（可选）
                    color: {
                        background: "#ffffff" /*编辑器背景*/ ,
                        text: "#000000" /*文本颜色*/ ,
                        number: "#888484" /*行号颜色*/ ,
                        edit: "#eaeaf1" /*编辑行背景色*/ ,
                        cursor: "#ff0000" /*光标颜色*/ ,
                        select: "#6c6cf1" /*选择背景*/ ,
                    },
                });

                watch(
                    () => props.modelValue,
                    (modelValue) => {
                        owe.valueOf(JSON.stringify(modelValue, null, 2));
                    }
                );
            });

            return {
                uiChartConfig,
                doUpdate() {
                    context.emit("update:modelValue", JSON.parse(owe.valueOf()));
                },
            };
        },
    });
</script>
<style lang="scss" scoped>
    .ui-chart-config {
        &>div {
            height: 400px;
        }
        &>button {
            display: block;
            padding: 5px;
            width: 200px;
            margin: 10px auto;
            border-radius: 5px;
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
</style>