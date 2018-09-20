<template>
    <div class="app-wrapper"> 
       <el-container>
        <el-aside width="200px" :style="{'background-color':color1}"  v-show="aside">   
            <el-menu default-active="1-4-1"   class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header  :style="{'background-color':color1}">
                <div class="header-right">
                    <!-- <span class="switch-theme item"  @click="dialogVisible = true">切换主题</span> -->
                    
                    <div class="" style="float:left">
                        <el-color-picker v-model="color1"></el-color-picker>
                    </div>
                    <div style="float:left">
                        <span class="item">你好，admin</span>
                        <el-dropdown>
                            <span class="item el-icon-setting " style="color:#fff;">设置</span>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>账户信息</el-dropdown-item>
                            <el-dropdown-item>注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <!-- 主题弹窗 -->
                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    >
                    <div>切换主题颜色</div>
                    <div>主题色</div>
                    <el-color-picker v-model="themecolor"></el-color-picker>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="SwithTheme">切换</el-button>
                    </span>
                    </el-dialog>
            </el-header>
            <el-main>
              
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<style lang="scss">
.el-color-picker {
  margin-top: 12px;
}
</style>

<script>
export default {
  data() {
    return {
      themecolor: "#147CE4", //默认主题
      color1: "#409EFF",
      dialogVisible: false, //主题弹窗
      isCollapse: false, //侧边栏收缩与展开
      aside:true,//是否显示侧边栏
    };
  },
  methods: {
    SwithTheme() {
      this.dialogVisible = false;
      this.themecolor = this.themecolor;
    },
    //展开侧边栏状态
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    //关闭侧边栏状态
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.el-header {
  background-color: #3c88d6;
  color: #fff;
  line-height: 60px;
}
.app-wrapper {
  height: 100%;
  .header-right {
    float: right;
    .item {
      padding-left: 30px;
      cursor: pointer;
    }
    .item:nth-child(2) {
      cursor: default;
    }
  }
  .el-container {
    height: 100%;
    .el-aside {
      height: 100%;
      .el-menu-vertical-demo {
        height: 100%;
      }
    }
  }
  .el-dialog__wrapper {
    text-align: center;
  }
}
</style>

