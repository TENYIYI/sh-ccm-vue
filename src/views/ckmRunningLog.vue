<template>
	<div class="mainbody">
		<div class="content">
			<div class="title">
				<span>CKM运行日志</span>
			</div>
			<div class="content_box">
			<el-button type="primary">刷新</el-button>
			
			<!--内容start-->
			<div class="content_log">
				<img src="../assets/images/ckm_running_log.png" alt="" />
			</div>
			<!--内容end-->
			<!--分页start-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="80">
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
				//分页器
				currentPage4: 4,

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
		.content {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 60px;
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
			.content_box{
				padding-left: 15px;
			
			.content_log{
				width: 100%;
				margin-top: 28px;
				img{
					width: 100%;
				}
			}
			/*分页器start*/
			.el-pagination {
				margin-top: 32px;
				/*分页器end*/
			}
			}
		}
	}
</style>