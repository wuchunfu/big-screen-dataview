<template>
    <h1>
        {{title}}
    </h1>
    <image2d :draw="draw"></image2d>
</template>

<script lang="ts">
    import {
        defineComponent,
        ref
    } from 'vue'
    export default defineComponent({
        props: {
            value: {
                type: String,
                default: ""
            }
        },
        setup(props) {
            return {
                title: ref(props.value),
                draw(painter, width, height) {

                    // 上下的高
                    let topHeight = height * 5 / 7
                    let bottomHeight = height - topHeight

                    // 中间、过渡和两边的宽
                    let centerWidth = width * 0.4
                    let dotWidth = bottomHeight * 0.8
                    let sideWidth = (width - centerWidth) * 0.5 - dotWidth


                    painter
                        .config({
                            'fillStyle': "#000000",
                            'strokeStyle': "#000000",
                            'lineWidth': 2
                        })

                    // 绘制主体轮廓
                    .beginPath()
                        .moveTo(0, 0)
                        .lineTo(width, 0)
                        .lineTo(width, topHeight)
                        .lineTo(width - sideWidth, topHeight)
                        .lineTo(width - sideWidth - dotWidth, height)
                        .lineTo(sideWidth + dotWidth, height)
                        .lineTo(sideWidth, topHeight)
                        .lineTo(0, topHeight)
                        .fill()

                    let _temp = [-1, 1]
                    for (let index of _temp) {

                        // 绘制斜边
                        painter
                            .beginPath()
                            .moveTo(width * (1 + index) * 0.5, height - 1)
                            .lineTo(width * 0.5 + index * (sideWidth * 0.4 + centerWidth * 0.5), height - 1)
                            .stroke()

                        // 绘制斜坡
                        let minW = sideWidth * 0.4 * 0.04
                        for (let i = 0; i < 24; i++) {
                            painter
                                .beginPath()
                                .moveTo(width * 0.5 + index * (centerWidth * 0.5 + minW * (i + 1)), height - 1)
                                .lineTo(width * 0.5 + index * (centerWidth * 0.5 + minW * (i + 1) + bottomHeight * 0.8 - 2), height - bottomHeight + 2)
                                .stroke()
                        }

                        // 绘制边缘凸起部分
                        painter
                            .beginPath()
                            .moveTo(width * (1 + index) * 0.5, height - 3)
                            .lineTo(width * (1 + index) * 0.5 - index * sideWidth * 0.2, height - 3)
                            .stroke()

                    }

                }
            }
        }
    })
</script>
<style lang="scss" scoped>
    h1 {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #ffffff;
        font-size: 26px;
        padding: 20px;
        font-weight: 200;
    }
</style>