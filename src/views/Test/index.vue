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
    <Flex />
  </div>
</template>

<script>
// import TableTest from './components/Table.vue';
import Flex from './components/Flex.vue';
export default {
  name: 'test',
  components: {
    // TableTest,
    Flex,
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
    };
  },
  methods: {
    toTop(index) {
      // 把index放到0
      const { menu } = this;
      // 暂存当前要顶置的菜单
      const top = menu.splice(index, 1);
      // 顶置
      menu.unshift(...top);
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  cursor: pointer;
}
</style>
