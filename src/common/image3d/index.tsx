import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import observeResize from '../observeResize'
import xhtml from '@hai2007/browser/xhtml'
const image3D = require('image3d')

export default defineComponent({
    props: {
        shader: {
            type: Object
        },
        draw: {
            type: Function,
            default: () => () => { }
        }
    },
    setup(props) {

        const elRef = ref<HTMLElement>()
        const canvasRef = ref<HTMLElement>()

        // 创建图表对象
        onMounted(() => {

            let image3d = new image3D(canvasRef.value, {
                "vertex-shader": props.shader.vertex,
                "fragment-shader": props.shader.fragment,
                depth: true
            })

            let doUpdate = () => {
                let size = xhtml.size(elRef.value)
                xhtml.setStyles(canvasRef.value, {
                    width: size.width + "px",
                    height: size.height + "px"
                })
                props.draw(image3d, size.width, size.height)
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
