<template>
  <div class="warning">
    <h2 v-move>
      {{ data[2] }}
    </h2>
    <div>
      <div class="content" v-html="data[1]"></div>
      <div class="btlist">
        <input
          type="button"
          class="yes"
          :value="data[3]"
          @click="$store.commit('closeDialog', 'yes')"
        />
        <input
          type="button"
          class="no"
          :value="data[4]"
          @click="$store.commit('closeDialog', 'no')"
          v-if="data[0] == 'confirm'"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.warning {
  width: 300px;
  margin: auto;
  margin-top: 15%;
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

      &.content {
        color: rgb(0, 0, 0);
        font-size: 14px;
        min-height: 1rem;
        overflow: auto;
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

          &.no {
            background: #cbcfcf;
            margin-left: 50px;
          }

          &.yes {
            background: #1c65a9;
          }
        }
      }
    }
  }
}
</style>
