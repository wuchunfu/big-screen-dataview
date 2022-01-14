<template>
    <div class='ui-outline'>
        <image2d :draw="draw"></image2d>
        <div class='slot'>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent
    } from 'vue'
    export default defineComponent({
        setup() {
            return {
                draw(painter, width, height) {
                    painter.config({
                        'strokeStyle': "#000000",
                        'lineWidth': 4,
                        'lineDash': [10, width - 20, 10, 0, 10, height - 20, 10, 0, 10, width - 20, 10, 0, 10, height - 20]
                    })

                    .beginPath()
                        .moveTo(0, 0)
                        .lineTo(width, 0)
                        .lineTo(width, height)
                        .lineTo(0, height)
                        .closePath()
                        .stroke()
                }
            }
        }
    })
</script>
<style lang="scss" scoped>
    .ui-outline {
        background-color: #0000005e;
        height: 100%;
        position: relative;
        &>.slot {
            position: absolute;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            top: 10px;
            left: 10px;
        }
    }
</style>