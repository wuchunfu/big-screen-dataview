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
  width: 4.2rem;
  margin: auto;
  margin-top: 15%;
  text-align: center;

  & > h2 {
    background-color: #f5484a;
    line-height: 0.5rem;
    padding-left: 0.2rem;
    color: white;
    font-size: 0.2rem;
  }

  & > div {
    background-color: #fff;
    line-height: 0.2rem;

    & > div {
      padding: 0.15rem;

      &.content {
        color: #777;
        font-size: 0.12rem;
        min-height: 2rem;
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
          margin-left: 0.1rem;

          &.no {
            background: #484949;
          }

          &.yes {
            background: #f5484a;
          }
        }
      }
    }
  }
}
</style>
