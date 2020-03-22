<template>
<div class="main">
	<router-view></router-view>
	<!-- 这里导致了login也是在main中打开 -->
	<!-- <div class="logo">或者footer也可以在这里写</div> -->
</div>
</template>

<script>
export default{}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.main {
	// min-width: 860px;
	// min-width: 100%;
	// overflow-y: hidden;
	// overflow-x: auto;
	box-sizing: border-box;
	// padding: 0 12px;
	height: 100%; 
	background-color: rgba(225,225,225,0);
}
</style>
