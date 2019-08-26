<template>
  <div class="home">
    <!-- 文章传播动态 Start -->
    <div class="home_mainbox">
      <h2 class="home_title">
        文章传播动态
        <router-link to>查看更多 <i>>></i></router-link>
      </h2>

      <el-table :data="articleDynamic" style="width:100%">
          <el-table-column  width="15px"></el-table-column>
          <el-table-column prop="title" label="文章标题" >
          </el-table-column>
        <el-table-column prop="date" label="" width="200">
            <span class="tabico i_bao">报</span>
            <span class="tabico i_wang">网</span>
            <span class="tabico i_app">APP</span>
            <span class="tabico i_wei">微</span>
        </el-table-column>
        <el-table-column prop="num" label="传播量" width="100" align="right">
        </el-table-column>
        <el-table-column  width="70"></el-table-column>
        <el-table-column prop="time" label="发布时间" width="180" align="left">
        </el-table-column>
        <el-table-column prop="media" label="所属媒体" width="200">
        </el-table-column>
        
      </el-table>
      <p class="home_import">
        备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
      </p>
    </div>
    <!-- 文章传播动态  End-->
    <div class="home_boxcell">
      <!-- 传播趋势 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            传播趋势
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
              </el-table>
            </template></div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- 传播趋势  End-->
      <!-- 传播统计 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            传播统计
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
              </el-table>
            </template></div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- 传播统计  End-->
    </div>

    <div class="home_boxcell">
      <!-- 媒体传播数量 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            媒体传播数量
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="mediaCommunication" style="width: 100%">
                <el-table-column label="排名" width="130px" align="center">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px" :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="mediaName" label="媒体名称">
                </el-table-column>
                <el-table-column prop="num" width="150px" label="月度传播量" align="right">
                </el-table-column>
              </el-table>
            </template>
          </div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- 媒体传播数量  End-->
      <!-- 报纸传播量 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            报纸传播量
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="newspaperDissemination" style="width: 100%">
                <el-table-column label="排名" width="130px" align="center">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px" :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="title" label="原创标题">
                </el-table-column>
                <el-table-column prop="num" label="传播次数" width="150px" align="right">
                </el-table-column>
              </el-table>
            </template></div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- 报纸传播量  End-->
    </div>

    <div class="home_boxcell">
      <!-- App传播量 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            App传播量
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="appDissemination" style="width: 100%">
                <el-table-column label="排名" width="130px" align="center"> 
                  <template slot-scope="scope">
                    <span style="margin-left: 10px" :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="title" label="原创标题">
                </el-table-column>
                <el-table-column prop="num" label="传播次数" width="150px" align="right">
                </el-table-column>
              </el-table>
            </template></div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- App传播量  End-->
      <!-- 微信阅读量 Start -->
      <div class="home_row">
        <div class="ccont">
          <h2 class="home_title">
            微信阅读量
            <router-link to>查看更多 <i>>></i></router-link>
          </h2>
          <div class="contentbox">
            <template>
              <el-table :data="weixinDissemination" style="width: 100%">
                <el-table-column label="排名" align="center">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px" :class="{cell_top:scope.$index+1<=3}">{{ scope.$index+1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="account" label="公众号">
                </el-table-column>
                <el-table-column prop="readNum" label="阅读数(万)">
                </el-table-column>
                <el-table-column prop="readAverage" label="平均阅读数">
                </el-table-column>
                <el-table-column prop="articleNum" label="文章数">
                </el-table-column>
                <el-table-column prop="likeNum" label="点赞数">
                </el-table-column>
              </el-table>
            </template>
          </div>
          <p class="home_import">
            备注：展示近30天报纸、网站、微信、APP原创作品的传播动态。
          </p>
        </div>
      </div>
      <!-- 微信阅读量  End-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "homepage",

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        //媒体传播数量
        mediaCommunication: [{
            mediaName: '媒体传播数量',
            num: '11111'
          }, {
            mediaName: '媒体传播数量',
            num: '11111'
          },
          {
            mediaName: '媒体传播数量',
            num: '11111'
          },
          {
            mediaName: '媒体传播数量',
            num: '11111'
          },
          {
            mediaName: '媒体传播数量',
            num: '11111'
          },
          {
            mediaName: '媒体传播数量',
            num: '11111'
          }
        ],

        //报纸传播量
        newspaperDissemination: [{
            title: '报纸传播量',
            num: '11111'
          }, {
            title: '报纸传播量',
            num: '11111'
          },
          {
            title: '报纸传播量',
            num: '11111'
          },
          {
            title: '报纸传播量',
            num: '11111'
          },
          {
            title: '报纸传播量',
            num: '11111'
          },
          {
            title: '报纸传播量',
            num: '11111'
          }
        ],
        //App传播量
        appDissemination: [{
            title: 'App传播量',
            num: '11111'
          }, {
            title: 'App传播量',
            num: '11111'
          },
          {
            title: 'App传播量',
            num: '11111'
          },
          {
            title: 'App传播量',
            num: '11111'
          },
          {
            title: 'App传播量',
            num: '11111'
          },
          {
            title: 'App传播量',
            num: '11111'
          }
        ],
        //微信阅读量
        weixinDissemination: [{
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          },
          {
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          },
          {
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          },
          {
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          }, {
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          },
          {
            account: '微信阅读量',
            readNum: '11111',
            readAverage: 111,
            articleNum: 1111,
            likeNum: 122
          }],
          //文章传播动态
          articleDynamic: [{
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },
          {
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },
          {
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },{
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },{
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },{
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          },{
            title: '文章传播动态',
            tag: {bao:true,wang:true,app:false,weixin:false},
            num: 111,
            time: "2019 10.0",
            media:"人民日报"
          }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home_import {
    font-size: 1.4rem;
    padding-left: 23px;
    color: #999;
    background: url(../assets/images/tabs_icon.jpg) no-repeat left center;
  }

  .cell_num {
    text-align: right
  }

  .home {
    padding-top: 20px
  }

  .home_mainbox {
    margin: 0 20px 20px;
    background: white;
    border-radius: 10px;
    padding: 30px 20px
  }

  .home_boxcell {
    width: calc(100% - 20px);
    left: 10px;
    position: relative;
    margin-bottom: 20px;
    &::last-child{margin-bottom:30px}
    &::after {
      content: "";
      clear: both;
      display: block
    }

    .home_row {
      width: 50%;
      padding: 0 10px;
      box-size: border-box;
      float: left
    }

    .contentbox {
      min-height: 27.2rem
    }

    .ccont {
      background: white;
      border-radius: 10px;
      padding: 30px 20px;

    }
  }

  .el-table {
    margin-bottom: 23px;
  }

  .home_title {
    font-size: 1.6rem;
    line-height: 1em;
    padding-left: 14px;
    font-weight: normal;
    margin: 0;
    position: relative;
    margin-bottom: 30px;

    &::after {
      content: "";
      width: 4px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      display: block;
      background: #03b5d3
    }

    a {
      color: #999;
      float: right;

      i {
        position: relative;
        top: -1px
      }
    }
  }
</style>
