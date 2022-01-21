# image2d

```html
<div>
    <image2d :draw="draw"></image2d>
</div>
```

你需要设置容器```div```的大小，然后内置的```image2d```会充满容器：

```css
div{
    width:400px;
    height:300px;
}
```

其中```draw```对应具体的绘制方法：

```js
<script lang="ts">
    import {
        defineComponent
    } from 'vue'
    export default defineComponent({
        setup() {
            return {
                draw(painter, width, height) {
                    // painter就是Image2D提供的画笔
                    // https://hai2007.gitee.io/image2d/#/api/painter?fixed=method
                }
            }
        }
    })
</script>
```
