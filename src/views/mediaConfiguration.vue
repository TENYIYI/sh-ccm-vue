<template>
	<div class="mainbody">
		<div class="content">
			<div class="title">
				<span>媒体配置</span>
			</div>
			<div class="content_box">
				<router-link to="">
					<el-button type="primary">新增</el-button>
				</router-link>
				<!--内容start-->

				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="serialNumber" label="序号" min-width="17.767%" align="center"></el-table-column>
					<el-table-column prop="media" label="媒体" min-width="16.667%"></el-table-column>
					<el-table-column prop="id" label="ID" min-width="12.578%"></el-table-column>
					<el-table-column prop="status" label="状态" min-width="13.522%"></el-table-column>
					<el-table-column prop="bulidTime" label="建立时间" min-width="20.362%"></el-table-column>
					<el-table-column prop="operation" label="操作" min-width="19.025%">
						<template slot-scope="scope">
							<router-link to="" class="ccm_link">
								查看
							</router-link>
							<router-link to="" class="ccm_link to_delete">
								删除
							</router-link>
							<router-link to="" class="ccm_link">
								加入黑名单
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
					media: '东方网',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'

				}, {
				serialNumber: '2',
					media: '新华网',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'
				}, {
					serialNumber: '3',
					media: '中国新闻网',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'
				}, {
					serialNumber: '4',
					media: '中国上海政府网',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'
				}, {
					serialNumber: '5',
					media: '新浪',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'
				}, {
					serialNumber: '6',
					media: '央广网',
					id:'admin',
					status:'正常',
					bulidTime:'2019-07-24   15:30'
				}],


			}
		},

		methods: {


		},

	}
</script>

<style lang="scss">
	.mainbody {
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