<template>
    <div class="view">

        <div class="title">
            <ui-title value='大屏数据可视化'></ui-title>
        </div>

        <div>

            <!-- 中间全屏的 -->
            <div class="map-center">
                <iframe src='https://hai2007.github.io/COVID-19/'></iframe>
            </div>

            <!-- 左边 -->
            <div class="left">
                <div class="top">
                    <ui-outline>
                        <echart :options='options[0]'></echart>
                    </ui-outline>
                </div>
                <div class="bottom">
                    <ui-outline>
                        <echart :options='options[1]'></echart>
                    </ui-outline>
                </div>
            </div>

            <!-- 右边 -->
            <div class="right">
                <div class="top">
                    <ui-outline>
                        <echart :options='options[2]'></echart>
                    </ui-outline>
                </div>
                <div class="bottom">
                    <ui-outline>
                        <echart :options='options[3]'></echart>
                    </ui-outline>
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        ref
    } from 'vue'
    import uiTitle from './components/ui-title.vue'
    import uiOutline from './components/ui-outline.vue'

    import option1 from './options/option1.js'
    import option2 from './options/option2.js'
    import option3 from './options/option3.js'
    import option4 from './options/option4.js'

    export default defineComponent({
        components: {
            uiTitle,
            uiOutline
        },
        setup() {
            return {
                options: ref([option1, option2, option3, option4])
            }
        }
    })
</script>

<style lang="scss" scoped>
    .view {
        height: 100vh;
        background-color: #ffffff;
        .title {
            height: 60px;
        }
        &>div {
            &>div {
                display: inline-block;
                vertical-align: top;
                &.left,
                &.right {
                    width: 30vw;
                    position: fixed;
                    &>div {
                        padding: 10px 20px;
                    }
                }
                &.left {
                    left: 0;
                    &>div {
                        &.top {
                            height: calc(50vh - 30px);
                        }
                        &.bottom {
                            height: calc(50vh - 30px);
                        }
                    }
                }
                &.right {
                    right: 0;
                    &>div {
                        &.top {
                            height: calc(40vh - 30px);
                        }
                        &.bottom {
                            height: calc(60vh - 30px);
                        }
                    }
                }
                &.map-center {
                    width: 100vw;
                    height: calc(100vh - 60px);
                    &>iframe {
                        width: 100%;
                        height: 100%;
                        border: none;
                    }
                }
            }
        }
    }
</style>