<template>
  <div class="ui-view-config">
     <div>
      <label>类型：</label>
      <input type="radio" name="type" v-model="type" value="color" />颜色
      <input type="radio" name="type" v-model="type" value="image" />图片
    </div>
    <div v-show="type == 'color'">
      <label>颜色：</label>
      <button
        class="btn-color"
        ref="colorBtn"
        :style="{ backgroundColor: color }"
      ></button>
    </div>
    <div v-show="type == 'image'">
      <label>图片：</label>
      <label
        :style="{ backgroundImage: 'url(' + image + ')' }"
        for="bgimg"
        class="btn-color"
      ></label>
      <input type="text" disabled v-model="image" class="imgsrc" />
      <input
        v-show="false"
        id="bgimg"
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
  .color-them {
    font-size: 12px;
    background-color: #ebeef0;
    vertical-align: top;
    border-radius: 5px;
    padding: 5px;
    span {
      display: inline-block;
      width: 14px;
      height: 10px;
      margin: 0 2px;
      vertical-align: middle;
    }
  }
 & > div {
    line-height: 2em;
    margin-bottom: 10px;
    .btn-color {
      height: 100px;
      vertical-align: middle;
      width: 180px;
      cursor: pointer;
      display: inline-block;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: none;
      outline: none;
    }
    &.btlist {
      padding-top: 0;
      margin-top: 0.1rem;
      text-align: center;

      & > input {
        width: 0.9rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        color: #fff;
        border: 0;
        cursor: pointer;
        margin: 0 10px;
        &.no {
          background: #cbcfcf;
        }

        &.yes {
          background: #1c65a9;
        }
      }
    }
    & > label {
      width: 50px;
      display: inline-block;
      text-align: right;
    }
    & > input {
      &[type="text"] {
        width: 160px;
        margin-left: 10px;
        border-radius: 5px;
        height: 26px;
        padding: 5px;
        outline: none;
        &.imgsrc {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
