<template>
  <div class="title">
    <span class="left"
      ><i></i>本项目由
      <a href="https://hai2007.gitee.io/sweethome/" target="_blank">你好2007</a>
      设计并开发</span
    >
    <span class="center">{{ title }}</span>
    <span class="right"> {{ nowadays }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from "vue";
import formatDate from "./formatDate";
export default defineComponent({
  name: "title",
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    //   定时

    let counter = null;
    const nowadays = ref(formatDate(new Date()));

    onMounted(() => {
      counter = window.setInterval(() => {
        nowadays.value = formatDate(new Date());
      }, 1000);
    });

    onUnmounted(() => window.clearInterval(counter));

    // 标题

    let title = ref(props.data.title);
    watch(
      () => props.data,
      (data) => {
        title.value = data.title;
      }
    );

    return {
      nowadays,
      title,
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  height: 50px;
  background-image: url("../../../image/title-line.png");
  background-size: auto 40px;
  background-position: center top;
  background-repeat: no-repeat;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  & > span {
    color: #03a9f4;
    display: inline-block;
    width: calc(50% - 300px);
    vertical-align: middle;
    font-size: 12px;
    & > a {
      color: white;
      text-decoration: underline;
    }
    &.center {
      width: 600px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }
    &.left {
      text-align: right;
      & > i {
        background-image: url("../../../image/logo.png");
        background-repeat: no-repeat;
        display: inline-block;
        height: 50px;
        vertical-align: middle;
        width: 30px;
        background-position: center center;
        background-size: 20px auto;
      }
    }
  }
}
</style>
