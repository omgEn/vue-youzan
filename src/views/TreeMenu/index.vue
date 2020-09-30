<template>
	<tree-menu
		:label="tree.label"
		:nodes="tree.nodes"
		:depth="0"
	/>
</template>

<script>
import TreeMenu './components/TreeMenu.vue';
import tree from './tree.js';

export default {
	components: {
		TreeMenu
	},
	data() {
		return {
			tree
		}
	}
}
</script>

<style>
</style>
