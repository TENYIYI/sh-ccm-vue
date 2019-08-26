<template>
	<div class="mainbody_deried">
		<!--<Header></Header>-->
		<!--传播关闭记录内容start-->
		<div class="serach_content">
			<!--查询结果表格start-->
			<el-table :data="tableData" stripe style="width: 100%;padding-top:28px">
				<el-table-column prop="num" label="排名" min-width="14.6%"></el-table-column>
				<el-table-column prop="title" label="传播媒体" min-width="18.7%"></el-table-column>
				<!-- <el-table-column prop="media" label="源媒体" min-width="28.3%"></el-table-column> -->
				<el-table-column label="源媒体" min-width="34.2%"  >
					  <template slot-scope="scope">
						{{ scope.row.media}}
						<span class="media_tabs">
							<!-- <img src="@/assets/images/tabs_newspaper.png" alt="">
					<img src="@/assets/images/tabs_web.png" alt="">
					<img src="@/assets/images/tabs_app.png" alt=""> -->
					<span class="tabico i_bao">报</span>
					<span class="tabico i_wang">网</span>
					<span class="tabico i_app">APP</span>
					<span class="tabico i_wei">微</span>
						</span>
					
						</template>
						
				</el-table-column>
				<el-table-column prop="user" label="传播篇数" min-width="16.2%"></el-table-column>
				<el-table-column prop="closeTime" label="传播次数" min-width="16.3%"></el-table-column>
			</el-table>
			<!--查询解决表格end-->
			<!--分页start-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="80">
			</el-pagination>
			<!--分页end-->
			<!--备注start-->
			<div class="remarks">
				<i></i>
				<div class="remarks_con">
				<p>
					<span>备注:</span>
					<span>对原创媒体的传播情况进行查询统计，页面检索出来的结果显示的共有多少条，此数字仅仅是标识符合该条件的所有文章数量。</span>
				</p>
				<p>
					<span>传播篇数:</span>
					<span>传播篇数表示传播多少篇原创文章，无法通过页面列标识估算出数值，要对传播文章进行排重，同一篇不管相同网站传播多少次，只取1次。</span>
				</p>
				<p>
					<span>传播次数:</span>
					<span>传播次数表示传播多少次原创文章，所有文章后面的数字加起来的综合为总传播数，总的次数之和。</span>
				</p>
				<p>
					<span>举例:</span>
					<span>现有一篇A文章，有B、C、D三个网站，A文章分别被这三个网站传播2次，总传播次数为6次，那么现在传播篇数为3，传播次数为6.</span>
				</p>
				<p>
					<span>【导出传播次数按钮】导出的其实是传播篇数，【导出传播名词按钮】导出的其实是传播次数。</span>
				</p>
				</div>
			</div>
			<!--备注end-->
		</div>
		<!--传播关闭记录内容end-->
	</div>
</template>

<script>
	//	import Header from "../../src/components/header.vue";
	export default {
		data() {
			return {
				input:"",
				 checked: true,
				//				表格
				tableData: [{
					num: '1',
					title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '3000'
				}, {
					num: '2',
					title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '3000'
				}, {
					num: '3',
				title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '2800'
				}, {
					num: '4',
				title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '2500'
				}, {
					num: '5',
					title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '2000'
				}, {
					num: '6',
				title: '搜狐',
					media: '解放日报',
					user: '解放日报',
					closeTime: '1000'
				}],
				//下拉框
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value1: '',
				value2: '',
				//分页器
				currentPage4: 4,
				//			搜索输入框start
				restaurants: [],
				state1: '',
				state2: '',
				//时间
				value_date1: '',
				value_date2: '',

			}
		},
		//搜索文本框
		mounted() {
			this.restaurants = this.loadAll();
		},

		methods: {
			//			搜索输入框s
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
					{
						"value": "新旺角茶餐厅",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
					},
					{
						"value": "泷千家(天山西路店)",
						"address": "天山西路438号"
					},
					{
						"value": "胖仙女纸杯蛋糕（上海凌空店）",
						"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
					},
					{
						"value": "贡茶",
						"address": "上海市长宁区金钟路633号"
					},
					{
						"value": "豪大大香鸡排超级奶爸",
						"address": "上海市嘉定区曹安公路曹安路1685号"
					},
					{
						"value": "茶芝兰（奶茶，手抓饼）",
						"address": "上海市普陀区同普路1435号"
					},
					{
						"value": "十二泷町",
						"address": "上海市北翟路1444弄81号B幢-107"
					},
					{
						"value": "星移浓缩咖啡",
						"address": "上海市嘉定区新郁路817号"
					},
					{
						"value": "阿姨奶茶/豪大大",
						"address": "嘉定区曹安路1611号"
					},
					{
						"value": "新麦甜四季甜品炸鸡",
						"address": "嘉定区曹安公路2383弄55号"
					},
					{
						"value": "Monica摩托主题咖啡店",
						"address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
					},
					{
						"value": "浮生若茶（凌空soho店）",
						"address": "上海长宁区金钟路968号9号楼地下一层"
					},
					{
						"value": "NONO JUICE  鲜榨果汁",
						"address": "上海市长宁区天山西路119号"
					},
					{
						"value": "CoCo都可(北新泾店）",
						"address": "上海市长宁区仙霞西路"
					},
					{
						"value": "快乐柠檬（神州智慧店）",
						"address": "上海市长宁区天山西路567号1层R117号店铺"
					},
					{
						"value": "Merci Paul cafe",
						"address": "上海市普陀区光复西路丹巴路28弄6号楼819"
					},
					{
						"value": "猫山王（西郊百联店）",
						"address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
					},
					{
						"value": "枪会山",
						"address": "上海市普陀区棕榈路"
					},
					{
						"value": "纵食",
						"address": "元丰天山花园(东门) 双流路267号"
					},
					{
						"value": "钱记",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "壹杯加",
						"address": "上海市长宁区通协路"
					},
					{
						"value": "唦哇嘀咖",
						"address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
					},
					{
						"value": "爱茜茜里(西郊百联)",
						"address": "长宁区仙霞西路88号1305室"
					},
					{
						"value": "爱茜茜里(近铁广场)",
						"address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
					},
					{
						"value": "鲜果榨汁（金沙江路和美广店）",
						"address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
					},
					{
						"value": "开心丽果（缤谷店）",
						"address": "上海市长宁区威宁路天山路341号"
					},
					{
						"value": "超级鸡车（丰庄路店）",
						"address": "上海市嘉定区丰庄路240号"
					},
					{
						"value": "妙生活果园（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "香宜度麻辣香锅",
						"address": "长宁区淞虹路148号"
					},
					{
						"value": "凡仔汉堡（老真北路店）",
						"address": "上海市普陀区老真北路160号"
					},
					{
						"value": "港式小铺",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "蜀香源麻辣香锅（剑河路店）",
						"address": "剑河路443-1"
					},
					{
						"value": "北京饺子馆",
						"address": "长宁区北新泾街道天山西路490-1号"
					},
					{
						"value": "饭典*新简餐（凌空SOHO店）",
						"address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
					},
					{
						"value": "焦耳·川式快餐（金钟路店）",
						"address": "上海市金钟路633号地下一层甲部"
					},
					{
						"value": "动力鸡车",
						"address": "长宁区仙霞西路299弄3号101B"
					},
					{
						"value": "浏阳蒸菜",
						"address": "天山西路430号"
					},
					{
						"value": "四海游龙（天山西路店）",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "樱花食堂（凌空店）",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "壹分米客家传统调制米粉(天山店)",
						"address": "天山西路428号"
					},
					{
						"value": "福荣祥烧腊（平溪路店）",
						"address": "上海市长宁区协和路福泉路255弄57-73号"
					},
					{
						"value": "速记黄焖鸡米饭",
						"address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
					},
					{
						"value": "红辣椒麻辣烫",
						"address": "上海市长宁区天山西路492号"
					},
					{
						"value": "(小杨生煎)西郊百联餐厅",
						"address": "长宁区仙霞西路88号百联2楼"
					},
					{
						"value": "阳阳麻辣烫",
						"address": "天山西路389号"
					},
					{
						"value": "南拳妈妈龙虾盖浇饭",
						"address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
					}
				];
			},
			handleSelect(item) {
				console.log(item);
			},
			//		分页器
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}

		},

		//		components: {
		//			Header
		//		}
	}
</script>

<style lang="scss">
	.mainbody_deried {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 28px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.serach_bar {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 20px;
			border-radius: 10px;
			box-sizing: border-box;
			margin-bottom: 10px;
			font-size: 0;
			text-align: center;
			.title {
				font-size: 1.6rem;
				color: #333333;
				margin-bottom: 30px;
				text-align: left;
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
					font-weight: bold;
				}
				
			}
			.title_yuan1{
					font-size: 1.4rem;
					color: #666;
						vertical-align: middle;
						padding-left: 10px;
						margin-right: 5px;
				}
			
			.el-select {
				width: 220px;
				margin: 0 25px 0 0px;
				vertical-align: middle;
				.el-input {
					.el-select__caret {
						color: #999999;
						font-weight: 700;
					}
				}
			}
			.el-input-group__append {
				background: #00adcc;
				border-color: #00adcc;
				i {
					color: #fff;
					font-size: 21px;
				}
			}
			.el-input-group {
				width: 350px;
				vertical-align: middle;
			}
			.el-button--primary {
				// float: right;
				margin-top: 25px;
			}
			.el-input__inner {
				border: 1px solid #cccccc;
			}
		}
		/*查询结果表格start*/
		.serach_content {
			background: #fff;
			padding: 0 22px 0 20px;
			border-radius: 10px;


		}
		/*查询结果表格end*/
		
	}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected:before{
	    position: absolute;
    left: 10px;
    font-family: element-icons;
    content: "\E611";
    font-size: 12px;
    font-weight: 700;
    
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected:after{
	    position: absolute;
    left: 10px;
    font-family: element-icons;
    content: "";
    font-size: 12px;
    font-weight: 700;
    
}
.el-select-dropdown__item  span{
	margin-left: 10px;
}
.el-input{
	width: 240px;
	vertical-align: middle;
}
.el-date-editor.el-input{
	margin: 0 5px;
}
.remarks_con{
	    display: inline-block;
    vertical-align: top;
    top: -13px;
    position: relative;
}
.el-pagination{
	margin-bottom: 28px;
}
.serach_content_title div{
	display: inline-block
}
.serach_content_title{
	padding-top: 18px;
	padding-left: 15px;
	margin-bottom: 20px;
}
.serach_content_title  .search_all{
	    display: inline-block;
    width: 110px;
    height: 36px;
    background: #03b5d3;
    font-size: 1.4rem;
    text-align: center;
    line-height: 36px;
	border-radius: 20px;
	color: #ffffff;
}
.serach_content_title_left span{
	margin-right: 30px;
}
.serach_content_title  .search_other{
	font-size: 0.14rem;
	color: #00adcc;
}
.serach_content_title_right{
	float: right;
}
.serach_content_title_right span{
	    margin-left: 30px;
	    display: inline-block;
    width: 128px;
    height: 38px;
    border: 1px solid #03b5d3;
    color: #03b5d3;
    font-size: 1.4rem;
    line-height: 38px;
    text-align: center;
    border-radius: 10px;
}
.el-table .cell{
	// text-align: center;
	padding-left: 44px;
	font-size: 1.4rem;
	line-height: 2.43em;
}
.media_tabs{
	margin-left: 30px;
}
.el-table tr td:nth-child(3) .cell img{
	position: relative;
    top: 4px;
    margin-left: 5px;
}
</style>