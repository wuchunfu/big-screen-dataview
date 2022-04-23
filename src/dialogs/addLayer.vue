<template>
  <div class="view">
    <h2 v-move>新增图表</h2>
    <div>
      <div class="layers">Tips：新增界面未完成！</div>
      <div class="btlist">
        <input
          type="button"
          value="关闭"
          @click="$store.commit('closeDialog')"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.view {
  width: 700px;
  margin: auto;
  margin-top: 100px;
  text-align: center;

  & > h2 {
    background-color: #1c65a9;
    line-height: 0.5rem;
    padding-left: 0.2rem;
    color: white;
    font-size: 0.2rem;
    user-select: none;
    cursor: move;
  }

  & > div {
    background-color: #fff;
    line-height: 0.2rem;

    & > div {
      padding: 0.15rem;

      &.layers {
        line-height: 300px;
        font-size: 30px;
        color: red;
      }

      &.btlist {
        padding-top: 0;
        margin-top: 0.1rem;

        & > input {
          width: 0.9rem;
          height: 0.24rem;
          line-height: 0.24rem;
          text-align: center;
          color: #fff;
          border: 0;
          cursor: pointer;
          background: #cbcfcf;
        }
      }
    }
  }
}
</style>
