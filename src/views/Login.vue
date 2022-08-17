<template>
    <div style="width:100%;height:100vh;background-color: #a0cfffbf;">
               <el-card style="margin-top:200px;width:300px;height:300px;border:1px solid #8080805e;margin-left:auto;margin-right:auto;text-align:center;padding:10px;">
                      <el-row>
                        <el-col :span="24">
                           <h2>登录万能墙管理后台</h2>
                        </el-col>
                        <el-col :span="24">
                           <el-input v-model="username" placeholder="用户名" style="margin-top:10px;"></el-input>
                        </el-col>
                        <el-col :span="24" style="margin-top:20px;">
                           <el-input v-model="password" type="password" placeholder="密码"></el-input>
                        </el-col>
                        <el-col :span="24">
                           <el-button type="primary" style="margin-top:60px;" @click="login">登录</el-button>
                        </el-col>
                      </el-row>
               </el-card>
    </div>
</template>
<script>
import {ElMessage} from 'element-plus'
import router from '@/router'
export default {
    components:{
       ElMessage
    },
    methods:{
        login(){
            var url = "/api/adminlogin";
            var user = this.username
            var pass = this.password
            var params = {"username":user, "pass":pass};

            this.axios({
                method:"POST",
                url:url,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                params,
                withCredentials:false,
            }).then((res) => {
                console.log(res)
                if(res.data.code == 0) {
                    console.log(res.data.code)
                    var jwt = res.data.jwt;
                    localStorage.clear();
                    localStorage.setItem('admin_token', jwt);
                    console.log("router push")
                    router.push('/');
                }else{
                    ElMessage({
                        message:'用户名密码错误',
                        type:'error'
                    })
                }
            })
        }
       
    },
    data(){
        return{
            username:"",
            password:""
        }
    }
}
</script>