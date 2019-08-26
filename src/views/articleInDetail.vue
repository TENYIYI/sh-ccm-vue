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
                      <div class="ccm_main_con_part1_con_table">
                       <el-table
                        :data="tableData"
                        :header-cell-style="{background:'#f2f2f2'}"
                        stripe
                        style="width: 100%;color:#03b5d3">
                      <el-table-column
                          prop="name"
                          label="原创文章标题"
                          min-width="36.6%"
                          class="cell1">
                        </el-table-column>
                        <el-table-column
                          prop="from"
                          label="原创文章地址"
                          min-width="20.4%">
                        </el-table-column>
                         <el-table-column
                          prop="media"
                          label="原创文章媒体"
                          min-width="25%">
                        </el-table-column>
                        <el-table-column
                          prop="date"
                          label="原创文章时间"
                          min-width="18%">
                        </el-table-column>
                         
                      </el-table>
       
                      </div>
                   
                       
                       
                            
                    </div>
                </div>
                <!--part1 end  -->  
  
        <!-- part2 start -->
        <div class="ccm_main_con_part2_dev">
               <div class="ccm_main_con_part1 ccm_main_con_part2 ">
                 <div class="ccm_main_con_part2_left">
                    <!-- <div class="ccm_main_con_part1_title">
                       <img src="@/assets/images/wenzhang_tabs.jpg" alt=""> <span class="ccm_content">原始文章</span>
                    </div> -->
                    <div class="ccm_main_con_part1_con ccm_main_con_part2_con">
                     <div class="ccm_con_title">
                       <p class="ccm_con_title_title">
                         新民晚报简介
                       </p>
                       
                     </div>
                     <div class="ccm_con_con">
                       <p>
                         《新民晚报》是中共上海市委直接领导的面向广大市民的综合性报纸，以“宣传政策，传播知识，移风易俗，丰富生活”为编辑方针，着眼于“飞入寻常百姓家”。在内容上，力求可亲性、可近性、可信性、可读性。“新民晚报”四字由孙中山书稿辑集而成。
                       </p>
                       <p>
改革开放特别是20世纪90年代以来，《新民晚报》获得了长足发展，报纸发行量和报业经济效益连续多年位居全国晚报之首。1996年，《新民晚报》在美设立记者站、创办美国版，成为中国大陆第一张跨出国门的晚报；以后又扩大了《新民晚报》在北美地区、港澳地区的发行。2002年，《新民晚报》又与星岛报业集团合作，推出《新民晚报》澳洲专版，扩大了《新民晚报》在大洋洲地区的影响。                       </p>
                       <p>
                         新民晚报媒体优势 
                       </p>
                       <p>
                         发行量最大：①70多年来，一直是上海最大影响力、最强公信力的日报；② 全上海发行量最大的报纸，每天发行126万份；③ 国内外共21个印点同时开印，包括北京、江苏、浙江、香港、美国洛杉矶；④ 海外版发行全球18个国家地区，包括美国、加拿大、澳大利亚等。
                       </p>
                         <p>
                         新民晚报媒体优势 
                       </p>
                       <p>
                           发行量最大：①70多年来，一直是上海最大影响力、最强公信力的日报；② 全上海发行量最大的报纸，每天发行126万份；③ 国内外共21个印点同时开印，包括北京、江苏、浙江、香港、美国洛杉矶；④ 海外版发行全球18个国家地区，包括美国、加拿大、澳大利亚等。
                       </p>
                         <p>
                         新民晚报媒体优势 
                       </p>
                       <p>
                           发行量最大：①70多年来，一直是上海最大影响力、最强公信力的日报；② 全上海发行量最大的报纸，每天发行126万份；③ 国内外共21个印点同时开印，包括北京、江苏、浙江、香港、美国洛杉矶；④ 海外版发行全球18个国家地区，包括美国、加拿大、澳大利亚等。
                       </p>
                     </div>
                      </div>
                </div>
              
               </div> 
                       
                            
            </div>
        <!--part2 end  -->  
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
         name: '冒充情报人员招摇撞骗 将对冒充者依法追责',
          date: '2016-05-02',
          media: '和讯网',
          from: '澎湃新闻（APP）',
          operation: '关闭此结果'
        }],
        currentPage: 4
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
<style>
.app-container {
  padding: 0px;
}
  .ccm_main_con_part1_con_table{
      padding-right: 35px;
    }
   /* th.el-table_1_column_1 .cell{
     padding-left: 60px;
   }
    td.el-table_1_column_1  .cell{
       padding-left: 60px;
    } */
.ccm_main_con {
    background: #ebeded;
    width: 100%;
    padding: 22px 20px 0 20px;
    box-sizing: border-box;
    padding-bottom: 55px;
}
   .ccm_main_con_part1 {
       width: 100%;
       height: auto;
       background: #ffffff;
       padding-left: 20px;
       padding-top: 32px;
       border-radius: 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding-bottom: 25px;
   }
     .ccm_main_con_part1_title{
           margin-bottom: 30px;
       }
       .ccm_main_con_part1_title img{
         /* vertical-align: bottom */
       }
      .ccm_main_con_part1_title .ccm_tabs {
           width: 4px;
           height: 16px;
           background: #03b5d3;
           display: inline-block;
       }
       .ccm_main_con_part1_title .ccm_content {
           font-size: 1.4rem; 
           line-height: 1.4rem;
           color: #333333;
           margin-left: 5px;
           color: #00adcc;
       }
      .ccm_main_con_part1_con {
          font-size: 1.4rem;
          line-height: 14px;
          padding-left: 15px;
     }
     .ccm_main_con_part2_con{
       padding-left: 0;
     }
          .ccm_title{
        color: #666666;
     }
     .ccm_content{
         color: #00adcc;
         margin-left: 10px;
         margin-right: 20px;
     }
    
     .ccm_next_dev{
       float: right;
       padding-right: 35px;
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
        color: #00adcc;
        margin-bottom: 14px;
     }
    .tabs_icon{
      font-size: 1.4rem;
      line-height: 34px;
      color: #999999;
      margin-top: 10px;
      /* margin-bottom: 25px; */
    }
    .tabs_icon img{
      width: 14px;
      height: 14px;
      margin-right: 5px;
      vertical-align: middle;

    }
    .tabs_next{
      margin-left: 30px;
    }
    .ccm_main_con_part2_dev{
      overflow: hidden;
    }
    .ccm_main_con_part2{
      overflow: hidden;
      width: 100%;
      padding-right: 20px;
      float: left;
    }
    .ccm_main_con_part2_left{
       margin-right: 5px;
       margin-bottom: 175px;
    }
      .ccm_main_con_part2_right{
       margin-left: 5px;
       float: right;

    }
    .ccm_con_title{
      text-align: center;
    }
    .ccm_con_title_title{
      font-size: 1.6rem;
      /* line-height: 2.85em; */
      color: #333333;
      margin-bottom: 20px;
    }
    .ccm_con_title_describe{
       font-size: 1.4rem;
      color: #999999;
    }
    .ccm_con_title_describe .describe1{
      margin-right: 10px;
    }
     .ccm_con_title_describe .describe2{
      margin-right: 25px;
    }
    .ccm_con_con p{
      font-size: 1.4rem;
      line-height: 2.28em;
      color: #666666;
      text-indent: 2em;
    }
    .ccm_main_con_part1_con_table{
      padding-right: 35px;
    }
    /* .has-gutter tr>th .cell{
      padding-left: 60px;
    }
    .el-el-table__body tr>td .cell{
      padding-left: 60px;
    } */
 
  
</style>

