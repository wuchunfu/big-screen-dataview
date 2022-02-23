<template>
  <div class="ui-panel-config">
    <div>
      <label>类型:</label>
      <select v-model="config.name" @change="updateValue">
        <option :value="key" v-for="(value, key) in scheml" :key="key">
          {{ key }}
        </option>
      </select>
    </div>
    <div v-for="(option, index) in scheml[config.name]" :key="index">
      <label> {{ option.key }}:</label>

      <!-- 输入框 -->
      <input
        type="text"
        v-if="option.value.type == 'input'"
        v-model="config.options[option.key]"
        @change="updateValue"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
    configScheml: {
      type: Object,
    },
  },
  setup(props, context) {
    let config = ref(JSON.parse(JSON.stringify(props.modelValue)));

    return {
      scheml: ref(props.configScheml),
      config,
      updateValue() {
        context.emit("update:modelValue", config.value);
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-panel-config {
  padding: 5px 0;
  & > div {
    padding: 5px;
    font-size: 12px;
    label {
      width: 80px;
      display: inline-block;
      text-align: right;
      padding-right: 5px;
      font-weight: 800;
    }
    select,
    input {
      border-radius: 5px;
      height: 26px;
      padding: 5px;
      width: 180px;
      font-size: inherit;
    }
  }
}
</style>
