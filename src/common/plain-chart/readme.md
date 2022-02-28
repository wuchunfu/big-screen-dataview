# plain-chart

```html
<div>
    <plain-chart :options="options" ref='mychart'></plain-chart>
</div>
```

你需要设置容器```div```的大小，然后内置的```echart```会充满容器：

```css
div{
    width:400px;
    height:300px;
}
```

其中```options```对应具体的EChart配置：

```js
<script lang="ts">
    import {
        defineComponent, ref
    } from 'vue'
    export default defineComponent({
        setup() {
            return {
                options:ref({
                    // https://clunch-contrib.github.io/chart/#/api/options?fixed=top
                })
            }
        }
    })
</script>
```
