<template>
	<div class="mainbody">
		<div class="content">
			<div class="title">
				<span>关闭日志详情</span>
			</div>
			
			<!--查询结果表格start-->
			<div class="content_details">
				<el-table :data="tableData" stripe style="width: 100%" :show-header="false">
					<el-table-column prop="key" label="序号" min-width="16.981%"></el-table-column>
					<el-table-column prop="key_value" label="文章标题" min-width="83.019%"></el-table-column>
				</el-table>
			</div>
			<!--查询结果表格end-->
		
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//				表格
				tableData: [{
					key: '日志类型',
					key_value: '信息',

				}, {
					key: '操作对象',
					key_value: 'admin[用户-1]',
				}, {
					key: '操作类型',
					key_value: '用户登录',
				}, {
					key: '操作用户',
					key_value: 'admin',
				}, {
					key: '操作用户IP',
					key_value: '192.168.3.102',
				}, {
					key: '操作时间',
					key_value: '13-04-03   10:14:24',
				}, {
					key: '操作耗时',
					key_value: '0  ms',
				}, {
					key: '操作结果',
					key_value: '成功',
				}, {
					key: '是否存在篡改',
					key_value: '不存在',
				}, {
					key: '详细描述',
					key_value: '用户（admin[用户-1]）于2013-04-03  10:14:24 从[192.168.3.102]登录系统',
				}],

			}
		},

		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.mainbody {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 54px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 80px;
			border-radius: 10px;
			box-sizing: border-box;
			font-size: 0;
			.title {
				font-size: 1.6rem;
				color: #333333;
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
			.content_details {
				padding-left: 15px;
				.el-table {
					border-top: 1px solid #F0F0F0;
					margin-top: 30px;
					tr {
						td {
							background: #fafafa !important;
							padding-left: 56px;
							padding-right: 56px;
							&:first-child {
								border-right: 1px solid #f0f0f0;
								padding-right: 0;
								padding-left: 0;
							}
						}
						&.el-table__row--striped {
							td {
								background: #fff !important;
							}
						}
					}
				}
			}
		}
	}
</style>