<template>
<!-- 内容区start -->
  <div class="app-container">
            <div class="ccm_main_con">
                <!-- part1 start -->
                <div class="ccm_main_con_part1">
                    <div class="ccm_main_con_part1_title">
                       <span class="ccm_tabs"></span> <span class="ccm_content">版权作品传播</span>
                    </div>
                    <div class="ccm_main_con_part1_con">
                        <span class="ccm_title">原创文章标题: </span><span class="ccm_content">冒充情报人员招摇撞骗 将对冒充者依法追责</span><i
                            class="ccm_label"></i>
                        <span><a href="">关闭此传播</a></span> <span class="ccm_next">上一篇</span> <span
                            class="ccm_next">上一篇</span>
                            <span class="ccm_daochu">导出</span>
                    </div>
                </div>
                <!--part1 end  -->  
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      style="width: 100%"
      highlight-current-row
    >
      <el-table-column align="center" label="序号" min-width="11%">
        <template slot-scope="scope">
          {{ (scope.$index)+1 }}
        </template>
      </el-table-column>
      <el-table-column label="传播标题1" min-width="48.7%"  >
        <template slot-scope="scope">
          <span class="ccm_table_con">
            {{ scope.row.title }}
          </span>
          
        </template>
      </el-table-column>
      <el-table-column label="传播媒体"   align="center"  min-width="13.3%">
        <template slot-scope="scope">
          <span class="ccm_table_con">{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"  min-width="13.3%" align="center">
        <template slot-scope="scope">
          <span class="ccm_table_con">{{ scope.row.pageviews }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="传播时间"  min-width="13.7%" align="center">
        <template slot-scope="scope">
          <span class="ccm_table_con">
            {{ scope.row.display_time }}
          </span>
          
          <!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag> -->
        </template>
      </el-table-column>
      
    </el-table>
    <!-- 分页开始 -->
    <!--分页start-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200]" :page-size="100" prev-text="上一页" next-text="下一页" layout="total, sizes, prev, pager, next, jumper" :total="80">
			</el-pagination>
			<!--分页end-->
    <!-- 分页结束 -->
      <!-- <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div> -->
  <div class="tabs_icon">
    <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：蓝色字体标识正向传播（被传播文章刊发时间早于或者等于互联网上传播时间）。灰色字体标识反向传播（被传播文章刊发时间晚于互联网上传播时间）。</span>
  </div>
        <!-- part3 start -->
            <div class="ccm_main_con_part1 ccm_main_con_part3">
                <div class="ccm_main_con_part1_title">
                    <span class="ccm_tabs"></span> <span class="ccm_content">传播渠道分布</span>
                </div>
                <div class="ccm_main_con_part1_con">
                  <div id="myChart" ref="myEchart" :style="{width: '300px', height: '300px'}">
                  </div>
                        <div class="ccm_main_con_part3_table" >
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                          prop="paiming"
                          label="排名"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="报纸"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="发布时间">
                        </el-table-column>
                      </el-table>
                      <div class="tabs_icon">
    <img src="@/assets/images/tabs_icon.jpg" alt=""><span>备注：默认展示报纸传播情况， 点击左侧饼图可切换右表数据</span>
  </div>
                      </div>
                </div>
            </div>
                <!--part3 end  -->  
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
          date: '2016-05-02',
          name: '东方网',
          paiming: '1'
        }, {
          date: '2016-05-04',
         name: '东方网',
          paiming: '2'
        }, {
          date: '2016-05-01',
         name: '东方网',
          paiming: '3'
        }, {
          date: '2016-05-03',
          name: '东方网',
          paiming: '4'
        }],
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
                fontSize: 17,   
                }
            },
            tooltip : { //提示框组件
                trigger: 'item', //触发类型(饼状图片就是用这个)
                formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            },
            color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                bottom: -5,
               left: 'center',
               data: ['报纸（20%）','网站（30%）','APP（10%）','微信（40%）']
            },
            series : [ //系列列表
                {
                    name:'设备状态',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['40%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['50%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
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
                        {value:80, name:'报纸（20%）'},
                        {value:10, name:'网站（30%）'},
                        {value:30, name:'APP（10%）'},
                        {value:20, name:'微信（40%）'},
                       
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
<style>
.app-container {
  padding: 0px;
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
    .ccm_main_con_part3_table{
      width: 50%;
      float: right;
    }
    #myChart{
      display: inline-block;
      width: 50% !important ;
    }
    #myChart>div{
      margin: auto!important;
    }
</style>

