<template lang="html">
	<div class="shop">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="店铺主页" name="first">
				<TabContent1></TabContent1>
			</el-tab-pane>
			<el-tab-pane label="店铺导航" name="second">
				<TabContent2></TabContent2>
			</el-tab-pane>
			<el-tab-pane label="个人中心" name="third">
				<TabContent3></TabContent3>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
const TabContent1 = ()=>import('./components/TabContent1.vue')
const TabContent2 = ()=>import('./components/TabContent2.vue')
const TabContent3 = ()=>import('./components/TabContent3.vue')
export default {
	components:{
		TabContent1,
		TabContent2,
		TabContent3
	},
	data() {
		return {
			activeName: 'second'
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		}
	}
};
</script>

<style>
</style>
