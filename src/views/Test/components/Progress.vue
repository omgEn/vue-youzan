<template>
  <div class="progress">
    <van-progress :percentage="percent" />
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
