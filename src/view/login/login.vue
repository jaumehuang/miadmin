<template>
     <div class="login">
         <!-- logo -->
         <!-- <img class="logo-img" src="../../assets/logo.png"> -->
         <el-form   class="login-form-inline" label-width="80px">
            <el-row>
                <el-row class="title">
                    <el-col :span="24"><div class="grid-content bg-purple-dark">后台管理系统</div></el-col>
                </el-row>
                <el-form-item label="账号" :inline="true">
                  <el-input  class="input-item"  v-model="name.value" :placeholder="name.message"   @focus="focus1()"></el-input>
                  <el-col :span="24" v-show="name.error" class="massge">{{name.error}}</el-col>
                </el-form-item>
                <el-form-item label="密码" :inline="true">
                  <el-input  class="input-item"  :placeholder="pwd.message"  v-model="pwd.value"  @focus="focus2()"></el-input>
                  <el-col :span="24" v-show="pwd.error" class="massge">{{pwd.error}}</el-col>
                </el-form-item>
                <el-form-item label="验证码" :inline="true">
                  <el-input  placeholder="请输入验证码" class="input-item"></el-input>
                  <!-- <el-col :span="24" v-show="pwd.error" class="massge">{{pwd.error}}</el-col> -->
                </el-form-item>
            </el-row>
             <el-row  class="warm-title">注：仅供测试使用,输入任何数据可登录</el-row>
              <el-button type="primary" class="btn-login" @click="btnLogin">登录</el-button>
         </el-form>
     </div> 
</template>
<script>
export default {
  data() {
    return {
      name: {
        value: "",
        message: "请输入账号", //提示语
        error: "" //
      },
      pwd: {
        value: "", //输入的值
        message: "请输入密码", //提示语
        error: "" //
      }
    };
  },
  methods: {
    //点击登录
    btnLogin() {
      var name = this.name.value;
      var pwd = this.pwd.value;
      console.log(pwd);
      if (name == "" || pwd == "") {
        if (name == "") {
          this.name.error = "输入框为空";
        }
        if (pwd == "") {
          this.pwd.error = "输入框为空";
        }
        return false;
      }
      this.router.replace();
    },
    //输入框焦点事件
    focus1() {
      this.name.error = false;
    },
    focus2() {
      this.pwd.error = false;
    }
  }
};
</script> 

<style lang="scss">
.login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: url("../../assets/login_bg.jpg") no-repeat top center;
  background-size: cover;
  .logo-img {
    position: absolute;
    left: 0;
    top: 0;
  }
  .login-form-inline {
    height: 340px;
    width: 340px;
    padding-bottom: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    margin-bottom: 10px;
    margin: auto;
    .el-form-item {
      padding-right: 20px;
      margin-top: 20px;
      position: relative;
    }
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      background-color: #409eff;
    }
    .warm-title {
      padding-left: 24px;
    }
    .btn-login {
      width: 300px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
    }
    .massge {
      position: absolute;
      bottom: -29px;
      left: 0;
      color: #ff4040;
      font-size: 12px;
    }
  }
}
</style>

