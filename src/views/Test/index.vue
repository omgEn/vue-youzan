<template>
  <!-- 顶置 -->
  <div>
    <ul>
      <li v-for="(item, index) in menu" :key="item.code">
        {{ item.value }}
        <span @click="toTop(index)" class="top">顶置</span>
      </li>
    </ul>
    <hr />
    <!-- <TableTest /> -->
    <div class="box">
      <span @click="addBtn" :class="{ active: addDisabled }">+</span>
      <div>{{ value }}</div>
      <span @click="subBtn" :class="{ active: subDisabled }">-</span>
    </div>
    <Flex />
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <van-field v-model="number" type="number" :max="10" :min="1" />
    <el-button @click="setProgressArray" size="big">开始</el-button>
    <!-- <Progress :percent="percent" /> -->
    <van-progress :percentage="percent" />
  </div>
</template>

<script>
// import TableTest from './components/Table.vue';
import Flex from './components/Flex.vue';
// import Progress from './components/Progress.vue';

export default {
  name: 'test',
  components: {
    // TableTest,
    Flex,
    // Progress,
  },
  data() {
    return {
      menu: [
        { code: 1, value: '菜单1' },
        { code: 2, value: '菜单2' },
        { code: 3, value: '菜单3' },
        { code: 4, value: '菜单4' },
        { code: 5, value: '菜单5' },
      ],
      value: '3',
      addDisabled: false,
      subDisabled: false,
      clickBtn: '',
      number: 1,
      percent: 0,
      timer: null,
      timer2: null,
      progressArray: [],
    };
  },
  created() {
    this.setRange(-3, 3);
    // this.setPregressValue();
    // this.setProgressArray();
  },
  watch: {
    percent(val) {
      // if (val % 9 === 0) {
      //   clearInterval(this.timer);
      // }

      if (val >= 99) {
        clearInterval(this.timer);
        this.timer = null;
        clearInterval(this.timer2);
        this.timer2 = null;
        console.log('down', this.timer);
        return;
      }
      console.log(val);
    },
    progressArray(val) {
      if (val.length === 10) {
        clearInterval(this.timer2);
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
    clearInterval(this.timer2);
    this.timer2 = null;
  },
  methods: {
    // 模拟进度条数据
    setPregressValue() {
      const that = this;

      if (this.percent >= 90) {
        clearInterval(this.timer);
        return;
      }
      this.timer = setInterval(function() {
        console.log(2222222222);

        that.percent++;
      }, 80);
    },
    setProgressArray() {
      const that = this;
      this.timer2 = setInterval(function() {
        that.progressArray.push(1);
        console.log('that.progressArray22', that.progressArray);
        that.setPregressValue();
      }, 100);
    },
    toTop(index) {
      const { menu } = this;
      const top = menu.splice(index, 1);
      menu.unshift(...top);
      // menu.map((item, idx) => {
      //   if (idx === index) {
      //     item.value = '顶置';
      //   }
      // });
      menu.push({ code: 9, value: '菜单9' });
    },
    setRange(min, max) {
      const val = Number(this.value);
      if (val >= max - 1) {
        this.addDisabled = true;
      }
      if (val <= min + 1) {
        this.subDisabled = true;
      }
    },
    setValue() {
      const isAdd = this.clickBtn === 'add';
      if (isAdd) {
        this.value = ++this.value;
      } else {
        this.value = --this.value;
      }
    },
    addBtn() {
      this.clickBtn = 'add';
      this.setRange(-3, 3);
      this.setValue();
    },
    subBtn() {
      this.clickBtn = 'sub';
      this.setRange(-3, 3);
      this.setValue();
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  cursor: pointer;
}
.box {
  display: flex;
  span {
    width: 80px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #000;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
  .active {
    color: #000;
    background: #fff;
  }
}
</style>
