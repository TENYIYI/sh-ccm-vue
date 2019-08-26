<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
      label-position="left">

      <div class="title-container">
        <h3 class="title">传播与版权监测系统</h3>
      </div>

      <div class="frombox">
        <div class="row" prop="username">
          <span class="svg-container">
            <i class="user" />
          </span>
          <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text"
            tabindex="1" auto-complete="on" />
        </div>
        <div class="row" prop="password">
          <span class="svg-container">
            <i class="password" />
          </span>
          <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
            placeholder="请输入密码" name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" />
          <!-- <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span> -->
        </div>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleReg">注册</el-button>
        
      </div>
    </el-form>
  </div>
</template>

<script>
  import {
    validUsername
  } from '@/utils/validate'

  export default {
    name: 'registered',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: '',
          vercode:'',
          yanzhengma:'../../assets/images/yanzhengma.png'
        },
        loginRules: {
          username: [{
            required: true,
            trigger: 'blur',
            validator: validateUsername
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleReg() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              this.$router.push({
                path: this.redirect || '/'
              })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:url(../../assets/images/ccm_loginbg.png);
  $light_gray:#fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: #1a1a1a;
    }
  }



  /* reset element-ui css */
  .login-container {

    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #1a1a1a;
        height: 47px;
        caret-color: $cursor;
        font-size:1.6rem;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
        &[name="vercode"]{width:auto}
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  $bg:url(../../assets/images/ccm_loginbg.png);
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background: $bg;
    background-size: cover;
    overflow: hidden;

    .frombox {
      background: white;
      border-radius: 16px;
      padding: 45px 60px
    }

    .login-form {
      position: relative;
      width: 35%;
      min-width:590px;
      max-width: 100%;
      padding: 100px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 3px 5px 3px 10px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      
      i{width:24px;height:24px;background-position: center center;display:inline-block;background-repeat: no-repeat;top:4px;position:relative;
      }
      .user{background-image:url(../../assets/images/ico_ren.png);}
      .password{background-image:url(../../assets/images/ico_suo.png);}
      .cercod{background-image:url(../../assets/images/ico_dun.png);}


    }

    .title-container {
      position: relative;

      .title {
        font-size: 3.6rem;
        color: $light_gray;
        margin: 0px auto 5.3rem auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }

  /* input 样式 */
  .el-form-item__content {}

  .row {
    border-bottom: 1px solid #dbdbdb;
    background: white;
    border-radius: 0px;
    color: #1a1a1a;
    line-height: 60px;
    margin-bottom:20px;
    .yanzhengma{width:140px;height:47px;position:absolute;right:0;top:6px}
  }
  .row.yanzheng{padding-right:14px;margin-bottom:50px;position:relative}
  
  .el-button--primary{width:90%!important;height:50px;background:#00adcc;font-size:1.8rem;border-radius: 50px;margin:0 5%;margin-bottom:15px!important}

  .bottombar{font-size:1.4rem;line-height:1em;color:#666;text-align:center;margin:0;
    a{color:#00adcc;text-decoration:underline;}
  }


</style>
