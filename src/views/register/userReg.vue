<template>
    <div>
        <div class="user-reg">
            <div class="reg-top">
                <router-link class="dib" to="/"><img src="../../assets/img/login/logo.png"></router-link><span class="dib">快速注册</span>
            </div>
            <div class="dbox">
                <div class="reg-img ">
                    <img src="../../assets/img/login/pandar-reg.png">
                </div>
                <el-form :model="ruleForm" class="container" status-icon :rules="rules2" ref="ruleForm">
                    <div class="reg-title box">
                        <h3 class="dib">快速注册</h3>
                        <div class=" to-register"><span>已有账号</span>
                            <router-link to="/userLogin" class="goto-link">立即登录</router-link>
                        </div>
                    </div>
                    <el-form-item prop="userPhone">
                        <el-input placeholder="请输入11位手机号码" v-model="ruleForm.userPhone" type="text" @blur="changebac"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input placeholder="请输入手机验证码" v-model="ruleForm.code" type="text" @blur="changebac"></el-input>
                        <div class="getcode"><button type="button" :disabled='isDisabled' @click.stop="sendcode" class="getcode">{{buttonText}} </button></div>
                    </el-form-item>
                    <el-form-item prop="userPassword">
                        <el-input placeholder="请输入注册密码" v-model="ruleForm.userPassword" type="password" @input="changebac"></el-input>
                    </el-form-item>
                    <p><span class="radio dib" @click="changeRadio"><img src="../../assets/img/login/radio.png" v-show="radio" ><img src="../../assets/img/login/radiocheck.png" v-show="!radio"></span>我已阅读并同意《用户服务协议》《会员服务规则》《风险揭示书》</p>
                    <el-form-item>
                        <el-button type="primary" plain :loading="loading" :disabled="isDisable" @click="submitForm" class="agree" :class="{active:!isDisable}" >同意协议并注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="reg-bottom">
             <bottom></bottom>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import bottom from '../../components/bottom/bottom'
    export default {
        name: 'userReg',
        data() {
            // <!--验证手机号是否合法-->
            let checkTel = (rule, value, callback) => {
                console.log(value)
                if (value == '') {
                    callback(new Error('请输入手机号码'))
                } else if (!this.checkMobile(value)) {
                    callback(new Error('手机号码不合法'))
                } else {
                    callback()
                }
            }
            //  <!--验证码是否为空-->
            let checkSmscode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机验证码'))
                } else {
                    callback()
                }
            }
            // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
                // console.log(value)
                if (value === "") {
                    callback(new Error("密码不能为空"))
                } else if (!this.checkPassword(value)) {
                    callback(new Error("至少8-16位字符，包含英文字母、数字和“_”的2种"))
                } else {
                    callback()
                }
            }
            return {
                isDisable: true,
                loading: false,
                radio: 0,
                ruleForm: {
                    userPhone: "",
                    userPassword: "",
                    code: ""
                },
                rules2: {
                    userPassword: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    userPhone: [{
                        validator: checkTel,
                        trigger: 'blur'
                    }],
                    code: [{
                        validator: checkSmscode,
                        trigger: 'blur'
                        
                    }],
                },
                buttonText: '点击获取',
                isDisabled: false, // 是否禁止点击发送验证码按钮
                flag: true
            }
        },
        components: {
            bottom
        },
        methods: {
            changeRadio() {
                this.radio = !this.radio;
            },
            // <!--发送验证码-->
            sendcode() {
                let tel = this.ruleForm.userPhone
                if (this.checkMobile(tel)) {
                    console.log(tel)
                    let time = 60
                    this.buttonText = '已发送'
                    this.isDisabled = true;
                    this.sendFun();
                    if (this.flag) {
                        this.flag = false;
                        let timer = setInterval(() => {
                            time--;
                            this.buttonText = time + ' 秒'
                            if (time === 0) {
                                clearInterval(timer);
                                this.buttonText = '重新获取'
                                this.isDisabled = false
                                this.flag = true;
                            }
                        }, 1000)
                    }
                } 
                // else {
                //     this.$message.error('请输入正确的手机号码');
                // }
            },
            // <!--提交注册-->
            submitForm() {
                if(!this.checkMobile(this.ruleForm.userPhone)){
                     this.$message.error('请输入正确的手机号码');
                    return false;
                }
                if(this.ruleForm.code ===""){
                     this.$message.error("请输入正确的验证码")
                    return false;
                   
                }
                if(!this.checkPassword(this.ruleForm.userPassword)){
                     this.$message.error("请输入正确的用户名密码")
                    return false;
                   
                }
                this.ajaxFun();
             
            },
            // 验证手机号
            checkMobile(str) {
                let re = /^1\d{10}$/
                if (re.test(str)) {
                    return true;
                } else {
                    return false;
                }
            },
            //验证密码
            checkPassword(str) {
                let pass = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/
                if (pass.test(str)) {
                    return true;
                } else {
                    return false;
                }
            },
            changebac() {
                if (this.ruleForm.userPhone && this.ruleForm.code && this.ruleForm.userPassword) {
                    this.isDisable = false;
                console.log(this.ruleForm)

                }
            },
            // <!--进入登录页-->
            gotoLogin() {
                this.$router.push({
                    path: "/userLogin"
                });
            },
            // 后台请求(注册按钮传递)
            ajaxFun(){
                   var json = {
                    userphone: this.ruleForm.userPhone,
                    userpwd: this.ruleForm.userPassword,
                    code:this.ruleForm.code
                }
                // 后台请求url格式
                // let json = this.$qs.stringify({
                //   userPhone: this.ruleForm.userPhone,
                //   userPassword: this.ruleForm.userPassword,
                //   code:this.ruleForm.code  
                // });
                console.log(json);
                this.$http.post('/userRegist', json).then((res) => {
                    // 如果注册成功，跳到登录页
                    // if(res.data.ok === 1){
                        // this.$router.push("/userLogin")
                    // }else{alert(res.data.message)}
                    console.log(res)
                })
            },
            //发送验证码数据请求
              sendFun(){
                   var json = {
                    userphone: this.ruleForm.userPhone,

                    }

                //post传递url格式
                // let json = this.$qs.stringify({
                //    userPhone: this.ruleForm.userPhone,
                // });
                console.log(json);
                this.$http.post('/code',json).then((res) => {
                    console.log(res)
                })
            }

        }
    }
</script>

<style scoped>
    .user-reg {
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }
    .line{
        position: absolute;
        left:0;
        right: 0;
        height: 1px;
        background: #DE1C31;
        top:70px;
    }
    .container {
        width: 350px;
        padding: 20px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-left: 30px;
    }
    .reg-top span {
        font-size: 18px;
        border-left: 1px dotted black;
        padding: 0 20px;
        color: #6b6b6b;
        line-height: 20px;
    }
    .reg-top {
        margin-bottom: 50px;
    }
    .reg-top img {
        padding-right: 20px;
    }
    .reg-title {
        display: flex;
        margin-bottom: 20px;
    }
    .reg-title h3 {
        text-align: left;
        font-size: 16px;
        color: #13180f;
    }
    .to-register {
        flex: 1;
        text-align: right;
    }
    .to-register span {
        font-size: 14px;
        color: #555555;
    }
    .agree {
        width: 100%;
        background-color: #CCCCCC;
        border-color: none;
        margin-top: 20px;
    }
    .container {
        flex: 1;
        margin-left: 30px;
    }
    .reg-bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .container .el-input::after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: url("../../assets/img/login/tel.png") no-repeat;
        position: absolute;
        left: 13px;
        top: 50%;
        transform: translateY(-50%);
        background-size: 100% 100%;
    }
    .container .el-form-item:nth-child(4) .el-input::after {
        background-image: url("../../assets/img/login/pwd.png")
    }
    .radio {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    .goto-link {
        color: #DE1C31;
        padding-left: 5px;
    }
    
    .el-button {
        background: #CCCCCC;
    }
    .container .el-button.active {
        background: #DE1C31 !important;
    }
     .getcode {
        width: 67px;
        height: 14px;
        position: absolute;
        right: 20px;
        top: 5px;
        text-align: center;
        background: none;
        color: #DE1C31;
    }
</style>
<style>
    .container .el-input__inner {
        padding-left: 40px;
    }
    .user-reg .container .el-button {
        background: #CCCCCC !important;
        color: #ffffff !important;
    }
   
</style>
