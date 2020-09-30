<template>
  <div>
    <div class="el-select">
      <div class="el-input el-input--suffix">
        <input
          type="text"
          autocomplete="off"
          v-model="value"
          placeholder="请选择"
          class="el-input__inner"
          readonly="readonly"
        />
        <span class="el-input__suffix" @click="showDrop()">
          <span class="el-input__suffix-inner">
            <i
              class="el-select__caret el-input__icon el-icon-arrow-up"
              :class="{ 'is-reverse': isShow }"
            />
          </span>
        </span>
      </div>
    </div>
    <!-- 下拉框start -->
    <div
      class="el-select-dropdown el-popper"
      style="transform-origin: center top; z-index: 2003; position: absolute;"
      x-placement="{'bottom-start':isShow}"
      v-if="isShow"
    >
      <!-- :style="{ 'min-width': organList.length * 100 }" -->
      <!-- style="min-width: 500px;transform-origin: center top; z-index: 2003; position: absolute;" -->
      <div class="el-scrollbar" style="">
        <div
          class="el-select-dropdown__wrap el-scrollbar__wrap"
          style="margin-bottom: -17px; margin-right: -17px;display:flex"
        >
          <ul
            class="el-scrollbar__view el-select-dropdown__list"
            v-for="item in organList"
            :key="item.key"
          >
            <!-- style="width:100px;" -->
            <li
              v-for="(ii, kk) in item"
              :key="kk"
              class="el-select-dropdown__item"
              :class="{ selected: ii.code === value, hover: ii.code === value }"
              @click="checkValue(ii)"
            >
              <span>{{ ii.code }}</span>
            </li>
          </ul>
          <!-- end -->
        </div>
        <div class="el-scrollbar__bar is-horizontal">
          <div class="el-scrollbar__thumb" style="transform: translateX(0%);" />
        </div>
        <div class="el-scrollbar__bar is-vertical">
          <div class="el-scrollbar__thumb" style="transform: translateY(0%);" />
        </div>
      </div>
      <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
    </div>
    <!-- 下拉框end -->
    <!-- s收起 -->
    <!-- s -->

    <!-- ss展开-->
    <!-- ss -->
  </div>
</template>

<script>
import organ from '../organ.js';

export default {
  data() {
    return {
      isShow: false,
      value: '',
      width: 100,
      options: [
        [{ code: '200', value: '全辖' }],
        [{ code: '200', value: '本部' }],
        [{ code: '200', value: '外围' }],
      ],
    };
  },
  computed: {
    organList() {
      const arr = organ.filter((item) => item.code === '200')[0].child || [];
      // 转成每列8个的数组
      let result = [[{ code: '200', value: '全辖' }]],
        benbu = [{ code: '200', value: '本部' }],
        waiwei = [{ code: '200', value: '外围' }];

      arr.forEach((ele) => {
        if (ele.der === '1') {
          benbu.push(ele);
        } else if (ele.der === '2') {
          waiwei.push(ele);
        }
      });

      for (let i = 0; i < benbu.length; i++) {
        i = 0;
        const length = benbu.length;
        if (length > 8) {
          result.push(benbu.splice(0, 8));
        } else {
          result.push(benbu.splice(0, length));
        }
      }

      for (let i = 0; i < waiwei.length; i++) {
        i = 0;
        const length = waiwei.length;
        if (length > 8) {
          result.push(waiwei.splice(0, 8));
        } else {
          result.push(waiwei.splice(0, length));
        }
      }
      // console.log(arr, result);
      return result;
    },
  },
  methods: {
    showDrop() {
      this.isShow = !this.isShow;
    },
    checkValue(item) {
      this.value = item.code;
    },
  },
};
// 权限判断
// 当默认的有等于的时候deptCode2的时候，
</script>

<style lang="scss" scoped></style>
