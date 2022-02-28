import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'
const PlainChart = require('plain-chart')
const Clunch = require('clunch')
import observeResize from '../observeResize'

export default defineComponent({
    props: {
        options: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {

        const elRef = ref<HTMLElement>()
        let chartRef

        // 创建图表对象
        onMounted(() => {

            let myChart = PlainChart.init(Clunch, elRef.value)

            chartRef = myChart.new(props.options)

            // 开始监听画布大小改变
            stopResize = observeResize(elRef.value, () => {
                chartRef.setOption({})
            })
        })

        let stopResize

        // 销毁图表对象
        onBeforeUnmount(() => {

            // 取消监听
            stopResize()
        })

        watch(
            () => props.options,
            (options) => {
                chartRef.setOption(options)
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
