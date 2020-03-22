<template lang="html">
	<div class="form_filter">
		<el-row class="form1">
			<!--1商品名称-->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10">
				<div class="grid-content bg-purple">
					<el-row :span="8">
						<!-- 1-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>商品名称：</span></div>
						</el-col>
						<!-- 1-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-input v-model="input" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<!-- 2商品分组 -->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10">
				<div class="grid-content bg-purple">
					<el-row :span="6">
						<!-- 2-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>商品分组：</span></div>
						</el-col>
						<!-- 2-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-select v-model="value.group_no" filterable placeholder="请选择|搜索">
									<!-- v-model过来的值都是value -->
									<!-- v-model没有解决-->
									<el-option 
										v-for="(item,idx) in goodGroupList" 
										:key="idx" 
										:label="item.label" 
										:value="item.id">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<!-- 3商品类型 -->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10">
				<div class="grid-content bg-purple">
					<el-row :span="6">
						<!-- 3-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>商品类型：</span></div>
						</el-col>
						<!-- 3-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-select v-model="value.type_no" filterable placeholder="请选择|搜索">
									<el-option 
										v-for="(item,idx) in goodTypeList" 
										:key="idx" 
										:label="item.label" 
										:value="item.id">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<!-- 4销量 -->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10" class="sale">
				<div class="grid-content bg-purple">
					<el-row :span="6">
						<!-- 4-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>总销量：</span></div>
						</el-col>
						<!-- 4-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-input v-model.number="value.sale_min" placeholder=""></el-input>
								-
								<el-input v-model.number="value.sale_max" placeholder=""></el-input>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<!-- 5价格 -->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10" class="sale">
				<div class="grid-content bg-purple">
					<el-row :span="8">
						<!-- 5-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>价格：</span></div>
						</el-col>
						<!-- 5-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-input v-model.number="value.price_min" placeholder=""></el-input>
								<!-- v-model="value.sale_min.number sale_min -->
								-
								<el-input v-model.number="value.price_max" placeholder=""></el-input>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<!-- 6库存扣减方式 -->
			<el-col :span="8" :lg="8" :md="10" :xs="10" :sm="10">
				<div class="grid-content bg-purple">
					<el-row :span="6">
						<!-- 6-1 -->
						<el-col :span="8">
							<div class="grid-content bg-purple"><span>库存扣减方式：</span></div>
						</el-col>
						<!-- 6-2 -->
						<el-col :span="16">
							<div class="grid-content bg-purple-light">
								<el-select v-model="value.deduction_no" filterable placeholder="请选择|搜索">
									<!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option> -->
									<el-option key='1' label='全部' value='0'></el-option>
									<el-option key='2' label='拍下扣减库存' value='2'></el-option>
									<el-option key='3' label='付款扣减库存' value='2'></el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<!-- 按钮 -->
		<el-row class="search">
			<el-col :offset="2" :span="20">
				<el-button @click='filterHandle'>筛选</el-button>
				<el-button>导出</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { goodGroupList,goodTypeList } from '@/utils/map.js'
	export default {
		props: {
			value:{
				type:Object,
				required: true
			}
		},
		data() {
			return {
				goodGroupList,
				goodTypeList,
				input: '',
				value2: '',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				
			}
		},
		methods: {
			filterHandle(){
				this.$emit('filter');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/common.scss';

	.form_filter {
		box-sizing: border-box;
		overflow: auto;
		background: #f2f3f5;
		padding: 0 2%;
		padding-bottom: 20px;
	}

	.form1 {
		margin-bottom: 20px;
		.grid-content {
			border-radius: 4px;
			min-height: 36px;
		}

		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}

		>.el-col {
			margin-top: 20px;
		}

		.el-select,
		.el-input {
			width: 178px;
		}

		.bg-purple {
			>span {
				float: right;
				line-height: 36px;
			}
		}
		// 销量
		.sale {
			.el-input {
				width: 80px;
			}
		}
	}
	// 按钮
	.search {
		.el-button:first-child {
			background: $btn-primary;
			color: #fff;
			&:hover {
				background: $theme-primary-5;
				color: #fff;
			}
		}
	}
</style>
