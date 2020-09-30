<template>
  <div class="content">
    <!-- 筛选器 -->
    <div class="el-input el-input--suffix" :class="{ 'is-focus': isShow }">
      <input
        type="text"
        readonly="readonly"
        autocomplete="off"
        v-model="value"
        placeholder="请选择"
        class="el-input__inner"
        @focus="isShow = true"
        @blur="isShow = false"
      />
      <span
        class="el-input__suffix"
        @click="showDropDown"
        @focus="isShow = true"
        @blur="isShow = false"
      >
        <span class="el-input__suffix-inner">
          <i
            class="el-select__caret el-input__icon el-icon-arrow-up"
            :class="{ 'is-reverse': isShow }"
          />
        </span>
      </span>
    </div>
    <!-- 下拉框 -->
    <div
      class="el-select-dropdown el-popper"
      style="margin-bottom: -17px; margin-right: -17px;"
      x-placement="bottom-start"
    >
      <!-- style="min-width: 217px; transform-origin: center top; z-index: 2047; position: absolute; top: 266px; left: 142px;" -->
      <div
        class="el-select-dropdown__wrap el-scrollbar__wrap content-select"
        style="min-width: 217px; transform-origin: center top; z-index: 2003; position: absolute; top: 266px; left: 142px;"
        x-placement="bottom-start"
        v-show="isShow"
      >
        <!-- style="margin-bottom: -17px; margin-right: -17px;" -->

        <ul class="el-scrollbar__view el-select-dropdown__list">
          <li
            v-for="item in organList"
            :key="item.code"
            class="el-select-dropdown__item"
            :class="{ selected: '', hover: '' }"
            @click="checkValue(item)"
          >
            <span @click="checkValue(item)">{{ item.value }}</span>
          </li>
        </ul>
      </div>

      <div class="el-scrollbar__bar is-horizontal">
        <div
          class="el-scrollbar__thumb"
          style="transform: translateX(0%);"
        ></div>
      </div>
      <div class="el-scrollbar__bar is-vertical">
        <div
          class="el-scrollbar__thumb"
          style="transform: translateY(0%);"
        ></div>
      </div>
      <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
    </div>
    <!-- s -->
    <!-- s -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      value: '',
      organList: [
        {
          code: '200',
          value: '广东',
        },
        {
          code: '201',
          value: '广东',
        },
        {
          code: '202',
          value: '广东',
        },
      ],
    };
  },
  methods: {
    getData() {},
    blur() {},
    showDropDown() {
      this.isShow = !this.isShow;
    },
    checkValue(item) {
      console.log(item);
      this.value = item.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-input {
  cursor: pointer;
}

// .content-select {
//   overflow: auto;
// }
</style>
<!-- 
 blur:失去焦点
 @focus
 -->
