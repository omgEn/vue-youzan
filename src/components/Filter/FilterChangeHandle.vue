<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <template v-for="item in filterKey[0].options">
        <el-form-item :label="item.label" :key="item.panKey">
          <component
            :is="item.type"
            :model="item.model"
            :options="item.options"
          />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import FilterInstitution3 from './components/FilterInstitution3.vue';
import FilterOrgan from './components/FilterOrgan.vue';
import FilterSelect from './components/FilterSelect.vue';
import filter from './filter';

export default {
  props: {
    panKey: {
      type: String,
      required: true,
    },
  },
  components: {
    FilterInstitution3,
    FilterOrgan,
    FilterSelect,
  },
  data() {
    return {
      filterKey: filter.filter((item) => item.panKey === this.panKey),
      // option: filter[pan],
    };
  },
  methods: {
    // 初始化
    init() {},

    // 触发选择器
    handleFilterChange() {},

    // 初始化数据
    initData() {},
  },
};
</script>

<style></style>
