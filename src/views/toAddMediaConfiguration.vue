<template>
	<div class="mainbody_toAddMediaConfiguration">
		<div class="content">
			<div class="title">
				<span>添加原创媒体</span>
			</div>
			<div class="content_box">
				<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="原创媒体" prop="age" class="notNull" :rules="[]">
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
								<el-checkbox v-model="checked">备选项</el-checkbox>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
						<el-button @click="resetForm('numberValidateForm')">重置</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				numberValidateForm: {
					age: ''
				},
				cities: [{
					value: 'Beijing',
					label: '北京'
				}, {
					value: 'Shanghai',
					label: '上海'
				}, {
					value: 'Nanjing',
					label: '南京'
				}, {
					value: 'Chengdu',
					label: '成都'
				}, {
					value: 'Shenzhen',
					label: '深圳'
				}, {
					value: 'Guangzhou',
					label: '广州'
				}],
				value: ''
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang="scss">
	.mainbody_toAddMediaConfiguration {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 120px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 97px;
			border-radius: 10px;
			box-sizing: border-box;
			font-size: 0;
			.title {
				font-size: 1.6rem;
				color: #333333;
				margin-bottom: 26px;
				&:before {
					content: '';
					display: inline-block;
					width: 4px;
					height: 16px;
					background: #03b5d3;
					vertical-align: middle;
				}
				span {
					padding-left: 10px;
					display: inline-block;
					vertical-align: middle;
				}
			}
			.content_box {
				padding-left: 15px;
				.notNull {
					label {
						&:after {
							content: "*";
							color: #f56c6c;
						}
					}
				}
			}
		}
	}
</style>