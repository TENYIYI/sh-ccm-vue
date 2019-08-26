<template>
	<div class="mainbody_add">
		<!--<Header></Header>-->
		<!--传播关闭记录头部操纵start-->
		<div class="serach_bar">
			<div class="title">
				<span>添加临时监测情况</span>
			</div>
        <!-- 表达提交开始 -->
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 78.4%">
  <el-form-item label="文章标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="文章URL" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <div class="channel_dev">
      <el-form-item label="原创媒体" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="渠道" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="作者" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  </div>
<div class="release_time">
    <el-form-item label="文章发布时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <div class="choose_time">
				<span>传播检测时间段</span>
				<el-date-picker v-model="value_date1" type="date" placeholder="选择日期"></el-date-picker>
				<i class="choose_time_i"></i>
				<el-date-picker v-model="value_date2" type="date" placeholder="选择日期"></el-date-picker>
			</div>
  </el-form-item>
</div>

  <el-form-item label="文章正文" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
<!-- 表达提交结束 -->
		</div>
		<!--传播关闭记录头部操纵end-->
  
	</div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
	.mainbody_add {
		background: #ebeded;
		width: 100%;
		padding: 22px 20px 28px 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		.serach_bar {
			width: 100%;
      background: #ffffff;
      // padding-top: 32px;
			padding: 32px 20px 20px;
			border-radius: 10px;
			box-sizing: border-box;
			margin-bottom: 10px;
			/* font-size: 0; */
			.title {
				font-size: 1.6rem;
				color: #333333;
				margin-bottom: 30px;
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
				}
			}
			.choose_time {
				display: inline-block;
				color: #666666;
        // padding-left: 14px;
        margin-left: 63px;
				span {
					font-size: 1.4rem;
					vertical-align: middle;
				}
				.choose_time_i {
					display: inline-block;
					width: 10px;
					height: 1px;
					background: #b3b3b3;
					vertical-align: middle;
				}
			}
			.el-select {
				width: 230px;
				// margin: 0 50px 0 40px;
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
				float: right;
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
		 .serach_bar .el-button--primary{
			float: none;
			vertical-align: bottom;
			// margin-left: 90px;
		}
		.serach_bar .title span{
			font-weight: bold;
    }
    .el-textarea{
      height: 306px;
      textarea{
        height: 100%;
      }
    }
    .el-form-item{
      margin-bottom: 32px;
    }
	}
	.el-table th>.cell{
		text-align: center;
	}
	.el-table .cell{
		text-align: center;
  }
  .channel_dev .el-form-item {
    display: inline-block;
  }
  .channel_dev .el-input{
    width: 230px;
  }
  .release_time{
    margin-left: -10px;
  }
  .release_time .el-input{
    width: 146px !important;
  }
  .release_time label{
    width: auto !important;
  }
  .release_time .el-col-11{
    width: auto;
  }
  // label字体粗体去掉
  label{
    font-weight: initial;
  }
  .el-form-item__content{
    margin-left: 10px;
  }
  // 去掉必选红点
  .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    content: "";
  }
  .el-form-item__error{
    color: #f21a3d;
    font-size: 1.4rem;
    line-height: 2.43rem
  }
  .el-form-item__content{
    margin-left: 0px;
  }
  .el-form-item__error:before{
        vertical-align: middle;
    // color: #f21a3d;
     content: url(../assets/images/error_tabs.jpg);
   
  }
    
</style>