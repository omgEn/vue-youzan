<template>
  <div class="tree-menu">
    <div>{{ label }}</div>
    <tree-menu v-for="node in nodes" :node="node.nodes" :label="node.label" />
  </div>
</template>

<script>
export default {
  name: 'TreeMenu',
  props: ['label', 'nodes'],
};
</script>

<style></style>
