<template>
  <div class="Dragable">
    <!-- main -->
    <div class="Dragable-main">
      <!-- left -->
      <div class="Dragable-left">
        <DragAndDrop ref="leftDrag" :options="leftData" />
      </div>
      <!-- center -->
      <div class="Dragable-center">
        <span @click="toRight">向右移动</span><br />
        <span @click="toLeft">向左移动</span>
      </div>
      <!-- right -->
      <div class="Dragable-right">
        <DragAndDrop ref="rightDrag" :options="rightData" />
      </div>
    </div>
    <!-- footer -->
    <div class="Dragable-footer">
      <el-button @click="submitBtn" type="primary">确定</el-button>
      <el-button @click="cancleBtn" type="primary">取消</el-button>
    </div>
  </div>
</template>

<script>
import DragAndDrop from './components/DragAndDrop';
const leftData = [
  { name: '张三', code: '1111111111111' },
  { name: '张三', code: '1111111111112' },
  { name: '张三', code: '1111111111113' },
  { name: '张三', code: '1111111111114' },
  { name: '张三', code: '1111111111115' },
  { name: '张三', code: '1111111111116' },
  { name: '张三', code: '1111111111117' },
  { name: '张三', code: '1111111111118' },
];
const rightData = [
  { name: '李四', code: '1111111111121' },
  { name: '李四', code: '1111111111122' },
  { name: '李四', code: '1111111111123' },
  { name: '李四', code: '1111111111124' },
  { name: '李四', code: '1111111111125' },
  { name: '李四', code: '1111111111126' },
  { name: '李四', code: '1111111111127' },
  { name: '李四', code: '1111111111128' },
];

export default {
  name: 'Dragable',
  components: {
    DragAndDrop,
  },
  data() {
    return {
      ld: leftData,
      rd: rightData,
      rc: [],
    };
  },
  mounted() {},
  computed: {
    leftChecked: {
      get: function() {
        return this.lc;
      },
      set: function() {
        this.lc.forEach((item) => {
          item.draggable = true;
          item.disabled = false;
        });
      },
    },
    rightChecked: {
      get: function() {
        return this.rc;
      },
      set: function() {
        this.rc.forEach((item) => {
          item.draggable = true;
          item.disabled = false;
        });
      },
    },
    leftData: {
      get: function() {
        this.ld.forEach((item) => {
          item.disabled = false;
          item.draggable = true;
        });
        return this.ld;
      },
      set: function() {},
    },
    rightData: {
      get: function() {
        this.rd.forEach((item) => {
          item.disabled = false;
          item.draggable = true;
        });
        return this.rd;
      },
      set: function() {},
    },
  },
  methods: {
    submitBtn() {
      const code = [];
      code.push(
        ...this.$refs.leftDrag.checkedVaule,
        ...this.$refs.rightDrag.checkedVaule
      );
      console.log(code);
    },
    cancleBtn() {},
    toRight() {
      console.log(this.$refs.leftDrag);
      const left = this.$refs.leftDrag.checkedVaule;
      console.log(left);
      this.rightChecked.push(...left);
      this.rightData.push(...left);
      this.leftData.forEach((item, index) => {
        left.forEach((i) => {
          if (item.code === i.code) {
            // this.$set(item, 'disabled', true);
            // this.leftData.splice(index, 1);
            // item.disabled = true;
            this.leftData[index].disabled = true;
            this.$set(this.leftData, index, this.leftData[index]);
          }
        });
      });
      left.forEach((item) => {
        this.$set(item, 'disabled');
      });
      console.log(this.leftData);
    },
    toLeft() {
      const right = this.$refs.rightDrag.checkedValue;
      this.leftChecked.push(...right);
    },

    /*
    // 假设所有接口都是A
    A() {},
    // 获取table数据
    getTableData() {
      const { data } = this.A();
      this.tableData = data;
    },
    // 修改 确定按钮
    submit() {
      // 调接口 把修改的数据传入
      const { code, message, data } = this.A();
      if (code === 1000) {
        // 表示修改成功 ，再刷新一下tableData
        this.getTableData();
      } else {
        this.$message.error(message || '请求异常');
      }
    },
    */
  },
};
</script>

<style lang="scss" scoped>
.Dragable {
  &-main {
    display: flex;
  }

  &-left {
    flex: 1 1;
    border: 1px solid #ccc;
    border-radius: 2px;
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }

  &-right {
    flex: 1 1;
    border: 1px solid #ccc;
    border-radius: 2px;
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }

  &-center {
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span:hover {
      cursor: pointer;
      color: skyblue;
    }
  }

  &-footer {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
