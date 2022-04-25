import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'
import observeResize from '../observeResize'
import xhtml from '@hai2007/browser/xhtml'
import theme from './theme'
import mapLazy from '../map-lazy'

export default defineComponent({
    props: {
        options: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props, { expose }) {

        const elRef = ref<HTMLElement>()
        let chartRef

        let loadMapData = options => {
            return new Promise((resolve, reject) => {

                let maps = [];
                let promises = [];

                if (options.series) {
                    for (let series of options.series) {
                        if (series.type == 'map') {
                            let mapName = series.map;
                            if (maps.indexOf(mapName) < 0) {
                                maps.push(mapName)
                                promises.push(new Promise(resolve => {
                                    mapLazy[mapName]().then(data => {
                                        echarts.registerMap(mapName, data.default)
                                        resolve("")
                                    })
                                }))

                            }
                        }
                    }
                }

                if (options.geo) {
                    for (let geo of options.geo) {

                        let mapName = geo.map;
                        if (maps.indexOf(mapName) < 0) {
                            maps.push(mapName)
                            promises.push(new Promise(resolve => {
                                mapLazy[mapName]().then(data => {
                                    echarts.registerMap(mapName, data.default)
                                    resolve("")
                                })
                            }))

                        }

                    }
                }

                Promise.all(promises).then(() => {
                    resolve("")
                })

            })
        }

        // 创建图表对象
        onMounted(() => {
            echarts.registerTheme('big-screen-dataview', theme)
            chartRef = echarts.init(elRef.value, 'big-screen-dataview')

            loadMapData(props.options).then(() => {
                chartRef.setOption(props.options)
            })

            // 开始监听画布大小改变
            stopResize = observeResize(elRef.value, () => {

                let options = JSON.parse(JSON.stringify(chartRef.getOption()))

                chartRef.clear()
                chartRef.resize(xhtml.size(elRef.value))
                chartRef.setOption(options)
            })
        })

        let stopResize

        // 销毁图表对象
        onBeforeUnmount(() => {
            chartRef.dispose()
            chartRef = null

            // 取消监听
            stopResize()
        })

        watch(
            () => props.options,
            (options) => {
                loadMapData(options).then(() => {
                    chartRef.setOption(options)
                })
            }
        );

        return () => {
            return (<div ref={elRef} style={{
                width: "100%",
                height: "100%"
            }}></div>)
        }
    }
})
