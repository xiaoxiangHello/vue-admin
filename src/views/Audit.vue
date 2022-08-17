<template>
    <el-breadcrumb separator="/">
       <el-breadcrumb-item :to="{ path: '/audit' }">数据审核 /</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div style="width:800px;text-align: left;border:1px solid gray;padding:10px;">
       <el-col>
        <el-row :span="24">
        <el-image style="width:200px;margin-bottom: 0;" :src="auditImg">
         
       </el-image>
       
        </el-row>
        <el-row :span="24">
            <p>学生证</p>
        </el-row>
        <el-divider></el-divider>
        <el-row :span="24">
          <p>回答的问题答案是:{{answer}}</p>
        </el-row>
       </el-col>
     
    </div> 
      <el-row>
        <el-col :span="24" style="text-align:left;margin-top:20px;">
             <el-button type="success" >审核通过</el-button>
        </el-col>
        <el-col :span="24" style="margin-top:50px;">
             <el-button type="warning">审核失败</el-button>
             <div style="margin-top:20px;width:400px;"><el-input  v-model="input" placeholder="填写失败原因"> </el-input></div>
        </el-col>
       </el-row>
       
</template>
<script>
export default {
   data(){
    return {
        auditImg:"https://wall.lanyintao.com/images/1660546436_7201.jpeg",
        answer:"xxxx",
        input:''
    }
   }
}
</script>
<style scoped>

</style>

