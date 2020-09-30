<template>
	<div class="tree-menu">
		<div :style="indent" @click="toggleChildren">
			<!-- will end when no nodes -->
			<tree-menu 
				v-if="showChidren"
				v-for="node in nodes"
				:nodes="node in nodes"
				:label="node.label"
				:depth="depth+1"
			/>
		</div>
		
	</div>
</template>

<script>
import TreeMenu './components/TreeMenu.vue';
import tree from './tree.js';

export default {
	components: {
		TreeMenu
	},
	props: ['label','nodes','depth'],
	data() {
		return {
			// tree
			showChidren: false
		}
	},
	computed: {
		indent(){
			return { transform:`translate(${this.depth*50}px)`}
		}
	},
	methods:{
		toggleChildren(){
			this.showChildren = !this.showChidlren;
		}
	}
}
</script>

<style>
</style>
