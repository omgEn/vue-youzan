<template>
<div class="aside">
	<div class="logo">
		<i class="fa fa-thumbs-up"></i>
	</div>
	<div  v-for="(item,idx) in navs" :key='idx'>
		<router-link :to="item.path" tag="span">
			<div class="nav" >
				<i class="fa" :class="item.icon"></i>
				<span v-text="item.text"></span>
			</div>
		</router-link>
	</div>
	<div class="bottom">
		d
	</div>
</div>
</template>

<script>
export default{
	data:function(){
		return {
			navs: [
				{path:'/dashboard',text:'店铺概况',icon:' fa-window-maximize '},
				{path: '/shop', text:'店铺管理', icon:'fa-camera-retro'},
				{path: '/good', text:'商品管理', icon:'fa-home'},
				{path: '/order', text:'订单管理', icon:'fa-book'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.aside {
	width: 92px;
	height: 100%;
	background: rgba(68,68,68,1);
	color: #fff;
	i{
		color: #fff;
	}
	.logo{
		height: 56px;
		overflow: auto;
		margin-bottom: 10px;
		&>i{
			display: block;
			margin: 0 20px;
			width: 32px;
			height: 32px;	
			text-align: center;
			line-height: 32px;
			border-radius: 50%;
			background: #fff;
			color: red;
			margin-top: 10px;
		}
	}
	.nav{
		height: 40px;
		line-height: 40px;
		cursor: pointer;
		>i{
			margin-left: 10px;
			margin-right: 2px;
			font-size: 14px;
			color: #c8c9cc;
		}
		>span{
			font-size: 14px;
			color: #c8c9cc;
		}
		&:hover{
			background: rgba(102,102,102,1);
			color: #fff;
			>i{
				color: #fff;
			}
			>span{
				color: #fff;
			}
		}
	}
	.bottom {
		position: absolute;
		bottom: 0;
	}
}
</style>
