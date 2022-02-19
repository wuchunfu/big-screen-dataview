<template>
  <div class="ui-view-config">
    <div>
      <label>类型：</label>
      <input
        type="radio"
        name="type"
        v-model="type"
        value="color"
      />颜色
      <input
        type="radio"
        name="type"
        v-model="type"
        value="image"
      />图片
    </div>
    <div v-show="type == 'color'">
      <label>颜色：</label>
      <button
        class='btn-color'
        ref="colorBtn"
        :style="{ backgroundColor: color }"
      ></button>
    </div>
    <div v-show="type == 'image'">
      <label>图片：</label>
      <input
        type="file"
        style="width: 130px"
        @change="setImage"
        accept="image/*"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
let ColorsPicker = require("colors-picker");

import Background from "../types/Background";

export default defineComponent({
  props: {
    background: Background,
  },
  setup(props, context) {
    let colorBtn = ref(null);
    let type = ref(props.background.type);
    let color = ref(props.background.color);
    let image = ref(props.background.image);

    // 更新model
    function updateModel() {
      context.emit("update:background", {
        type: type.value,
        color: color.value,
        image: image.value,
      });
    }

    onMounted(() => {
      // 选择颜色
      ColorsPicker(colorBtn.value, props.background.color, "选择颜色").then(
        function (_color) {
          color.value = _color;
          updateModel();
        }
      );
    });

    return {
      type,
      color,
      image,
      colorBtn,
      setImage(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = () => {
          image.value = <string>reader.result;
          updateModel();
        };
        reader.readAsDataURL(file);
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-view-config {
  padding: 20px;
  & > div {
    line-height: 2em;
    .btn-color {
      height: 1.5em;
      vertical-align: middle;
      width: 70px;
      cursor: pointer;
    }
  }
}
</style>
