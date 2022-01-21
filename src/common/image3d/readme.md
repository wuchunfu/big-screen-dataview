# image3d

```html
<div>
    <image3d :draw="draw" :shader='shader'></image3d>
</div>
```

你需要设置容器```div```的大小，然后内置的```image3d```会充满容器：

```css
div{
    width:400px;
    height:300px;
}
```

其中```draw```对应具体的绘制方法，```shader```表示着色器：

```js
<script lang="ts">
    import {
        defineComponent
    } from 'vue'
    export default defineComponent({
        setup() {
            return {
                draw(image3d, width, height) {
                    // 上面的image3d就是image3D的实例
                    // https://hai2007.gitee.io/image3d/
                },
                shader: {
                    vertex: "",
                    fragment: ""
                }
            }
        }
    })
</script>
```
