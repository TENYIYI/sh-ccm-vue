<template>
	<div class="mainbody">
		<!--传播关闭记录头部操纵start-->
		<div class="serach_bar">
			<div class="title">
				<span>系统日志管理</span>
			</div>
			<div class="choose_time">
				<span>时间</span>
				<el-date-picker v-model="value_date1" type="date" placeholder="选择日期"></el-date-picker>
				<i class="contact_line"></i>
				<el-date-picker v-model="value_date2" type="date" placeholder="选择日期"></el-date-picker>
			</div>
			<el-button>刷新</el-button>
			<el-button type="primary">查询</el-button>

		</div>
		<!--传播关闭记录头部操纵end-->
		<!--传播关闭记录内容start-->
		<div class="serach_content">
			<!--查询结果表格start-->
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column prop="num" label="序号" min-width="13.836%" align="center"></el-table-column>
				<el-table-column prop="title" label="操作" min-width="13.365%">
					<template slot-scope="scope">
						<router-link to="" class="ccm_link to_details">
							查看
						</router-link>
					</template>

				</el-table-column>
				<el-table-column prop="media" label="操作对象" min-width="19.182%"></el-table-column>
				<el-table-column prop="user" label="操作类型" min-width="18.082%"></el-table-column>
				<el-table-column prop="closeTime" label="操作用户" min-width="18.317%"></el-table-column>
				<el-table-column prop="closeTime" label="操作时间" min-width="17.138%"></el-table-column>
			</el-table>
			<!--查询解决表格end-->
			<!--分页start-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="10000">
			</el-pagination>
			<!--分页end-->
			<!--备注start-->
			<div class="remarks">
				<i></i>
				<span>备注:</span>
				<span>按时间排序显示搜索作者的原创文章。</span>
			</div>
			<!--备注end-->
		</div>
		<!--传播关闭记录内容end-->
	</div>
	
	
</template>

<script>
	export default {
		data() {
			return {
				//				表格
				tableData: [{
					num: '1',
					title: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
					media: '解放日报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}, {
					num: '2',
					title: '安全之弦一刻松不得',
					media: '文汇报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}, {
					num: '3',
					title: '冒充情报人员招摇撞骗 将对冒充者依法追责',
					media: '解放日报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}, {
					num: '4',
					title: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
					media: '文汇报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}, {
					num: '5',
					title: '安全之弦一刻松不得',
					media: '解放日报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}, {
					num: '6',
					title: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
					media: '文汇报',
					user: 'admin',
					closeTime: '2019-07-24   15:30'
				}],

				//分页器
				currentPage4: 1,

				//时间
				value_date1: '',
				value_date2: '',

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
	.mainbody {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 45px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.serach_bar {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 20px;
			border-radius: 10px;
			box-sizing: border-box;
			margin-bottom: 10px;
			/* font-size: 0; */
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
			.choose_time {
				display: inline-block;
				color: #666666;
				padding-left: 15px;
				span {
					font-size: 1.4rem;
					vertical-align: middle;
				}
				.contact_line {
					display: inline-block;
					width: 10px;
					height: 1px;
					background: #b3b3b3;
					vertical-align: middle;
				}
			}
			.el-button--primary {
				float: right;
			}
			.el-button--default {
				float: right;
				margin-left: 30px;
			}
		}
		/*查询结果表格start*/
		.serach_content {
			background: #fff;
			padding: 30px 22px 0 35px;
			border-radius: 10px;
			.to_details {
				text-decoration: none;
				&:hover{
					color: #333333;
				}
			}
		}
		/*查询结果表格end*/
		.remarks {
    padding: 20px 0 116px;
    }
	}

</style>