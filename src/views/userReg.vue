<template>
<div class="user-reg">
<div class="reg-img">
    <img src="../assets/img/login/pandar-reg.png">
</div>
<el-form :model="userForm" class = "container" >
        <el-form-item prop="userPhone">
            <el-input placeholder="请输入11位手机号码" v-model="userForm.userPhone" type="text"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input placeholder="请输入注册密码" v-model="userForm.passWord" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="userCode">
            <el-input placeholder="请输入手机验证码" v-model="userForm.userCode" type="text"></el-input>
        </el-form-item>
        <el-radio v-model="radio"></el-radio><span>我已阅读并同意《用户服务协议》《会员服务规则》《风险揭示书》</span>
         <el-form-item>
            <el-button type="primary" :loading="loading" @click="submitForm">同意协议并注册</el-button>
        </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  name: 'userReg',
  data() { 
    return {
        loading:false,
                userForm:{
                    userPhone:"",
                    passWord:"",
                    userCode:""
                },
    }
  },
  methods: {
      submitForm(){

      }
  },
 }
</script>

<style scoped >
.user-reg{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%)
}
.container{
    width:350px;
    padding:20px;
    background:rgba(0,0,0,0.1);
    border-radius:5px;
}
</style>