<template>
  <div class="tableTest">
    <el-table :data="tableData" style="width: 100%" border>
      <!-- <template v-for="item in tableHeader"> -->
      <el-table-column
        v-for="item in tableHeader"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        class="table-row"
      />
      <!-- </template> -->
    </el-table>
  </div>
  <!-- 1.实现一个页面，页面里面有一个表格，
  该表格有3行4列 (内容不确定，编码时可以自己填充，但运行时会被调整)，
  第一列为非数字字符串，第二列为数字，第三列为中文，第4列为各种类型组合的字符串
  要求: 
  1.表格能自适应屏幕宽度，始终占满整个屏幕
  2.表格的数字类型列居左对齐，非数字列居右对齐
  3.表格的第一列固定宽度, 元素长度超过宽度时换行显示
  4.表格中的第二列宽度为该列最长的数字的宽度
  5.表格中的第三列和第四列根据屏幕宽度进行自适应调整，并且两列的宽度始终保持一个固定的比例
  6.要求代码清晰，代码review时不需要解释也能够让别人看明白逻辑
  7.代码要能够不经过修改就可在PC上直接运行，显示上述要求的效果 -->
</template>

<script>
export default {
  name: 'tabeTest',
  data() {
    return {
      tableHeader: [
        {
          prop: 'a',
          label: '非数字字符串',
          width: 120,
        },
        {
          prop: 'b',
          label: '数字',
          width: '',
        },
        {
          prop: 'c',
          label: '中文',
          width: '',
        },
        {
          prop: 'd',
          label: '各种类型组合的字符串',
          width: '',
        },
      ],
      tableData: [
        {
          a: 'aa',
          b: '11111111111111111111111111111111111111111111111111111',
          c: '中文',
          d: '各种类型组合的字符串',
        },
        {
          a: 'aa',
          b: '11111111111111111111111111111111111111111111111111111',
          c: '中文',
          d: '各种类型组合的字符串',
        },
      ],
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      // const data = [];
    },
  },
};
</script>

<style lang="scss">
.tableTest {
  .el-table th .cell {
    text-align: center;
  }

  .el-table td:first-child .cell {
    text-align: right;
  }

  .el-table td:nth-child(2) .cell {
    width: auto;
  }

  .el-table td:nth-child(2) {
    width: 100%;
  }

  .el-table td:nth-child(2) .cell {
    // white-space: nowrap;
    // width: auto;
    // min-width: auto;
    // display: inline;
    // text-align: left;
    width: auto;
    width: 100%;
    word-break: keep-all;
    white-space: nowrap;
  }
}
</style>
