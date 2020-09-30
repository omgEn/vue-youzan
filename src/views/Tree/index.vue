<template>
  <div class="vue-app">
    <root :folder="root"></root>
  </div>
</template>

<script>
import Root from './components/Root.vue';
import root from './root.js';

export default {
	name: '',
	components: {
		Root,
	},
	data() {
		return {
			root
		}
	},
}
</script>

<style>
</style>
