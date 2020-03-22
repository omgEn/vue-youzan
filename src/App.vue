<template>
	<div class="app">
		<!-- 登录页 -->
		<router-view v-if="$route.path=='/login'" name="login"></router-view>
		<!-- 总布局:登录后的页面 -->
		<el-container v-else class="app-container" >
			<!-- 侧边栏 -->
			<el-aside class="app-aside" width="92px">
				<MyAside></MyAside>
			</el-aside>
			<!-- 右边主体内容 -->
			<el-container class="app-right">
				<!-- header -->
				<el-header class="app-header">
					<MyHeader></MyHeader>
				</el-header>
				<!-- main -->
				<el-main class="app-main">
					<MyMain></MyMain>
				</el-main>
				<!-- footer -->
				<el-footer class="app-footer">
					<MyFooter></MyFooter>
				</el-footer>
			</el-container>
		</el-container>

	</div>

</template>

<script>
import MyAside from '@/components/layout/MyAside.vue'
import MyHeader from '@/components/layout/MyHeader.vue'
import MyMain from '@/components/layout/MyMain.vue'
import MyFooter from '@/components/layout/MyFooter.vue'

export default {
	name: 'app',
	components: {
		MyAside,
		MyHeader,
		MyMain,
		MyFooter
	},
	mounted() {
		// 只会执行一次
	},
	updated() {
		console.log('router->',this.$route);
	}
}
</script>

<style lang="scss">
	@import '@/assets/common.scss';
	html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
		fieldset, img { border:none; }
	img{display: block;}
	address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }
	ul, ol { list-style:none; }
	// body { color:#333; font:12px/20px "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;/* overflow-y:scroll;*/ overflow-x:hidden;}
	a { color:#666; text-decoration:none; }
	a:visited { color:#666; }
	a:hover, a:active, a:focus { color:#ff8400; text-decoration:underline; }
html,body {
	margin: 0;
	height: 100%;
}
.app {
	height: 100%;
	background: #fff;
	.app-container{
		min-height: 100%;
	}
	.app-aside {
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
	}
	.app-right{
		min-height: 100%;
		margin-left: 92px;
		// min-width: 860px;
		// overflow-x:auto;
	}
	.app-header{
		padding: 0;
	}
	.app-main{
		padding: 0;
		border: 10px solid $theme-primary-1;
		box-sizing: border-box;
		// min-height: 100%;
	}
	.app-footer{
		padding: 0;
	}
}
</style>
