<template lang="html">
	<div class="good">
		<div class="publish">
			<!-- <p v-text="good"></p> -->
			<el-row>
				<el-button @click="skip">发布商品</el-button>
			</el-row>
		</div>
		<!-- input框 -->
		<FormFilter v-model="formParams" @filter='filterHandle'></FormFilter>
		<!-- 全部 -->

		<TabFilter v-model='tabIdx'></TabFilter>
		<!-- 商品表 -->
		<GoodTable :list="list"></GoodTable>
		<!-- 分页 -->
		<div class="block">
			<el-pagination 
				@size-change="sizeHandle" 
				@current-change="pageHandle" 
				:current-page="currentPage"
				:page-sizes="[5, 15, 20, 25]" 
				:page-size="1" 
				layout="total, sizes, prev, pager, next, jumper" 
				:total="total">
			</el-pagination>
		</div>


	</div>
</template>

<script>
	// import {mapState} from 'vuex'
	// import { fetchGoodList} from '@/utils/api.js'
	const FormFilter = () => import('./components/FormFilter.vue')
	const TabFilter = () => import('./components/TabFilter.vue')
	const GoodTable = () => import('./components/GoodTable.vue')
	export default {
		// 局部路由守卫
		// 未看
		beforeRouteEnter(to,from,next){
			const isLogin = localStorage.getItem('isLogin');
			if(isLogin==1){
				next()
			} else {
				next('/login')
			}
		},
		components: {
			FormFilter,
			TabFilter,
			GoodTable
		},
		data: function() {
			return {
				tabIdx: '-1',
				list: [],
				currentPage: 1,
				currentSize: 5,
				total: 0,
				formParams: {
					name: '',
					group_no: 0,
					type_no: 0,
					sale_min: 0,
					sale_max: 0,
					price_min: 0,
					price_max: 0,
					deduction_no: '0'
				}
			}
		},
		computed: {
			// ...mapState('good',['msg'])
		},
		watch: {
			tabIdx(){
				// console.log(val);
				this.changeList();
			}
		},
		mounted() {
			this.changeList();
		},
		methods: {
			//调接口
			changeList() {
				// 入参
				const params = {
					status_no: this.tabIdx,//1-销售中，2-已销售，3-仓库中
					page: this.currentPage,//分页页码
					size:this.currentSize,//每页的数量
					
					// 数据没有出来，看是不是传参错误
					// 通过在这里的一个一个调试，最终找到错误
					name: this.formParams.name,
					group_no: this.formParams.group_no,//商品分组
					type_no: this.formParams.type_no,//商品类型
					sale_max: this.formParams.sale_max,
					sale_min: this.formParams.sale_min,
					price_max: this.formParams.price_max,
					price_min: this.formParams.price_min,
					deduction_no: this.formParams.deduction_no
					// ...this.formParams
				};
				// 入参校验
				if(params.sale_max===0) delete params.sale_max;
				if(params.price_max===0) delete params.price_max;
				
				this.$http.fetchGoodList(params).then(res=>{
					console.log('res:', res);
					this.list = res.list;
					this.total = res.total;
				})
			},
			// 发布商品按钮点击
			skip() {
				this.$router.push('/publish')
			},
			// tab键切换
			filterHandle(){
				console.log('父组件 执行筛选');
				this.changeList();
			},
			sizeHandle(val){
				console.log(`每页${val}条`);
				this.currentSize = val;
				this.changeList();
			},
			pageHandle(val){
				console.log(`当前页：${val}`);
				this.currentPage = val;
				this.changeList();
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '@/assets/common.scss';
	.good{
		min-width: 860px;
	}
	.publish {
		margin-bottom: 20px;

		.el-button {
			margin-top: 30px;
			background: $btn-primary;
			color: #fff;

			&:hover {
				background: $theme-primary-5;
				color: #fff;
			}
		}

	}
</style>
