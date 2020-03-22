<template>
	<div>
		<slot v-if="this.$route.path=='/dashboard'">
			店铺概况
		</slot>
		<slot v-if="this.$route.path=='/shop'">
			<div class="header-left">
				店铺管理
			</div>
			<div class="header-right">
				<i class="fa fa-user-circle">1390000000</i>
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</div>
		</slot>
		<slot v-if="this.$route.path=='/good'">商品管理</slot>
	</div>
</template>

<script>
export default{}
</script>

<style lang="scss" >
// body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input, 
// textarea,select{margin:0;padding:0}
// body{font:12px "宋体","Arial Narrow",HELVETICA;background:#fff;}
// a{color:#172c45;text-decoration:none}
// a:hover{color:#cd0200;text-decoration:underline}
// em{font-style:normal}
// li{list-style:none}
// img{border:0;vertical-align:middle}
// table{border-collapse:collapse;border-spacing:0}
// p{word-wrap:break-word}
// .ind{text-indent:2em}
// .ind10{text-indent:10px;}
// .noborder{border:0;}
		
		
	
</style>
