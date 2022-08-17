<template>
    <el-row>
        <el-col :span="24">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
    </el-row>
    <!-- <el-breadcrumb separator="/">
       <el-breadcrumb-item :to="{ path: '/' }">首页 /</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div style="text-align:left;">
     <p>欢迎!</p>
     <p>亲爱的管理员{{name}}</p>
    </div>
     <el-divider></el-divider>
     <p>请设置一个关于本校的问题</p>
     <el-input v-model="input" placeholder="请输入" style="width:300px;" ></el-input>
     <el-row>
        <el-col :span="24">
           <el-button type="primary" style="margin-top:20px;">提交</el-button>
        </el-col>
     </el-row> -->
</template>
<script>

export default {
    setup() {
        
    },
    data(){
        return{
            name:"xx"
        }
    }
}
</script>
<style >

</style>
