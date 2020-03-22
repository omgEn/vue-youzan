<template>
	<!-- 实时概况 -->
	
		<div class="main-business">
			<div class="header">
				<div class="header-title">
					<h2>实时概况</h2>
					<p class="date">更新时间：<span v-text='date'></span></p>
					<el-tooltip class="item" effect="light" content="供货后台的指标仅统计供货订单数据,未统计非供货订单" placement="top">
						<i class="fa fa-question-circle"></i>
					</el-tooltip>
					<i class="fa fa-eye"></i>
				</div>
				<div class="header-action">
					<a href="#" class="edit">编辑</a>
				</div>
			</div>
			<div class="box clearfix">
				<div class="box-left">
					<div class="business-data-item">
						<p class="title">支付订单数</p>
						<a class="amount" href="#" v-text="dashboard.allOrders"></a>
						<p class="yesterday">昨日：<span v-text="dashboard.yesterdayOrders"></span></p>
					</div>
					<div class="business-data-item">
						<p class="title">支付金额</p>
						<a class="amount" href="#" v-text="dashboard.payment"></a>
						<p class="yesterday">昨日：<span v-text="dashboard.yesterdayPayment"></span></p>
					</div>
					<div class="business-data-item">
						<p class="title">浏览量</p>
						<a class="amount" href="#" v-text="dashboard.watchNum"></a>
						<p class="yesterday">昨日：<span v-text="dashboard.yesterdayWatchNum"></span></p>
					</div>
					<div class="business-data-item">
						<p class="title">累积客户数</p>
						<a class="amount" href="#" v-text="dashboard.allOrders"></a>
						<p class="yesterday">昨日：<span v-text="dashboard.yesterdayOrders"></span></p>
					</div>
				</div>
				<div class="box-right">
					<div class="business-data-item">
						<p class="title">本月目标（元）</p>
						<a class="amount" href="#" v-text="dashboard.allOrders"></a>
					</div>
					<div class="business-data-item">
						<p class="title">完成进度（%）</p>
						<a class="amount" href="#" v-text="dashboard.payment"></a>
					</div>
					<div class="business-data-item">
						<p class="title">可用店铺余额(元)</p>
						<a class="amount" href="#" v-text="dashboard.watchNum"></a>
					</div>
					<div class="business-data-item">
						<p class="title">待结算(元)</p>
						<a class="amount" href="#" v-text="dashboard.allOrders"></a>
					</div>
				</div>
			</div>
		
		</div>


</template>

<script>
	import moment from 'moment';
	import {
		mapState
	} from 'vuex';
	export default {

		data() {
			return {
				date: moment().format('YYYY-MM-DD HH:mm:ss'),

			}
		},
		computed: {
			...mapState('shop', ['dashboard']),
			// 模块名字，要用的数据
		},
		created() {
			// var Child = {
			// 	template: '<div>局部注册组件的内容</div>'
			// };

		},
		components: {

		}

	}
</script>

<style lang='scss' scoped>
	@import '@/assets/common.scss';

	.main-business {
		border-bottom: 20px solid $theme-primary-1;
		.header {
			display: flex;
			justify-content: space-between;
			height: 50px;
			line-height: 50px;
			margin-bottom: 10px;

			.header-title {
				display: inline-flex;
				font-weight: normal;
				align-self: baseline;
				position: relative;

				h2 {
					margin-right: 10px;
					font-size: 16px;
				}

				i {
					line-height: 50px;
					margin-left: 8px;
					color: #bbb;

					&:hover {
						color: #969799;
						cursor: pointer;
					}
				}

				.date {
					font-size: 14px;
					font-weight: 400;
					color: $theme-primary-2;
				}

				.fa-eye {
					line-height: 50px;
				}
			}

			.header-action {
				.edit {
					color: $btn-primary;
				}
			}
		}

		.box {
			width: 960px;
			&>div {
				float:left;
			}
		}

		.box-left {
			padding: 0px 40px;
			border-right: 1px solid #efefef;
			width: 52%;
			box-sizing: border-box;

			
		}

		.business-data-item {
			width: 200px;
			/* border: 1px solid red; */
			display: inline-block;
			margin-bottom: 20px;
			
			.title {
				font-size: 14px;
				line-height: 14px;
				color: $theme-primary-2;
			}
			
			.amount {
				display: inline-block;
				margin: 15px 0 13px;
				color: #333;
				font-size: 26px;
				cursor: pointer;
				font-weight: bolder;
			}
			
			.yesterday {
				color: #666;
				font-size: 14px;
				line-height: 14px;
			}
		}
		
		.box-right{
			width: 48%;
			padding-left: 60px;
			box-sizing: border-box;
		}
	}
</style>
