<template>
  <div class="ui-plainchart-config">
    <!-- 选项一：grid -->
    <fieldset v-if="'grid' in config.options">
      <legend>外边距</legend>
      <ul>
        <li v-if="'x' in config.options.grid">
          <label>X:</label>
          <input v-model="config.options.grid.x" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'x')"
            >删除</span
          >
        </li>
        <li v-if="'y' in config.options.grid">
          <label>Y:</label>
          <input v-model="config.options.grid.y" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'y')"
            >删除</span
          >
        </li>
        <li v-if="'width' in config.options.grid">
          <label>宽:</label>
          <input v-model="config.options.grid.width" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'width')"
            >删除</span
          >
        </li>
        <li v-if="'height' in config.options.grid">
          <label>高:</label>
          <input v-model="config.options.grid.height" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'height')"
            >删除</span
          >
        </li>
        <li v-if="'left' in config.options.grid">
          <label>左:</label>
          <input v-model="config.options.grid.left" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'left')"
            >删除</span
          >
        </li>
        <li v-if="'right' in config.options.grid">
          <label>右:</label>
          <input v-model="config.options.grid.right" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'right')"
            >删除</span
          >
        </li>
        <li v-if="'top' in config.options.grid">
          <label>上:</label>
          <input v-model="config.options.grid.top" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'top')"
            >删除</span
          >
        </li>
        <li v-if="'bottom' in config.options.grid">
          <label>下:</label>
          <input v-model="config.options.grid.bottom" @change="updateValue" />
          <span class="delete" @click="deleteItem('options.grid', 'bottom')"
            >删除</span
          >
        </li>
      </ul>
      <span
        class="add"
        @click="
          addItem(
            'options.grid',
            ['x', 'y', 'width', 'height', 'left', 'right', 'top', 'bottom'],
            0
          )
        "
        >新增</span
      >
      <span class="delete" @click="deleteItem('options', 'grid')">删除</span>
    </fieldset>
    <!-- 选项二：title -->
    <!-- 选项三：type -->
    <fieldset v-if="'type' in config.options">
      <legend>类型</legend>
      <select v-model="config.options.type" @change="updateValue">
        <option value="bar">柱状图</option>
        <option value="line">折线图</option>
        <option value="pie">饼图</option>
        <option value="ring">环图</option>
        <option value="map">地图</option>
        <option value="tree">树图</option>
      </select>
    </fieldset>
    <!-- 选项四：data -->
    <fieldset v-if="'data' in config.options">
      <legend>数据</legend>
      <textarea
        v-model="config.options.data"
        @change="updateJsonValue($event, 'options.data')"
      ></textarea>
    </fieldset>
    <!-- 选项五：xAxis -->
    <fieldset v-if="'xAxis' in config.options">
      <legend>横刻度尺</legend>
      <ul>
        <li v-if="'values' in config.options.xAxis">
          <label>数据：</label>
          <input
            type="text"
            :value="config.options.xAxis.values"
            @change="updateJsonValue($event, 'options.xAxis.values')"
          />
          <span class="delete">删除</span>
        </li>
      </ul>
      <span class="add" @click="addItem('options.xAxis', ['data'], [])"
        >新增</span
      >
      <span class="delete" @click="deleteItem('options', 'xAxis')">删除</span>
    </fieldset>
    <!-- 选项六：yAxis -->
    <fieldset v-if="'yAxis' in config.options">
      <legend>纵刻度尺</legend>
      <ul>
        <li v-if="'values' in config.options.yAxis">
          <label>数据：</label>
          <input
            type="text"
            :value="config.options.yAxis.values"
            @change="updateJsonValue($event, 'options.yAxis.values')"
          />
          <span class="delete">删除</span>
        </li>
      </ul>
      <span class="add" @click="addItem('options.yAxis', ['data'], [])"
        >新增</span
      >
      <span class="delete" @click="deleteItem('options', 'yAxis')">删除</span>
    </fieldset>
    <!-- 选项七：tree -->
    <fieldset v-if="'tree' in config.options">
      <legend>树图</legend>
      <ul>
        <li v-if="'direction' in config.options.tree">
          <label>类型：</label>
          <select v-model="config.options.tree.direction" @change="updateValue">
            <option value="LR">左到右</option>
            <option value="RL">右到左</option>
            <option value="BT">下到上</option>
            <option value="TB">上到下</option>
            <option value="cicle">圆形</option>
          </select>
          <span class="delete">删除</span>
        </li>
      </ul>
      <span class="add" @click="addItem('options.tree', ['direction'], '')"
        >新增</span
      >
      <span class="delete" @click="deleteItem('options', 'yAxis')">删除</span>
    </fieldset>
    <span
      class="add"
      @click="
        addItem(
          'options',
          ['grid', 'type', 'data', 'xAxis', 'yAxis', 'tree'],
          {}
        )
      "
      >新增</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { toJSON } from "@hai2007/algorithm/json.js";
import { setValue, getValue } from "@hai2007/algorithm/value.js";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
    },
  },
  setup(props, context) {
    let config = ref(JSON.parse(JSON.stringify(props.modelValue)));

    watch(
      () => props.modelValue,
      (modelValue) => {
        config.value = JSON.parse(JSON.stringify(modelValue));
      }
    );

    return {
      config,

      // 普通数据修改
      updateValue() {
        setTimeout(() => {
          context.emit("update:modelValue", config.value);
        });
      },

      // JSON数据修改
      updateJsonValue(event, key) {
        // https://github.com/hai2007/algorithm.js
        let value = toJSON("[" + event.target.value + "]"); // 先使用json格式算法把非法的json字符串变成合法的json
        setValue(config, "['value']." + key, value); // 然后调用字符串表达式解析算法设置值

        this.updateValue();
      },

      // 删除条目
      deleteItem(express, key) {
        let value = getValue(config, "['value']." + express);
        delete value[key];

        this.updateValue();
      },

      //   新增条目
      addItem(express, items, initValue = {}) {
        let value = getValue(config, "['value']." + express);

        let itemArray = [];
        for (let item of items) {
          if (!(item in value)) {
            itemArray.push(item);
          }
        }

        this.$store.commit("openDialog", {
          id: "select-item",
          initdata: ["新增条目", itemArray],
          callback: (data) => {
            if (data != undefined) {
              // 根据选中的条目新增并赋初始值
              setValue(config, "['value']." + express + "." + data, initValue);
              this.updateValue();
            }
          },
        });
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.ui-plainchart-config {
  .add,
  .delete {
    font-size: 0;
    width: 15px;
    height: 15px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: none;
  }
  .add {
    background-image: url("../image/add.png");
  }
  .delete {
    background-image: url("../image/delete.png");
  }
  & > .add {
    vertical-align: top;
    margin-left: 10px;
    display: inline-block;
  }
  & > fieldset {
    margin: 0 10px 10px 10px;
    position: relative;
    border-radius: 5px;
    border: 1px solid #b2b2bd;
    outline: none;
    & > textarea,
    > select {
      width: 100%;
    }
    &:hover {
      & > .add,
      > .delete {
        display: inline-block;
      }
    }
    & > .add,
    > .delete {
      position: absolute;
      bottom: 5px;
      left: 5px;
    }
    & > .add {
      left: 25px;
    }
    & > legend {
      font-weight: 800;
      font-size: 14px;
    }
    & > ul {
      margin-bottom: 10px;
      & > li {
        padding: 5px;
        font-size: 12px;
        position: relative;
        &:hover {
          & > span {
            &.delete {
              display: inline-block;
            }
          }
        }
        & > span {
          &.delete {
            right: -16px;
            top: 0px;
            display: none;
            width: 30px;
            height: 30px;
            background-size: 50% auto;
            position: absolute;
          }
        }
        label {
          display: inline-block;
          padding-right: 5px;
          font-weight: 800;
        }
        select,
        input {
          border-radius: 5px;
          height: 26px;
          padding: 5px;
          width: 140px;
          font-size: inherit;
          outline: none;
          &[type="radio"] {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>
