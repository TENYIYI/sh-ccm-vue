<template>
  <div class="mainbody">
    <div class="serach_bar">
      <div class="title">
        <span class="newspaper_title">版权作品传播</span>
      </div>
      <!-- 第一行 -->
      <div class="one_line">
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
      <!-- 二次搜索结果行 -->
      <div class="two_line">
        <div class="twice_search_title">二次结果搜索：</div>
        <!-- 四种类型循环体 -->
        <div
          class="choose_type"
          v-for="(item, index) in displayTypeData"
          @click="displayType(item.path,index)"
          :key="index"
          :class="{'type_choosed':item.check==true}"
        >{{item.title}}</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayTypeData: [
        {
          title: "版权作品总览",
          path: "/copyrightWorkDiffuse/displayBySummarize",
          check: true
        },
        {
          title: "按媒体显示",
          path: "/copyrightWorkDiffuse/displayByMedia",
          check: false
        },
        {
          title: "按渠道显示",
          path: "/copyrightWorkDiffuse/displayByChannel",
          check: false
        },
        {
          title: "历史数据查询",
          path: "/copyrightWorkDiffuse/displayByHistory",
          check: false
        }
      ],
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
    // 切换显示类型，调转到对应路由
    displayType(path, index) {
      this.displayTypeData.forEach(item => {
        item.check = false;
      });
      this.displayTypeData[index].check = true;
      this.$router.push({ path: path });
    },
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
    .look_more {
      cursor: pointer;
      float: right;
      font-size: 1.4rem;
      color: #999;
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

    .one_line {
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
    .two_line {
      margin-bottom: 10px;
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.4rem;
      .twice_search_title {
        color: #666666;
        padding-left: 14px;
        padding-right: 20px;
      }
      .choose_type {
        cursor: pointer;
        text-align: center;
        color: #00adcc;
        width: 120px;
        height: 36px;
        line-height: 36px;
        &.type_choosed {
          background: #03b5d3;
          color: white;
          border-radius: 20px;
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
    padding: 30px 22px 30px 35px;
    border-radius: 10px;
    margin-bottom: 20px;
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