<template>
  <div class="headerBox">
    <div class="header_left">
      <!-- logo -->
      <div class="logo_left">
        <img class="logo" src="@/assets/images/icon_header_logo.png" alt srcset />
        <span class="title">传播与版权监测系统</span>
      </div>
      <!-- tab列表 -->
      <div class="tab_list">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-box"
          mode="horizontal"
          @select="handleSelect"
          background-color="#00adcc"
          text-color="#fff"
          active-text-color="#fff"
          router
        >
          <template v-for="item in tabList">
            <!-- 判断是否包含子菜单 -->
            <template v-if="item.subs">
              <!-- 一级菜单 -->
              <el-submenu :index="item.path" :key="item.path">
                <template slot="title">{{ item.title }}</template>
                <!-- 二级子菜单 -->
                <el-menu-item
                  v-for="subItem in item.subs"
                  :index="subItem.path"
                  :key="subItem.path"
                >{{ subItem.title }}</el-menu-item>
              </el-submenu>
            </template>
            <!-- 判断是否包含子菜单 -->
            <template v-else>
              <!-- 一级菜单 -->
              <el-menu-item :index="item.path" :key="item.path">{{ item.title }}</el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
    <div class="header_right">
      <!-- 字体变化 -->
      <div class="fontSet">
        <div class="item fontset_add" :class="{'active':fontCur==0}" @click="changeFont('add')">
          <img src="../assets/images/icon_header_add.png" alt srcset />
        </div>
        <div
          class="item fontset_reduce"
          :class="{'active':fontCur==1}"
          @click="changeFont('reduce')"
        >
          <img src="../assets/images/icon_header_reduce.png" alt srcset />
        </div>
      </div>
      <!-- 头像 -->
      <div class="header_img_box">
        <img src="../assets/images/icon_header_userImgDefault.png" alt srcset />
      </div>
      <!-- 退出 -->
      <div class="quit">
        <img src="../assets/images/icon_header_quit.png" alt srcset />
        <span>退出</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      fontCur: 1,
      activeIndex: "/", // 默认选中导航
      tabList: [
        {
          title: "首页",
          path: "/",
          check: true
        },
        {
          title: "版权传播",
          path: "/copyrightWorkDiffuse",
          check: false
        },
        {
          title: "查询统计",
          path: "3",
          check: false,
          subs: [
            {
              title: "数据查询统计",
              path: "/queryStatistics",
              check: false
            },
            {
              title: "历史数据查询统计",
              path: "/propagationClosureRecord",
              check: false
            }
          ]
        },
        {
          title: "传播监测",
          path: "/reproductionMonitoring",
          check: false
        },
        {
          title: "临时监测",
          path: "/temporaryMonitoring",
          check: false
        },
        {
          title: "制作报告",
          path: "6",
          check: false,
          subs: [
            {
              title: "版权监测统计",
              path: "/copyrightMonitoringStatistics",
              check: false
            },
            {
              title: "转载监测统计",
              path: "/reproductionDetectionStatistics",
              check: false
            },
            {
              title: "微信报告统计(集团例)",
              path: "6-3",
              check: false
            },
            {
              title: "微信报告统计(媒体例)",
              path: "6-4",
              check: false
            }
          ]
        },
        {
          title: "系统设置",
          path: "7",
          check: false,
          subs: [
            {
              title: "关闭传播记录",
              path: "/propagationClosureRecord",
              check: false
            },
            {
              title: "CKM系统日志",
              path: "/ckmRunningLog",
              check: false
            },
            {
              title: "原创媒体配置",
              path: "/mediaConfiguration",
              check: false
            },
            {
              title: "转载媒体配置",
              path: "/communicationMediaConfiguration",
              check: false
            },
            {
              title: "黑白名单管理",
              path: "/blackAndWhiteListManagement",
              check: false
            },
            {
              title: "用户管理",
              path: "/userManagement",
              check: false
            },
            {
              title: "角色权限管理",
              path: "/rolePermissions",
              check: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 导航选中回调
    handleSelect(index, Path) {
      console.log("1===", index, Path);
    },
    // 点击更改字体大小
    changeFont(type) {
      if (type == "add") {
        this.fontCur = 0;
        document.getElementsByTagName("html")[0].style.fontSize = "12px";
        document.getElementsByTagName("body")[0].style.fontSize = "12px";
        // this.$store.dispatch("baseState/bigFont");
        // console.log(this.$store.state.baseState);
      } else {
        this.fontCur = 1;
        document.getElementsByTagName("html")[0].style.fontSize = "10px";
        document.getElementsByTagName("body")[0].style.fontSize = "10px";
        // this.$store.dispatch("baseState/smallFont");
        // console.log(this.$store.state.baseState);
      }
    }
    // 点击导航栏tab跳转对应页面
    // goTab(path, index) {
    //   this.$router.push({
    //     path: path
    //   });
    //   this.tabList.forEach(item => {
    //     item.check = false;
    //   });
    //   this.tabList[index].check = true;
    // }
  }
};
</script>

<style lang="scss">
.header_content {
  z-index: 999;
  position: relative;
}
.headerBox {
  background: #00adcc;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  .header_left {
    display: flex;
    flex-direction: row;
    align-items: center;
    .logo_left {
      cursor: pointer;
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: white;
      font-size: 22px;
      color: #02a1bd;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      .logo {
        margin-left: 15px;
        margin-right: 5px;
        display: inline-block;
        height: 4.7rem;
        width: 4.5rem;
      }
    }
    .tab_list {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 1rem;
      height: 100%;
      color: white;

      .el-menu-item {
        font-size: 16px;
        height: 62px;
        line-height: 62px;
        border: 0;
        padding: 0 18px;
        &.is-active {
          background: #00a0bd !important;
          // background-color: rgb(0, 138, 163);
          border: 0;
        }
      }
      .el-menu-item:hover {
        background: #00a0bd !important;
      }
      .el-submenu {
        height: 62px;
        line-height: 62px;
        &.is-active {
          border: 0;
          .el-submenu__title {
            background: #00a0bd !important;
          }
        }
        .el-submenu__title:hover {
          background: #00a0bd !important;
        }
        .el-submenu__title {
          height: 62px;
          line-height: 62px;
          border: 0;
          font-size: 16px;
          // background-color: transparent !important;
          .el-submenu__icon-arrow {
            display: none !important;
          }
        }
      }

      .tab_item {
        cursor: pointer;
        // height: 6.2rem;
        // line-height: 6.2rem;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        &.checked {
          background: #00a0bd;
        }
      }
      .tab_item:hover {
        background: #00a0bd;
      }
    }
  }
  .header_right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 2rem;
    .fontSet {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 0.8rem;
      .item {
        width: 32px;
        height: 32px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          display: inline-block;
          height: 15px;
        }
        &.fontset_reduce {
          margin-left: 10px;
        }
        &.active {
          background: #00a0bd;
        }
      }
      .item:hover {
        background: #00a0bd;
      }
    }
    .header_img_box {
      cursor: pointer;
      margin-left: 17px;
      img {
        display: inline-block;
        height: 40px;
        width: 40px;
      }
    }
    .quit {
      cursor: pointer;
      margin-left: 27px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
      font-size: 14px;
      span {
        padding-left: 6px;
      }
    }
  }
}
.el-menu--popup-bottom-start {
  text-align: center;
}
</style>
