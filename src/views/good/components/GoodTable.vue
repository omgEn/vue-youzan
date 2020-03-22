<template>
<div class="good_table">
	<el-table :data="list" style="width: 100%">
		<el-table-column fixed  label="商品名" sortable width="150">
			<!-- 此处的scope是做啥用的 -->
			<template slot-scope="scope">
				<div class="good_item">
					<img :src="scope.row.src" alt="商品">
					<div v-text="scope.row.name"></div>
				</div>
			</template>
		</el-table-column>
		<el-table-column prop="price" label="价格" sortable width="120">
		</el-table-column>
		<el-table-column prop="visit_num" label="访问量" sortable width="120">
		</el-table-column>
		<el-table-column prop="inventory_num" label="库存" sortable width="120">
		</el-table-column>
		<el-table-column prop="sale_num" label="销量 " sortable width="120">
		</el-table-column>
		<el-table-column prop="order" label="序号" sortable width="120">
		</el-table-column>
		<el-table-column prop="create_time" label="创建时间" :formatter="timeHandle" sortable width="120">
		</el-table-column>
		<el-table-column prop="status_zh" label="操作状态" width="120">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="100">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				<el-button type="text" size="small">编辑</el-button>
			</template>
		</el-table-column>
	</el-table>
</div>
</template>

<script>
	import moment from 'moment';
	export default {
		props: {
			list:{
				type: Array,
				required: false
			}
		},
		methods: {
			formatter(row){
				return row.address;
			},
			timeHandle(row) {
				return moment(row.create_time).format('HH:mm:ss');
			},
		}

		/* data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333
				}, {
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333
				}]
			}
		}
		 */
	}
</script>

<style lang="scss" scoped>
.good_item {
	text-align: center;
	&>img{
		display: inline-block;
		width: 30px;
		width: 40px;
		cursor: pointer;
	}
}
</style>
