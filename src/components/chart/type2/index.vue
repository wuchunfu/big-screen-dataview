<template>
  <div class="view">
    <div class="title item">
      <span v-for="(title, index) in data.title" :key="index">{{ title }}</span>
    </div>
    <div class="maquee">
      <ul id="scroll-id">
        <li class="item" v-for="(row, i) in data.data" :key="i">
          <span v-for="(col, j) in row" :key="i + '-' + j">{{ col }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import animation from "@hai2007/tool/animation";

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    let interval = null;
    onMounted(() => {
      let ul = document.getElementById("scroll-id");
      let doit = () => {
        //先向上滚动40px
        animation((deep) => {
          ul.style.marginTop = deep * -26 + "px";
        }, 1000);

        // 然后把第一个变成最后一个后恢复marginTop
        if (ul.children && ul.children[0]) ul.appendChild(ul.children[0]);
        ul.style.marginTop = "0px";
      };

      doit();
      interval = setInterval(doit, 2000);
    });

    onUnmounted(() => {
      if (interval) {
        window.clearInterval(interval);
      }
    });

    return {
      data: ref(props.data.value),
    };
  },
});
</script>
<style lang="scss" scoped>
.view {
  width: 100%;
  display: inline-block;
  font-size: 12px;
  height: calc(100% - 30px);
  overflow: hidden;
  margin-top: 30px;

  .title {
    color: #1b96ee;
    border-bottom: 1px solid #1b96ee;
  }

  .maquee {
    color: #40abf8;
    height: calc(100% - 26px);
    overflow: hidden;
  }

  .item {
    & > span {
      display: inline-block;
      line-height: 26px;
      width: 33.33%;
      text-align: center;
    }
  }
}
</style>
