<template>
	<div class="mainbody_communicationMediaConfiguration">
		<div class="content">
			<div class="title">
				<span>传播媒体配置</span>
			</div>
			<div class="content_box">
				<router-link to="">
					<el-button type="primary">新增</el-button>
				</router-link>
				<el-button class="manual_synchronization">手动同步</el-button>
				<!--内容start-->

				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="serialNumber" label="序号" min-width="15.487%" align="center"></el-table-column>
					<el-table-column prop="id" label="ID" min-width="18.082%"></el-table-column>
					<el-table-column prop="mediaName" label="传播媒体名" min-width="27.830%"></el-table-column>
					<el-table-column prop="mediaDomainName" label="域名" min-width="23.034%"></el-table-column>
					<el-table-column prop="operation" label="操作" min-width="15.566%">
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
					id: '22222',
					mediaName: '登录',
					mediaDomainName: 'www.sina.com',
				}, {
					serialNumber: '2',
					id: '33333',
					mediaName: '版权作品',
					mediaDomainName: 'www.sina.com',

				}, {
					serialNumber: '3',
					id: '22222',
					mediaName: '版权监测',
					mediaDomainName: 'www.sina.com',

				}, {
					serialNumber: '4',
					id: '33333',
					mediaName: '报表分析',
					mediaDomainName: 'www.sina.com',

				}, {
					serialNumber: '5',
					id: '22222',
					mediaName: '系统设置',
					mediaDomainName: 'www.sina.com',

				}, {
					serialNumber: '6',
					id: '33333',
					mediaName: '登录',
					mediaDomainName: 'www.sina.com',

				}],

			}
		},

		methods: {

		},

	}
</script>

<style lang="scss">
	.mainbody_communicationMediaConfiguration {
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
				.manual_synchronization {
					margin-left: 30px;
				}
				.el-table {
					margin-top: 20px;
					a {
						margin-right: 20px;
						&.to_delete {
							color: #f02323;
						}
					}
				}
			}
		}
	}
</style>