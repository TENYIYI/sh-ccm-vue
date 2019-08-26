<template>
	<div class="mainbody_blackAndWhiteListManagement">
		<div class="content">
			<div class="title">
				<span>传播媒体配置</span>
			</div>
			<div class="content_box">
				<router-link to="">
					<el-button type="primary">新增</el-button>
				</router-link>
				
				<!--内容start-->

				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="serialNumber" label="序号" min-width="16.195%" align="center"></el-table-column>
					<el-table-column prop="mediaName" label="传播媒体名称" min-width="18.553%"></el-table-column>
					<el-table-column prop="mediaDomainName" label="传播媒体域名" min-width="23.437%"></el-table-column>
					<el-table-column prop="listType" label="名单类型" min-width="24.056%"></el-table-column>
					<el-table-column prop="operation" label="操作" min-width="17.767%">
						<template slot-scope="scope">
							<router-link to="" class="ccm_link to_edit">
								编辑
							</router-link>
							<router-link to="" class="ccm_link to_delete">
								删除
							</router-link>
						</template>
					</el-table-column>

				</el-table>

				<!--内容end-->

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
					mediaName: '新浪',
					mediaDomainName:'www.sina.com',
					listType:'用户登录',
					

				}, {
				serialNumber: '2',
					mediaName: '搜狐',
					mediaDomainName:'www.sina.com',
					listType:'密码修改',
					
				}, {
					serialNumber: '3',
					mediaName: '新浪',
					mediaDomainName:'www.sina.com',
					listType:'数据查询',
				
				}, {
					serialNumber: '4',
					mediaName: '搜狐',
					mediaDomainName:'www.sina.com',
					listType:'新增数据',
					
				}, {
					serialNumber: '5',
					mediaName: '新浪',
					mediaDomainName:'www.sina.com',
					listType:'系统管理',
					
				}, {
					serialNumber: '6',
					mediaName: '搜狐',
					mediaDomainName:'www.sina.com',
					listType:'保存提交',
					
				}],


			}
		},

		methods: {


		},

	}
</script>

<style lang="scss">
	.mainbody_blackAndWhiteListManagement {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 72px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 225px;
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
				
				.el-table{
					margin-top: 20px;
					a{
						margin-right: 20px;
						&.to_delete{
							color: #f02323;
						}
					}
				}

			}
		}
	}
</style>