<template>
	<div class="mainbody_userManagement">
		<div class="content">
			<div class="title">
				<span>用户管理</span>
			</div>
			<div class="content_box">
				<router-link to="">
					<el-button type="primary">新增</el-button>
				</router-link>
				<!--内容start-->
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="serialNumber" label="序号" min-width="16.194%" align="center"></el-table-column>
					<el-table-column prop="userName" label="用户名" min-width="19.339%"></el-table-column>
					<el-table-column prop="realName" label="姓名" min-width="17.138%"></el-table-column>
					<el-table-column prop="department" label="部门" min-width="20.125%"></el-table-column>
					<el-table-column prop="operation" label="操作" min-width="27.201%">
						<template slot-scope="scope">
							<router-link to="" class="ccm_link">
								密码重置
							</router-link>
							<router-link to="" class="ccm_link">
								修改用户
							</router-link>
							<router-link to="" class="ccm_link to_delete">
								删除用户
							</router-link>
						</template>
					</el-table-column>

				</el-table>

				<!--内容end-->
			<!--分页start-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="10000">
			</el-pagination>
			<!--分页end-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//				表格
				tableData: [{
					serialNumber: '1',
					userName: '张三',
					realName: '张三',
					department: '用户登录',
				}, {
					serialNumber: '2',
					userName: 'XXXXXXXXXX',
					realName: '李四',
					department: '密码修改',
				}, {
					serialNumber: '3',
					userName: '张三',
					realName: '张三',
					department: '数据查询',

				}, {
					serialNumber: '4',
					userName: 'XXXXXXXXXX',
					realName: '张三',
					department: '新增数据',
				}, {
					serialNumber: '5',
					userName: '张三',
					realName: '张三',
					department: '系统管理',
				}, {
					serialNumber: '6',
					userName: 'XXXXXXXXXX',
					realName: '李四',
					department: '保存提交',
				}],
				//分页器
				currentPage4: 1,
			}
		},

		methods: {
			//		分页器
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},

	}
</script>

<style lang="scss">
	.mainbody_userManagement {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 72px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 163px;
			border-radius: 10px;
			box-sizing: border-box;
			font-size: 0;
			.title {
				font-size: 1.6rem;
				color: #333333;
				margin-bottom: 30px;
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
				.manual_synchronization {
					margin-left: 30px;
				}
				.el-table {
					margin-top: 20px;
					a {
						margin-right: 40px;
						&.to_delete {
							color: #f02323;
						}
					}
				}
			}
		}
	}
</style>