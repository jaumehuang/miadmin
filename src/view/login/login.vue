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
                  <el-input  placeholder="请输入账号" class="input-item" ></el-input>
                </el-form-item>
                <el-form-item label="密码" :inline="true">
                  <el-input  placeholder="请输入密码" class="input-item" ></el-input>
                </el-form-item>
                <el-form-item label="验证码" :inline="true">
                  <el-input  placeholder="请输入验证码" class="input-item"></el-input>
                </el-form-item>
            </el-row>
             <el-row  class="warm-title">注：仅供测试使用</el-row>
              <el-button type="primary" class="btn-login">登录</el-button>
         </el-form>
     </div>
</template>
<script>
export default {
  data() {
    return {};
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
    }
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      background-color: #409eff;
    }
    .warm-title{
      
      padding-left:24px;
    }
    .btn-login {
      width: 300px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
    }
  }
}
</style>

