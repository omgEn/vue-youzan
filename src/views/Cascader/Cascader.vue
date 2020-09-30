<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader v-model="value" :options="options" @change="handleChange" />
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      />
    </div>
    <hr />
    <FilterChangeFilter :panKey="panKey" />
  </div>
</template>

<script>
import FilterChangeFilter from '@/components/Filter/FilterChangeHandle.vue';
export default {
  components: {
    FilterChangeFilter,
  },
  data() {
    return {
      panKey: 'demo1',
      value: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
