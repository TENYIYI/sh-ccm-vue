<template>
  <div class="mainbody">
    <div class="serach_bar">
      <div class="title">
        <span class="newspaper_title">版权作品传播</span>
      </div>
      <!-- 第一行 -->
      <div class="one_line">
        <span class="channelType current_type">报纸</span>
        <span class="channelType">网站</span>
        <span class="channelType">APP</span>
        <span class="channelType">微信</span>
      </div>
      <!-- 二次搜索结果行 -->
      <div class="two_line">
        <div class="line_left">
          <div class="choose_time">
            <span>原创时间</span>
            <el-date-picker v-model="value_date1" type="date" placeholder="选择日期"></el-date-picker>
            <i class="contact_line"></i>
            <el-date-picker v-model="value_date2" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <el-autocomplete
            class="inline-input"
            v-model="enterValue"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-autocomplete>
        </div>

        <el-button type="primary">导出</el-button>
      </div>
    </div>
    <!-- 列表 -->
    <div class="all_tab_content">
      <!-- 解放日报 -->
      <div class="tab_content_item">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column label="排名" min-width="5%" align="center">
            <template slot-scope="scope">
              <span :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="原创标题" min-width="70%">
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
          <el-table-column prop="time" label="原创时间" min-width="20%"></el-table-column>
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
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "2",
          title: "冒充情报人员招摇撞骗",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "3",
          title: "冒充情报人员招摇依法追责(APP)",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "4",
          title: "冒充情报人员招摇撞骗 将依法追责(APP)",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "5",
          title: "冒充情报对冒充者依法追责(APP)",
          frequency: "5456",
          time: "2019-07-24   15:30"
        },
        {
          num: "6",
          title: "冒充情报摇(APP)",
          frequency: "5456",
          time: "2019-07-24   15:30"
        }
      ],
      //分页器
      currentPage4: 1,
      //			搜索输入框start
      restaurants: [],
      // 输入内容
      enterValue: "",
      //时间
      value_date1: "",
      value_date2: ""
    };
  },
  //搜索文本框
  mounted() {
    this.restaurants = this.loadAll();
  },

  methods: {
    //			搜索输入框s
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        {
          value: "三全鲜食（北新泾店）",
          address: "长宁区新渔路144号"
        },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
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
  }

  //		components: {
  //			Header
  //		}
};
</script>

<style lang="scss" scoped>
.mainbody {
  background: #ebeded;
  width: 100%;
  padding: 22px 20px 28px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .title {
    font-size: 1.6rem;
    color: #333333;
    margin-bottom: 30px;
    font-weight: bold;
    &:before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 16px;
      background: #03b5d3;
      vertical-align: middle;
    }
    .newspaper_title {
      padding-left: 10px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .serach_bar {
    width: 100%;
    background: #ffffff;
    padding: 32px 20px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    /* font-size: 0; */

    .two_line {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .line_left {
        display: flex;
        flex-direction: row;
        align-items: center;
        .choose_time {
          display: inline-block;
          color: #666666;
          padding-left: 14px;
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
        .inline-input {
          margin-left: 50px;
        }
      }
    }
    .one_line {
      padding-left: 14px;
      margin-bottom: 10px;
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.4rem;
      color: #00adcc;

      .channelType {
        cursor: pointer;
        margin-bottom: 18px;
        display: inline-block;
        width: 100px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        border-width: 1px;
        border-style: solid;
        border-color: #00adcc;
        border-left: 0;
        &:first-child {
          border-left: 1px solid #00adcc;
        }
        &.current_type {
          background: #03b5d3;
          color: white;
        }
      }
    }
    .el-select {
      width: 280px;
      margin: 0 50px 0 40px;
      vertical-align: middle;
      .el-input {
        .el-select__caret {
          color: #999999;
          font-weight: 700;
        }
      }
    }

    .el-input-group {
      width: 350px;
      vertical-align: middle;
    }
    .el-button--primary {
      float: right;
    }
  }
  .tab_content_item {
    background: #fff;
    padding: 30px 22px 150px 35px;
    border-radius: 10px;
    // margin-bottom: 20px;
    .originalTitle {
      display: flex;
      flex-direction: row;
      align-items: center;
      .title_cont {
        display: inline-block;
        width: 40%;
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
}
</style>