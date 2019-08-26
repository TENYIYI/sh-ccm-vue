<template>
  <!-- 列表 -->
  <div class="all_tab_content">
    <!-- 解放日报 -->
    <div class="tab_content_item">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="排名" min-width="8%" align="center">
          <template slot-scope="scope">
            <span :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="原创标题" min-width="57%">
          <template slot-scope="scope">
            <div class="originalTitle">
              <span class="title_cont">{{ scope.row.title }}</span>
              <span class="icon_item icon_bao">报</span>
              <span class="icon_item icon_wang">网</span>
              <span class="icon_item icon_app">APP</span>
              <span class="icon_item icon_weixin">微</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="media" label="媒体" min-width="10%"></el-table-column>
        <el-table-column prop="time" label="原创时间" min-width="15%"></el-table-column>
        <el-table-column prop="frequency" label="传播次数" min-width="10%" align="right"></el-table-column>
      </el-table>
      <!--分页start-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[50, 100, 150, 200]"
        :page-size="100"
        prev-text="上一页"
        next-text="下一页"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //				表格
      tableData: [
        {
          num: "1",
          title: "冒充情报人员招摇撞骗 将对冒充者依法追责(APP)",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "2",
          title: "冒充情报人员招摇撞骗",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "3",
          title: "冒充情报人员招摇依法追责(APP)",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "4",
          title: "冒充情报人员招摇撞骗 将依法追责(APP)",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "5",
          title: "冒充情报对冒充者依法追责(APP)",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "6",
          title: "冒充情报摇(APP)",
          media: "解放日报",
          frequency: "5456",
          time: "2019-07-24   15:30"
        }
      ],
      //分页器
      currentPage4: 1
    };
  },
  //搜索文本框
  mounted() {},

  methods: {
    //		分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }

  //		components: {
  //			Header
  //		}
};
</script>

<style lang="scss" scoped>
.tab_content_item {
  background: #fff;
  padding: 30px 22px 150px 35px;
  border-radius: 10px;
  .originalTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title_cont {
      display: inline-block;
      width: 50%;
    }
    .icon_item {
      display: inline-block;
      height: 17px;
      width: 30px;
      text-align: center;
      line-height: 17px;
      font-size: 1.3rem;
      margin: 0 3px;
      &.icon_bao {
        border: 1px solid #ff491c;
        color: #ff491c;
        background: #fff3f0;
        border-radius: 3px;
      }
      &.icon_wang {
        border: 1px solid #217aff;
        color: #217aff;
        background: #f0f6ff;
        border-radius: 3px;
      }
      &.icon_app {
        border: 1px solid #ffae00;
        color: #ffae00;
        background: #fffaf0;
        border-radius: 3px;
      }
      &.icon_weixin {
        border: 1px solid #13c2c2;
        color: #13c2c2;
        background: #f0fffc;
        border-radius: 3px;
      }
    }
  }
}
</style>