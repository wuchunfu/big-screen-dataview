import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import observeResize from '../observeResize'
import xhtml from '@hai2007/browser/xhtml'
const image2D = require('image2d')

export default defineComponent({
    props: {
        draw: {
            type: Function,
            default: () => () => { }
        }
    },
    setup(props, { expose }) {

        const elRef = ref<HTMLElement>()
        const canvasRef = ref<HTMLElement>()

        let doUpdate

        // 创建图表对象
        onMounted(() => {

            let _canvas = image2D(canvasRef.value)

            doUpdate = () => {
                let size = xhtml.size(elRef.value)
                _canvas.css({
                    width: size.width + "px",
                    height: size.height + "px"
                })
                props.draw(_canvas.painter().clearRect(), size.width, size.height)
            }

            doUpdate()

            // 开始监听画布大小改变
            stopResize = observeResize(elRef.value, () => {
                doUpdate()
            })
        })

        let stopResize

        // 销毁图表对象
        onBeforeUnmount(() => {

            // 取消监听
            stopResize()
        })

        // 对外暴露接口
        expose({
            doUpdate() {
                doUpdate()
            }
        })

        return () => {
            return (<div ref={elRef} style={{
                width: "100%",
                height: "100%"
            }}>
                <canvas ref={canvasRef}>非常抱歉，您的浏览器不支持canvas!</canvas>
            </div>)
        }
    }
})
