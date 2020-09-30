<template>
  <div class="main">
    <el-select v-model="selectValue" @change="A()">
      <el-option
        v-for="item in selectOption"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-input v-model="inputValue" @input="handleInput" />
  </div>
</template>

<script>
import utils from './utils.js';
export default {
  data() {
    return {
      selectOption: [
        { value: '选项1', label: '选项1' },
        { value: '选项2', label: '选项2' },
      ],
      selectValue: '',
      inputValue: '',
    };
  },
  created() {
    this.A = utils.debounce(this.change, 5000);
    this.B = utils.throttle(this.input, 5000);
  },
  methods: {
    handleChange() {
      this.A();
    },
    handleInput() {
      this.B();
    },
    change() {
      const { selectValue } = this;
      console.log(selectValue);
    },
    input() {
      const { inputValue } = this;
      console.log(inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
}
</style>
