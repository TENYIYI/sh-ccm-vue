<template>
	<div class="mainbody_permissionSetting">
		<div class="content">
			<div class="title">
				<span>权限设置</span>
			</div>
			<div class="content_box">
				<ol>
					<li class="active">页面权限</li>
					<li>站点权限</li>
				</ol>
				<div class="button_right">
					<el-button type="primary">提交</el-button>
					<el-button>取消</el-button>
				</div>
				<!--内容start-->
				<ul>
					<li>
						<el-table :data="tableData1" stripe style="width: 100%">
							<el-table-column prop="serialNumber" label="序号" min-width="11.477%" align="center"></el-table-column>
							<el-table-column prop="columnName" label="栏目名称" min-width="20.283%"></el-table-column>
							<el-table-column type="expand" prop="columnName" min-width="20.283%" class="">
								<template slot-scope="props">
									<div class="row" v-for="(item,index) in props.row.subcolumn">
										<span class="serialNumber"></span>
										<span class="columnName">{{ item.columnName }}</span>
										<span class="sortingIndex"></span>
										<span class="url"></span>
										<span class="setting"> <el-checkbox v-model="item.setting" @change="handleCheckAllChange(props.$index,index)"></el-checkbox></span>
										<span class="desciption">
   												 <el-checkbox v-model="item.exports" @change="handleCheckedCitiesChange(props.$index,index)">导出</el-checkbox>
   												  <el-checkbox v-model="item.deletes" @change="handleCheckedCitiesChange(props.$index,index)">删除</el-checkbox>
   												   <el-checkbox  v-model="item.close" @change="handleCheckedCitiesChange(props.$index,index)">关闭</el-checkbox>
										</span>
									</div>
								</template>
							</el-table-column>
							<el-table-column prop="sortingIndex" label="排序索引" min-width="16.981%"></el-table-column>
							<el-table-column prop="url" label="URL" min-width="15.094%"></el-table-column>
							<el-table-column prop="setting" label="权限设置" min-width="11.713%" class="setting">
								<template slot-scope="scope">
									<el-checkbox v-model="scope.row.setting"></el-checkbox>
								</template>
							</el-table-column>
							<el-table-column prop="desciption" label="权限描述" min-width="24.371%"></el-table-column>
						</el-table>
						<!--分页start-->
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="10000">
						</el-pagination>
						<!--分页end-->
					</li>
					<li>
						<el-table :data="tableData" stripe style="width: 100%">
							<el-table-column prop="serialNumber" label="序号" min-width="18.475%"></el-table-column>
							<el-table-column prop="source" label="媒体来源" min-width="16.195%"></el-table-column>
							<el-table-column prop="setting" label="权限设置" min-width="25.707%" class="setting">
								<template slot-scope="scope">
									<el-checkbox v-model="scope.row.setting"></el-checkbox>
								</template>
							</el-table-column>
							<el-table-column prop="desciption" label="权限描述" min-width="39.465%"></el-table-column>
						</el-table>
						<!--分页start-->
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="10000">
						</el-pagination>
						<!--分页end-->
					</li>

				</ul>

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
					source: '解放日报',
					setting: true,
					desciption: '用户登录',
				}, {
					serialNumber: '2',
					source: '文汇报',
					setting: false,
					desciption: '用户登录',
				}, {
					serialNumber: '3',
					source: '新闻晚报',
					setting: false,
					desciption: '用户登录',
				}, {
					serialNumber: '4',
					source: '新闻晨报',
					setting: false,
					desciption: '用户登录',
				}, {
					serialNumber: '5',
					source: '界面',
					setting: false,
					desciption: '用户登录',
				}, {
					serialNumber: '6',
					source: '数字信息',
					setting: false,
					desciption: '用户登录',
				}],
				//				表格2
				tableData1: [{
					serialNumber: '1',
					columnName: '首页',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: true,
					desciption: '可查看首页内容',

				}, {
					serialNumber: '2',
					columnName: '版权传播',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '可查看内容',

				}, {
					serialNumber: '3',
					columnName: '查询统计',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '可查看首页内容',

				}, {
					serialNumber: '4',
					columnName: '传播监测',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '可查看内容',

				}, {
					serialNumber: '5',
					columnName: '临时监测',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '可查看首页内容',

				}, {
					serialNumber: '6',
					columnName: '制作报告',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '可查看内容',
					subcolumn: [{
						columnName: '版权监测统计',
						setting: false,

						exports: false,
						deletes: true,
						close: false,

					}, {
						columnName: '转载监测统计',
						setting: false,

						exports: false,
						deletes: true,
						close: false,

					}, {
						columnName: '微信报告统计-集团',
						setting: false,

						exports: false,
						deletes: true,
						close: false,

					}, {
						columnName: '微信报告统计-媒体',
						setting: false,

						exports: false,
						deletes: true,
						close: false,

					}],
				}, {
					serialNumber: '7',
					columnName: '系统设置',
					sortingIndex: 'XXXXXXXX',
					url: 'XXXXXXXX',
					setting: false,
					desciption: '',

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
			},
			//			全选
			handleCheckAllChange(row, index) {

				this.tableData1[row].subcolumn[index].exports = this.tableData1[row].subcolumn[index].setting;
				this.tableData1[row].subcolumn[index].deletes = this.tableData1[row].subcolumn[index].setting;
				this.tableData1[row].subcolumn[index].close = this.tableData1[row].subcolumn[index].setting;

			},
			//单选
			handleCheckedCitiesChange(row, index) {
				console.log(row);
				var exports = this.tableData1[row].subcolumn[index].exports;
				var deletes = this.tableData1[row].subcolumn[index].deletes;
				var close = this.tableData1[row].subcolumn[index].close;
				if(exports && deletes && close) {

					this.tableData1[row].subcolumn[index].setting = true;
				} else {
					this.tableData1[row].subcolumn[index].setting = false;
				}

			}
		},

	}
</script>

<style lang="scss">
	.mainbody_permissionSetting {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 63px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 162px;
			border-radius: 10px;
			box-sizing: border-box;
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
				ol {
					padding: 0;
					margin: 0;
					margin-bottom: 20px;
					display: inline-flex;
					justify-content: flex-start;
					align-items: center;
					li {
						width: 101px;
						height: 40px;
						border: 1px solid #03b5d3;
						color: #03b5d3;
						font-size: 1.4rem;
						text-align: center;
						line-height: 40px;
						cursor: pointer;
						&.active {
							background: #03b5d3;
							color: #fff;
						}
					}
				}
				.button_right {
					float: right;
				}
				ul {
					padding: 0;
					margin: 0;
					list-style: none;
				}
				.el-table {
					.el-checkbox {
						margin-left: 23px;
						&.is-checked {
							.el-checkbox__inner {
								border: 1px solid #00b4d4;
							}
						}
						.el-checkbox__inner {
							width: 1.4rem;
							height: 1.4rem;
							line-height: 1.4rem;
							font-size: 1.4rem;
							border: 1px solid #999999;
							text-align: center;
							&:after {
								top: 50%;
								left: 50%;
								margin-top: -4px;
								margin-left: -2px;
							}
						}
					}
					/*.el-table_2_column_7{
						.cell{
							&:after{
								content: "";
								display: inline-block;
								width: 10px;
								height: 10px;
								background:red;
							}
						}
					}*/
				}
			}
		}
	}
</style>