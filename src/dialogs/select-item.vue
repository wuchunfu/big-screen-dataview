<template>
  <div class="select-item">
    <h2 v-move>
      {{ data[0] }}
      <i @click="$store.commit('closeDialog')">X</i>
    </h2>
    <div>
      <span
        v-for="item in data[1]"
        :key="item"
        @click="$store.commit('closeDialog', item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.select-item {
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
    & > i {
      float: right;
      font-style: normal;
      font-family: monospace;
      width: 30px;
    }
  }
  & > div {
    background-color: white;
    padding: 20px 0;
    & > span {
      display: inline-block;
      margin: 5px;
      padding: 2px 5px;
      cursor: pointer;
      background-color: #5e6061;
      color: white;
      border: none;
      outline: none;
      border-radius: 5px;
      &:hover {
        background-color: #020202;
      }
    }
  }
}
</style>
