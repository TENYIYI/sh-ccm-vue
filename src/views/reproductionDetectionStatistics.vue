<template>
<!-- 内容区start -->
  <div class="app-container_repro">
            <div class="ccm_main_con">
                <!-- part1 start -->
                <!--传播关闭记录头部操纵start-->
		<div class="serach_bar_reprostatis">
			<div class="title">
				<span>传播查询统计</span>
			</div>
			<div class="serach_bar_con">
            <div class="select_list">
                <span class="title_yuan1">原创媒体渠道</span>
                <el-select v-model="value1" multiple placeholder="全部">
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
                 <div class="search_button">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">导出</el-button>
                </div>
			 </div>
           
             <div class="tabs_icon">
    <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：默认显示上月数据，可统计上月及之前的数据报表。</span>
  </div>
		</div>
		<!--传播关闭记录头部操纵end-->
        <!--part1 end  -->  
        <!-- part3开始 -->
        <div class="ccm_main_con_line1">
             <div class="ccm_main_con_part1">
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《解放日报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                        <div class="tabs_icon">
                            <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：传播媒体统计不含新浪、搜狐、网易、凤凰、腾讯和今日头条。</span>
                        </div>
                      </div>
                </div>
            </div>
              <div class="ccm_main_con_part1 ccm_main_con_part1_right">
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《文汇报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                        <div class="tabs_icon">
                            <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：传播媒体统计不含新浪、搜狐、网易、凤凰、腾讯和今日头条。</span>
                        </div>
                      </div>
                </div>
            </div>
        </div>
          <div class="ccm_main_con_line1">
             <div class="ccm_main_con_part1">
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《解放日报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                        <div class="tabs_icon">
                            <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：传播媒体统计不含新浪、搜狐、网易、凤凰、腾讯和今日头条。</span>
                        </div>
                      </div>
                </div>
            </div>
              <div class="ccm_main_con_part1 ccm_main_con_part1_right">
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《文汇报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                        <div class="tabs_icon">
                            <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：传播媒体统计不含新浪、搜狐、网易、凤凰、腾讯和今日头条。</span>
                        </div>
                      </div>
                </div>
            </div>
        </div>
          <div class="ccm_main_con_line1">
             <div class="ccm_main_con_part1 ccm_main_con_part1_line3">
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《解放日报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                       
                      </div>
                </div>
            </div>
              <div class="ccm_main_con_part1 ccm_main_con_part1_right ccm_main_con_part1_line3" >
                <div class="ccm_main_con_part1_con">
                <div class="ccm_main_con_part1_con_1" >
                    <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> 
                    <span class="ccm_content">《文汇报》TOP10</span>
                    <span class="ccm_content_viewmore">查看更多>></span>
                </div>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                       prop="num"
                          label="序号"
                          min-width="26%" >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="媒体名称"
                          min-width="50%" >
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="转发篇数"
                          min-width="25%" >
                        </el-table-column>
                      </el-table>
                        
                      </div>
                </div>
            </div>
            <!--备注start-->
			<div class="remarks">
				<img src="@/assets/images/tabs_icon_1.png" alt="">
                <span>备注：</span>
				<div class="remarks_con">
				<p>
					<span>表中的数字为各网站转发该报纸文章的篇目数。</span>
				</p>
				<p>
					<span>各报纸被转载详请请见附件。</span>
				</p>
				<p>
					<span>本报告基于本中心对中国大陆境内1638个互联网新闻源的数据监测，详情可见新闻信息服务系统。</span>
				</p>
				<p>
					<span>如对统计数据有任何疑问和建议请致电22899038 。</span>
				</p>

				</div>
			</div>
			<!--备注end-->
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
  },
   
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
      

   
  }
}
</script>

<style lang="scss">
		.serach_bar_reprostatis {
			width: 100%;
			background: #ffffff;
			padding: 32px 20px 20px;
			border-radius: 10px;
			box-sizing: border-box;
			margin-bottom: 20px;
			/* font-size: 0; */
			text-align: center;
			.title {
                font-size: 1.6rem;
                line-height: 2.125em;
				color: #333333;
				margin-bottom: 25px;
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
				// margin-top: 25px;
			}
			.el-input__inner {
				border: 1px solid #cccccc;
			}
			.serach_bar_con{
                margin-left: 15px;
                text-align: left;
                .select_list{
                    display: inline-block;
                    margin-right: 45px;
                }
                .select_list_month{
                     display: inline-block;
                }
                
            }
            .search_button{
                    display: inline-block;
                    // margin-left: 60px;
                    float: right;
                }
		}
        /*查询结果表格start*/
        .app-container_repro {
         padding: 0px;
            .el-table {
            th>.cell{
                text-align: left;
                padding-left: 50px;
            }
            .cell{
                text-align: left;
              padding-left: 50px;  
            }
            tr{
              td:nth-child(3){
                  .cell{
                    // padding-left: 85px;
                    text-align: center;
                  }
              }  
            }
            }
            .remarks{
                padding-left: 15px;
                span{

                    vertical-align: top;
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
       padding-bottom: 20px;
       width: 49.2%;
       height: auto;
       background: #ffffff;
       padding-left: 20px;
       padding-right: 20px;
       padding-top: 32px;
       border-radius: 15px;
        box-sizing: border-box;
        margin-bottom: 20px;
        display: inline-block;
   }
   .ccm_main_con_part1_line3{
       padding-bottom: 38px;
   }
   .ccm_main_con_part1_right{
       float: right;
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
        .ccm_main_con_part1_title .ccm_content_viewmore{
            float: right;
            color: #999999;
            font-size: 1.4rem;
        }
      .ccm_main_con_part1_con {
          font-size: 1.4rem;
          line-height: 14px;
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

  
     .el-pagination{
       text-align: center;
       margin-top: 30px;
     }
     .ccm_table_con{
       color: #03b5d3
     }
    .tabs_icon{
      font-size: 1.4rem;
      line-height: 2.43em;
      color: #999999;
      margin-top: 15px;
      text-align: left;
    }
    .tabs_icon img{
      width: 1.4rem;
      height: 14px;
      margin-right: 5px;
      vertical-align: middle;

    }
    .ccm_main_con_part3{
      height: auto;
    }
    .ccm_main_con_part4{
      padding-bottom: 70px;
      width: 50%
    }
  
   
  
.ccm_main_con_part1_title .ccm_content{
    font-weight: bold;
}
.tabs_icon_lin3{
    margin-top: 0px;
}
 .remarks_con{
	    display: inline-block;
    vertical-align: top;
    top: -13px;
    position: relative;
}
</style>


