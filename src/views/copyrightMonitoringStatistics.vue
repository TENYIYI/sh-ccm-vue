<template>
<!-- 内容区start -->
  <div class="app-container">
            <div class="ccm_main_con">
                <!-- part1 start -->
                <!--传播关闭记录头部操纵start-->
		<div class="serach_bar_query">
			<div class="title">
				<span>传播查询统计</span>
			</div>
			<div class="serach_bar_con">
                <div class="select_list">
			<span class="title_yuan1">原创媒体</span>
				<el-select v-model="value1" multiple placeholder="全部">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
	
				<el-select v-model="value2" multiple placeholder="全部">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
            	</div>

                  <div class="select_list">
            <span class="title_yuan1">年份</span>
				<el-select v-model="value1" multiple placeholder="全部">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
            </div>
             <div class="select_list_month">
             <span class="title_yuan1">月份</span>
				<el-select v-model="value1" multiple placeholder="全部">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
				</div>
			 </div>

			<el-button type="primary">查询</el-button>
            <el-button type="primary">导出</el-button>
             <div class="tabs_icon">
    <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：默认显示上月数据，可统计上月及之前的数据报表。</span>
  </div>
		</div>
		<!--传播关闭记录头部操纵end-->
        <!--part1 end  -->  
        <!-- part2 start -->
            <div class="ccm_main_con_part1 ccm_main_con_part3">
                <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> <span class="ccm_content">传播渠道分布</span>
                </div>
                <div class="ccm_main_con_part1_con">
                  <div id="myChart" ref="myEchart" :style="{width: '300px', height: '560px'}" >
                      
                  </div>
                  <!-- <span class="myChart_title">主要新闻（网络）媒体分布</span> -->
                        <div class="ccm_main_con_part3_table" >
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       
                          label="排名"
                          min-width="35.6%" >
                        <template slot-scope="scope">
						<span class="table_num">
							 {{ (scope.$index)+1 }}
						</span>
					    </template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="38.2%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="26.2%" >
                        </el-table-column>
                      </el-table>
                      </div>
                </div>
            </div>
                <!--part2 end  -->  
                <!-- part3开始 -->
                 
            <div class="ccm_main_con_part1 ccm_main_con_part3 ccm_main_con_part4">
                <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> <span class="ccm_content">每日转发最多篇目统计</span>
                </div>
                <div class="ccm_main_con_part1_con">
                  
                <div class=" " >
                    <el-table
                        :data="tableData2"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="time"
                          label="日期"
                          min-width="20.8%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="文章标题"
                          min-width="62.5%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发次数"
                          min-width="16.7%" >
                        </el-table-column>
                      </el-table>
                         <div class="tabs_icon">
    <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：本报告基于本中心对中国大陆境内1638个互联网新闻源的数据监测，详情可见新闻信息服务系统。更多大数据分析产品请致电22899038。</span>
  </div>
                      </div>
                </div>
            </div>
               
                <!-- part3结束 -->
     </div>
  </div>
    
   <!-- 内容区end -->
</template>

<script>
import { getList } from '@/api/table'
import echarts from "echarts";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
       chart: null,
      listLoading: true,
       tableData: [{
          date: '30',
          name: '东方网',
          num: '1'
        }, {
         date: '30',
         name: '东方网',
          num: '2'
        }, {
         date: '30',
         name: '东方网',
          num: '3'
        }, {
          date: '30',
          name: '东方网',
          num: '4'
        },
        {
          date: '30',
          name: '东方网',
          num: '6'
        }, {
         date: '30',
         name: '东方网',
          num: '7'
        }, {
         date: '30',
         name: '东方网',
          num: '8'
        }, {
          date: '30',
          name: '东方网',
          num: '9'
        }, {
         date: '30',
         name: '东方网',
          num: '10'
        }, {
          date: '30',
          name: '东方网',
          num: '11'
        }
        ],
         tableData2: [{
          date: '30',
          name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
          time: '2019-07-31'
        }, {
         date: '30',
         name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
           time: '2019-07-31'
        }, {
         date: '30',
         name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
           time: '2019-07-31'
        }, {
          date: '30',
          name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
           time: '2019-07-31'
        },
        {
          date: '30',
          name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
          time: '2019-07-31'
        }, {
         date: '30',
         name: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
          time: '2019-07-31'
        }
        ],
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
                currentPage: 4,
                currentPage4:4
    }
  },
  created() {
    this.fetchData();
  //  this.initChart();
  },
    mounted() {
    this.initChart();
  },
    beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
       initChart(){
        // 基于准备好的dom，初始化echarts实例
         this.chart = echarts.init(this.$refs.myEchart);
        // 绘制图表
       this.chart.setOption({
      title: {//标题组件
                text: '',
                left:'50px',//标题的位置 默认是left，其余还有center、right属性
                textStyle: {    
                color: "#436EEE",    
                fontSize: 20,   
                }
            },
            tooltip : { //提示框组件
                trigger: 'item', //触发类型(饼状图片就是用这个)
                formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            },
            color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                  bottom: 66,
                // top:400,
               left: 'center',
                width:560,
                height:200,
                
               data: ['新华网（11.3%））','中国新闻网（11.2%）','中国上海政府网（26.5%）','新浪网（11.3%）','央广网（11.2%）','上海慈善网（26.5%）','网易（11.3%）','上海热线（11.2%）','腾讯网（26.5%）']
            },
             graphic:{       //图形中间文字
            type:"text",
            left:"28%",
            top:"30%",
            style:{
                text:"主要新闻\n（网络）媒体分布",
                textAlign:"center",
                fill:"#333333",
                fontSize:20,
                textAlign:"center",
                
            }
        },
            series : [ //系列列表
                {
                    name:'设备状态',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                     center:['40%','32.8%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '10',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                          {value:80, name:'东方网（26.5%）'},
                        {value:10, name:'新华网（11.3%）'},
                        {value:30, name:'中国新闻网（11.2%）'},
                        {value:20, name:'中国上海政府网（26.5%）'},
                        {value:80, name:'新浪网（11.3%）'},
                        {value:10, name:'央广网（11.2%）'},
                        {value:30, name:'上海慈善网（26.5%）'},
                        {value:20, name:'网易（11.3%）'},
                        {value:10, name:'上海热线（11.2%）'},
                        {value:30, name:'腾讯网（26.5%）'},
                        {value:20, name:'其他（11.3%）'},
                       
                    ]
                }
            ]

        });
    },

     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<style lang="scss">
		.serach_bar_query {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 20px;
			border-radius: 10px;
			box-sizing: border-box;
			margin-bottom: 10px;
			/* font-size: 0; */
			text-align: center;
			.title {
                font-size: 1.6rem;
                line-height: 2.125em;
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
						// padding-left: 10px;
						margin-right: 5px;
				}
			.el-select {
				width: 220px;
				margin: 0 10px 0 0px;
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
			.serach_bar_con{
                margin-left: 15px;
                text-align: left;
                .select_list{
                    display: inline-block;
                    margin-right: 80px;
                }
                .select_list_month{
                     display: inline-block;
                }
			}
		}
        /*查询结果表格start*/
        .app-container {
         padding: 0px;
            .el-table {
            th>.cell{
                text-align: left;
                padding-left: 70px;
            }
            .cell{
                text-align: left;
              padding-left: 70px;  
            }
            tr{
              td:nth-child(3){
                  .cell{
                    padding-left: 105px;
                  }
              }  
            }
            }

          
        }
.ccm_main_con {
    background: #ebeded;
    width: 100%;
    padding: 22px 20px 0 20px;
    box-sizing: border-box;
    
}
   .ccm_main_con_part1 {
       width: 100%;
       height: 124px;
       background: #ffffff;
       padding-left: 20px;
       padding-top: 32px;
       border-radius: 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
   }
     .ccm_main_con_part1_title{
           margin-bottom: 30px;
       }
      .ccm_main_con_part1_title .ccm_tabs {
           width: 4px;
           height: 16px;
           background: #03b5d3;
           display: inline-block;
       }
       .ccm_main_con_part1_title .ccm_content {
           font-size: 1.6rem; 
           line-height: 1em;
           color: #333333;
           margin-left: 10px;
       }
      .ccm_main_con_part1_con {
          font-size: 1.4rem;
          line-height: 1em;
          padding-left: 15px;
        //   position: relative;
     }
          .ccm_title{
        color: #666666;
     }
     .ccm_content{
         color: #00adcc;
         margin-left: 10px;
         margin-right: 20px;
     }
      .ccm_label{
         /* background: url(ccm_main_con_part1_con_title.jpg) no-repeat; */
         width: 32px;
         height: 18px;
         display: inline-block;
     }
      a{
         color: #00adcc;
         margin-left: 28px;
         text-decoration:underline;
         margin-right: 70px;
     }
     .ccm_next{
         width: 80px;
         height: 30px;
         border: 1px solid #00adcc;
         border-radius: 5px;
         margin-left: 30px;
         font-size: 1.4rem;
        line-height: 30px;
        display: inline-block;
        text-align: center;
     }
     .ccm_daochu{
         font-size: 1.4rem;
         line-height: 40px;
         display: inline-block;
         width: 100px;
         height: 40px;
         background: #03b5d3;
         border: 1px solid #03b5d3;
         border-radius: 10px;
         text-align: center;
         float: right;
     }
     .el-pagination{
       text-align: center;
       margin-top: 30px;
     }
     .ccm_table_con{
       color: #03b5d3
     }
    .tabs_icon{
      font-size: 1.4rem;
      line-height: 34px;
      color: #999999;
      margin-top: 20px;
      text-align: left;
    }
    .tabs_icon img{
      width: 14px;
      height: 14px;
      margin-right: 5px;
      vertical-align: middle;

    }
    .ccm_main_con_part3{
      height: auto;
    }
    .ccm_main_con_part4{
      padding-bottom: 70px;
    }
    .ccm_main_con_part3_table{
      width: 50%;
      float: right;
    }
    // 圆形图形样式
    #myChart{
      display: inline-block;
      width: 50% !important ;
      height: auto !important;
    }
    #myChart>div{
      margin: auto!important;
    }
     // 圆形图形样式
     table tr:first-child td:first-child .cell .table_num{
		display: inline-block;
		width: 18px;
		height: 18px;
		background: #ff491c;
		font-size: 1.4rem;			
}
  table tr:nth-child(2) td:first-child .cell .table_num{
		display: inline-block;
		width: 18px;
		height: 18px;
		background: #ff491c;
		font-size: 1.4rem;			
}
  table tr:nth-child(3) td:first-child .cell .table_num{
		display: inline-block;
		width: 18px;
		height: 18px;
		background: #ff491c;
		font-size: 1.4rem;			
}
.ccm_main_con_part1_title .ccm_content{
    font-weight: bold;
}
</style>


