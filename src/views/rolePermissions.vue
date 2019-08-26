<template>
	<div class="mainbody_userManagement">
		<div class="content">
			<div class="title">
				<span>角色权限管理</span>
			</div>
			<div class="content_box">
				<router-link to="">
					<el-button type="primary">新增</el-button>
				</router-link>
				<!--内容start-->
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="serialNumber" label="序号" min-width="16.194%" align="center"></el-table-column>
					<el-table-column prop="roleName" label="角色名称" min-width="19.339%"></el-table-column>
					<el-table-column prop="status" label="状态" min-width="13.757%"></el-table-column>
					<el-table-column prop="description" label="描述" min-width="14.622%"></el-table-column>
					<el-table-column prop="operation" label="操作" min-width="38.207%">
						<template slot-scope="scope">
							<router-link to="" class="ccm_link">
								启用
							</router-link>
							<router-link to="" class="ccm_link">
								停用
							</router-link>
							<router-link to="" class="ccm_link">
								修改角色
							</router-link>
							<router-link to="" class="ccm_link to_delete">
								删除角色
							</router-link>
							<router-link to="" class="ccm_link">
								添加用户
							</router-link>
							<router-link to="" class="ccm_link">
								权限设置
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
					roleName: '经理',
					status: '启用',
					description: '角色描述',
				}, {
					serialNumber: '2',
					roleName: '信息部',
					status: '启用',
					description: '角色描述',
				}, {
					serialNumber: '3',
					roleName: '解放日报编辑',
					status: '启用',
					description: '角色描述',

				}, {
					serialNumber: '4',
					roleName: '文汇报编办',
					status: '无效',
					description: '角色描述',
				}, {
					serialNumber: '5',
					roleName: '新民晚报',
					status: '启用',
					description: '角色描述',
				}, {
					serialNumber: '6',
					roleName: '新闻晨报',
					status: '启用',
					description: '角色描述',
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

<style lang="scss" scoped>
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
						margin-left: 5.761%;
						&.to_delete {
							color: #f02323;
						}
						&:first-child{
							margin-left: 0;
						}
					}
				}
			}
		}
	}
</style>