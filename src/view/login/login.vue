<template>
     <div class="login">
         <!-- logo -->
         <!-- <img class="logo-img" src="../../assets/logo.png"> -->
         <el-form   class="login-form-inline" label-width="80px">
              <el-row class="title">
                  <el-col :span="24"><div class="grid-content bg-purple-dark">后台管理系统</div></el-col>
             </el-row>
              <el-form-item label="账号" :inline="true">
                <el-input  placeholder="请输入账号" class="input-item" v-model="name"  required=""></el-input>
              </el-form-item>
              <el-form-item label="密码" :inline="true">
                <el-input  placeholder="请输入密码" class="input-item" v-model="password" required=""></el-input>
              </el-form-item>
              <el-form-item label="验证码" :inline="true">
                <el-input  placeholder="请输入验证码" class="input-item"></el-input>
              </el-form-item>
              <el-button type="primary" class="btn-login">登录</el-button>
         </el-form>
     </div>
</template>
<script>
export default {
    data(){
         
        return {
                        
        }
    }
  }
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
  .login-form-inline{
    
    padding-bottom:0;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color:#fff;
    margin-bottom:10px;
        .title{
            text-align: center;
            height:60px;
            line-height: 60px;
            color:#fff;
            background-color:#409eff;

        }
        .btn-login{
            width:50%;
        }
        .input-item{
            width:400px;
    }
  }
  
}
</style>

