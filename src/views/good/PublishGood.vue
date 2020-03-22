<template lang="html">
	<div class="publishGood">
		<div class="step">
			<el-steps :active="1" simple>
				<el-step title="1.基本信息"></el-step>
				<el-step title="2.编辑商品详情"></el-step>
			</el-steps>
		</div>
		<div class="type clearfix">
			<h5>商品类型</h5>
			<div class="item" v-for="item in items" :key="item.id">
				<span>
					<span class="shipment_name" v-text="item.value"></span>
					<span class="shipment_way" v-text="item.way"></span>
				</span>
			</div>
		</div>
		<!-- <br> -->
		<div class="info">
			<h5>基本信息</h5>
			<GoodForm></GoodForm>
		</div>
		<div class="sales">
			<h5>价格库存</h5>
		</div>
		<div class="others">
			<h5>其他信息</h5>
		</div>
	</div>
</template>

<script>
	const GoodForm = ()=>import('./components/GoodForm.vue')
	export default {
		components:{
			GoodForm
		},
		data: function() {
			return {
				items: [{
						id: 1,
						value: "实物商品",
						way: "(物流发货)"
					},
					{
						id: 2,
						value: "虚拟商品",
						way: "(物流发货)"
					},
					{
						id: 3,
						value: "电子卡卷",
						way: "(物流发货)"
					},
					{
						id: 4,
						value: "酒店商品",
						way: "(物流发货)"
					},
					{
						id: 5,
						value: "蛋糕烘焙",
						way: "(同城送货自提)"
					}
				],

		}

	}

	}
</script>

<style lang="scss" scoped>
	@import '@/assets/common.scss';

	.publishGood {
		&>div {
			margin-top: 16px;

			&>h5 {
				height: 36px;
				line-height: 36px;
				background: $theme-primary-1;
				text-indent: 1em;
			}
		}

		.step {
			.el-step__arrow::before {
				height: 30px;
			}

		}
	}

	// 商品类型
	.type {
		.item {
			width: 116px;
			height: 52px;
			border: 1px solid #999;
			float: left;
			margin-right: 10px;
			font-size: 12px;
			text-align: center;
			border-radius: 2px;

			&:hover {
				cursor: pointer;
			}

			.shipment_name {
				display: block;
				line-height: 28px;
				vertical-align: bottom;
			}

			.shipment_way {
				color: #999;
				margin-top: 0px;
			}
		}

	}
</style>
