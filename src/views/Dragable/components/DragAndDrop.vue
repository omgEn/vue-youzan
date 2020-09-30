<template>
  <div class="DragAndDrop">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >
      全选
    </el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group
      v-model="checkedVaule"
      @change="handleCheckedCitiesChange"
    >
      <template v-for="item in options">
        <div
          style="display: inline"
          :key="item.code"
          draggable="item.dr"
          @dragstart="dragstart($event, item)"
          @dragend="dragend"
          @drop="drop"
          @dragover.prevent
        >
          <el-checkbox
            :draggable="item.draggable"
            :disabled="item.disabled"
            :label="item"
            :key="item.code"
            :title="item | valueSplit"
            border
            class="ellipsis"
          >
            {{ item | valueSplit }}
          </el-checkbox>
        </div>
      </template>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'DragAndDrop',
  filters: {
    valueSplit(item) {
      return `${item.name}(${item.code})`;
    },
  },
  props: {
    // 所有数据
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      // 全选
      checkAll: false,
      // 不确定性
      isIndeterminate: true,
      // 当前选中的数据
      checkedVaule: [],
    };
  },
  mounted() {
    console.log(1);
  },
  methods: {
    // 全选
    handleCheckAllChange(val) {
      this.checkedVaule = val ? this.options : [];
      this.isIndeterminate = false;
    },
    // 单选
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
    drag(e) {
      e.dataTransfer.clearData();
    },
    dragstart(e, item) {
      e.dataTransfer.setData('item', JSON.stringify(item));
    },
    // 释放鼠标
    dragend(e) {
      e.dataTransfer.clearData();
    },
    // 放置到有效位置
    drop(e) {
      const item = JSON.parse(e.dataTransfer.getData('item'));
      console.log(this.options);
      this.options.push(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.DragAndDrop {
  .ellipsis {
    display: inline-block;
    // width: 100px;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      margin-left: 10px;
    }
  }
}
</style>
