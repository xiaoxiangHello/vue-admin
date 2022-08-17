<script>
export default {
  methods:{
    check_if_login(){
      var token = localStorage.getItem('admin_token')
      console.log(token)
      if(token !== null || token !== ""){
        this.is_login = true
      }else{
        this.is_login = false;
      }
    },
  },
  data(){
    this.check_if_login()
    console.log('ok')
    return{
       is_login:""
    }
  }
}
</script>

<template>
<el-container style="wdith:100%;min-height: 100vh;">
  <el-header style="text-align:left;font-weight:bold;background-color:#66b1ff;color:#fff;font-size:20px;">万能墙管理后台</el-header>
  <el-container>
    <el-side width="150px">

    </el-side>
  </el-container>

  <!-- <el-container v-if="is_login">
    <el-aside width="150px">
      <router-link to="/" >
        <div :class="{ 'side-active':this.$route.path == '/', 'side-item':this.$route.path !== '/'}">首页</div>
      </router-link>
      <router-link to="/audit" >
      <div :class="{ 'side-active':this.$route.path == '/audit', 'side-item':this.$route.path !== '/audit'}">数据审核</div>
      </router-link>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    
  </el-container>
  <el-container v-else>
       <router-view></router-view>
  </el-container> -->
  <el-footer>
    <span style="color:#fff;font-size:14px;">万能墙@2022 copyright</span>
  </el-footer>
</el-container>
   

</template>

<style scoped>

a{
  text-decoration: none;
}

.side-item{
color:#fff;
height:30px;
line-height:30px;
padding:10px;
border-bottom:1px solid #fff;
}
.side-item:hover{
  color:yellow;
  background-color:gray;
  text-decoration: none;
}
.side-active{
    color:yellow;
  background-color:gray;
  text-decoration:none;
  height:30px;
line-height:30px;
padding:10px;
border-bottom:1px solid #fff;
}
.el-header, .el-footer {
    background-color: #66b1ff;
    color: #333;
    text-align: left;
    line-height: 60px;
    width:100%;
    
  }
  
  .el-aside {
    background-color: #000000ab;
    color: #333;
    
  }
  p{
     line-height:20px;
   }
  .el-main {
    background-color: #E9EEF3;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
header {
  line-height: 1.5;
}


</style>
