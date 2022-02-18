<template>
  <ul class="rootApp">
    <!-- 主界面 -->
    <li class="ui-main">
      <router-view />
      <a href="https://github.com/hai2007/big-screen-dataview" target="_blank"
        >Fork Me on Github</a
      >
    </li>

    <!-- 弹框界面 -->
    <li class="ui-dialog">
      <div
        @click.stop="$store.commit('closeDialog')"
        class="view shade"
        v-if="
          $store.state.dialogs.length > 0 &&
          !$store.state.dialogs[$store.state.dialogs.length - 1].shade
        "
      >
        <!-- 统一遮罩 -->
      </div>
      <div
        class="view"
        defType="dialogFrame"
        v-for="(dialog, index) in $store.state.dialogs"
        :key="index"
      >
        <div @click.stop="doIt()">
          <lazy-component
            v-bind:is="all_dialog[dialog.id]"
            v-bind:data="dialog.data"
          ></lazy-component>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
// 引入弹框页面
import dialogs from "./dialogs/lazy-load";

import lazyComponent from "./components/lazy-component.vue";

export default {
  data() {
    return {
      // 全部弹框
      all_dialog: dialogs,
    };
  },
  components: {
    lazyComponent,
  },
  methods: {
    doIt() {
      // todo
    },
  },
};
</script>
<style scoped lang='scss'>
a {
  user-select: none;
  position: fixed;
  transform: rotate(45deg);
  line-height: 1.6em;
  transform-origin: 150px 23px;
  text-align: center;
  font-family: sans-serif;
  display: inline-block;
  top: 42px;
  right: -93px;
  font-size: 12px;
  width: 300px;
  background-color: #000000;
  outline: 2px solid #000000;
  border: 1px dashed #ffffff;
  color: #ffffff;
  z-index: 1;
}
.rootApp {
  & > .ui-dialog {
    & > .view {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;

      &:not(.shade) {
        pointer-events: none;

        & > * {
          pointer-events: all;
        }
      }

      &:last-child {
        z-index: 3;
      }

      &.shade {
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>
