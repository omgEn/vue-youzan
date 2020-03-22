<template>
	<div class="dashboard">
		<main class="dashboard-main">
			<!-- 实时概况 -->
			<Business></Business>
			<!-- 智能助手 -->
			<div>
				<div class="main-assistant"></div>
			</div>
			<!-- 常用功能 -->
			<div>
				<div class="main-feature"></div>
			</div>
			<!-- 最新推荐 -->
			<div>
				<div class="main-latest-recommend"></div>
			</div>
			<!-- 经营建议 -->
			<div>
				<div class="main-widget-box"></div>
			</div>
			<!-- 学习交流 -->
			<div>
				<div class="main-widget-box"></div>
			</div>
			<!-- 更多交流 -->
			<div>
				<div class="main-widget-box"></div>
			</div>
		</main>
		<aside class="dashboard-aside">
			d
		</aside>
	</div>
</template>

<script>
	import Business from './components/Business.vue';
	export default {
		components:{
			Business
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/common.scss';

	.dashboard {
		display: flex;
		width: 1200px;
	}

	.dashboard-main {
		flex: none;
	}

	.dashboard-aside {
		width: 240px;
		background: orange;
		height: 100%;
		box-sizing: border-box;
		border-left: 20px solid $theme-primary-1;
	}
	
</style>
