<template lang="html">
	<div class="form">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item :span="12" label="商品名" prop="name" class="input_min">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="分享描述" class="input_min">
				<el-input v-model="ruleForm.shareDesc"></el-input>
				<div class="subtitle">
					<span>微信分享给好友时会显示，建议36个字以内</span>
					<i>查看示例</i>
				</div>
			</el-form-item>
			<el-form-item label="商品卖点" class="input_min">
				<el-input v-model="ruleForm.sells"></el-input>
				<div class="subtitle">
					<span>在商品详情页标题下面展示卖点信息，建议60字以内</span>
					<i>查看示例</i>
				</div>
			</el-form-item>
			<el-form-item label="商品图" prop="name">
				<el-upload action="#" list-type="picture-card" :auto-upload="false">
					<i slot="default" class="el-icon-plus">添加图片	</i>
					<div slot="file" slot-scope="{file}">
						<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
						<span class="el-upload-list__item-actions">
							<span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
								<i class="el-icon-zoom-in"></i>
							</span>
							<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
								<i class="el-icon-download"></i>
							</span>
							<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
								<i class="el-icon-delete"></i>
							</span>
						</span>
					</div>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
				<div class="subtitle">
					<span>建议尺寸：800*800像素，你可以拖拽图片调整顺序，最多上传15张</span>
				</div>
			</el-form-item>
			<!-- 主图视频 -->
			<!-- 选择分组 -->
			<el-form-item label="商品分组" prop="group">
				<el-select v-model="ruleForm.group" placeholder="请选择商品分组">
					<el-option label="请选择" value="shanghai"></el-option>
					<el-option label="列表中隐藏" value="beijing"></el-option>
				</el-select>
				<div class="group_info">
					刷新 新建分组 如何创建商品分组
				</div>
			</el-form-item>
			<hr>
			
			<el-form-item label="活动时间" required>
				<el-col :span="11">
					<el-form-item prop="date1">
						<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="date2">
						<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送" prop="delivery">
				<el-switch v-model="ruleForm.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false,
				ruleForm: {
					name: '',
					shareDesc: '',
					sells: '',
					group: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '商品名称必须填写，最多100字',
							trigger: 'blur'
						},
						{
							min: 10,
							max: 100,
							message: '长度在 10 到 100 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			// img start
			handleRemove(file) {
				console.log(file);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleDownload(file) {
				console.log(file);
			}
			// img end
		}
	}
</script>

<style lang="scss">
	@import '@/assets/common.scss';
	.form {
		.el-form-item{
			.subtitle{
				font-size: 12px;
				color: #999;
				i {
					margin-left: 1em;
					color: $theme-primary-5;
					font-style: normal;
				}
			}
			.group_info{
				float: right;
				left: 500px;
			}
			.input_min {
				width: 54%;
			}
		}
		
		.el-upload--picture-card{
			width: 85px;
			height: 85px;
			line-height: 85px;
			background: #fff;
			i{
				font-size: 12px;
				color: $theme-primary-5;
			}
		}
	}
</style>
