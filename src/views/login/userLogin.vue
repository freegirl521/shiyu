<template>
    <div>
        <div class="user-login">
            <div class="login-top">
                <router-link class="dib" to="/"><img src="../../assets/img/login/logo.png"></router-link><span class="dib">快速登录</span>
            </div>
            <div class="dbox">
                <div class="login-img ">
                    <img src="../../assets/img/login/panda.png">
                </div>
                <el-form :model="ruleForm" class="container" status-icon :rules="rules2" ref="ruleForm">
                    <div class="login-title box">
                        <ul class="tabs">
                            <li @click="changes(0)" class="poi dib" :class="{active:loginType == 0}">快捷登录</li>
                            <li @click="changes(1)" class="poi dib" :class="{active:loginType == 1}">手机号登录</li>
                        </ul>
                    </div>
                    <div class="quick-login" v-show="loginType==0">
                        <el-form-item prop="userPhone">
                            <el-input placeholder="请输入11位手机号码" v-model="ruleForm.userPhone" type="text" @blur="changebac">></el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-input placeholder="请输入短信验证码" v-model="ruleForm.code" type="text" @input="changebac">></el-input>
                            <div class="getcode"><button type="button" :disabled='isDisabled' @click.stop="sendcode" class="getcode">{{buttonText}} </button></div>
                        </el-form-item>
                    </div>
                    <div class="phone-login" v-show="loginType==1">
                        <el-form-item prop="userPhone">
                            <el-input placeholder="请输入11位手机验证码" v-model="ruleForm.userPhone" type="text" @blur="changebac">></el-input>
                        </el-form-item>
                        <el-form-item prop="userPassword">
                            <el-input placeholder="请输入用户登录密码" v-model="ruleForm.userPassword" type="password" @input="changebac">></el-input>
                        </el-form-item>
                    </div>
                    <div class="link"><span class="dib"><router-link to="/userReg">免费注册</router-link></span><span class="dib"><router-link to="/findPwd" class="forget-pwd">忘记密码</router-link></span></div>
                    <el-form-item>
                        <el-button type="primary" :loading="loading" @click="submitForm" class="agree" :disabled="isDisable" :class="{active:!isDisable}">立即登录</el-button>
                    </el-form-item>
                    <div class="three-title">第三方登录</div>
                    <div class="login-three">
                        <router-link class="dib weixin" to="/"><img src="../../assets/img/login/weixin@2x.png"></router-link>
                        <router-link class="dib" to="/"><img src="../../assets/img/login/qq@2x.png"></router-link>
                    </div>
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
        name: 'userLogin',
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
                console.log(value);
                if (value === '') {
                    callback(new Error('请输入手机验证码'))
                } else {
                    callback()
                }
            }
            // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
                console.log(value)
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
                loginType: 0,
                ruleForm: {
                    userPhone: "",
                    userpassWord: "",
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
                        trigger: 'blur',
                        message: "您输入的短信验证码不正确，请查证后重试"
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
            changes(num) {
                this.loginType = num;
            },
            // <!--发送验证码-->
            sendcode() {
                let tel = this.ruleForm.userPhone
                if (this.checkMobile(tel)) {
                    console.log(tel)
                    let time = 60
                    this.buttonText = '已发送'
                    this.isDisabled = true
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
                } else {
                    this.$message.error('请输入正确的手机号码');
                }
            },
            // <!--提交登录-->
            submitForm() {
                var json = {}
                if (this.loginType == 0) {
                    if (!this.checkMobile(this.ruleForm.userPhone)) {
                        this.$message.error('请输入正确的手机号码');
                        return false;
                    }
                    if (this.ruleForm.code === "") {
                        this.$message.error("请输入正确的验证码")
                        return false;
                    }
                    // json = {
                    //     userphone: this.ruleForm.userPhone,
                    //     code: this.ruleForm.code,
                    //     loginType: this.loginType
                    // }

                    //后台请求url
                     json = this.$qs.stringify({
                        userphone: this.ruleForm.userPhone,
                        code: this.ruleForm.code,
                        loginType: this.loginType
                    })
                    console.log(json);
                } else {
                    if (!this.checkMobile(this.ruleForm.userPhone)) {
                        this.$message.error('请输入正确的手机号码');
                        return false;
                    }
                    if (!this.checkPassword(this.ruleForm.userPassword)) {
                        this.$message.error("请输入正确的用户名密码")
                        return false;
                    }
                    // json = {
                    //     userphone: this.ruleForm.userPhone,
                    //     userpwd: this.ruleForm.userPassword,
                    //     loginType: this.loginType
                    // }
                    //后台发送url请求
                     json = this.$qs.stringify({
                        userphone: this.ruleForm.userPhone,
                        userpwd: this.ruleForm.userPassword,
                        loginType: this.loginType
                    })
                    console.log(json);
                }
                this.$http.post('/user/login', json).then((res) => {
                    console.log(res)
                    //接收token
                    // localStorage.setItem("名称","value")
                    //如果登录成功，则返回上次浏览的页面
                    // if(res.data.code == 200){
                    //     this.$router.go(-1);
                    // }
                })
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
                if (this.loginType == 0) {
                    if (this.ruleForm.userPhone && this.ruleForm.code) {
                        this.isDisable = false;
                    }
                }
                if (this.loginType == 1) {
                    if (this.ruleForm.userPhone && this.ruleForm.userPassword) {
                        this.isDisable = false;
                    }
                }
            },
            // <!--进入注册页-->
            gotoReg() {
                this.$router.push({
                    path: "/userReg"
                });
            },
            //发送验证码接口
            sendFun() {
                var json = {}
                // var json = {
                //     userphone: this.ruleForm.userPhone,
                // }
                json = this.$qs.stringify({
                   userphone: this.ruleForm.userPhone,
                });
                this.$http.post('/user/code', json).then((res) => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .user-login {
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }
    .top-box {
        border-bottom: 1px solid rgba(222, 28, 49, 1);
        width: 100%
    }
    .line {
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background: #DE1C31;
        top: 70px;
    }
    .container {
        width: 350px;
        padding: 20px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-left: 30px;
    }
    .login-top span {
        font-size: 18px;
        border-left: 1px dotted black;
        padding: 0 20px;
        color: #6b6b6b;
        line-height: 20px;
    }
    .login-top {
        margin-bottom: 50px;
    }
    .login-top img {
        padding-right: 20px;
    }
    .login-img {
        width: 490px;
    }
    .container {
        flex: 1;
        margin-left: 30px;
    }
    .tabs {
        text-align: center;
        margin-bottom: 20px;
    }
    .tabs li {
        padding: 0 20px;
        border-bottom: 2px solid #999999;
        padding-bottom: 5px;
        color: #099999;
        font-size: 18px;
    }
    .tabs li.active {
        color: #de1c31;
        border-color: #de1c31;
    }
    .reg-bottom {
        position: absolute;
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
    .phone-login .el-form-item:nth-child(2) .el-input::after {
        background-image: url("../../assets/img/login/pwd.png")
    }
    .link {
        display: flex;
        margin-bottom: 20px;
    }
    .link span:last-child {
        flex: 1;
        text-align: right;
    }
    .link span:first-child {
        flex: 1;
        text-align: left;
    }
    .agree {
        width: 100%;
        background-color: #CCCCCC;
        border-color: none;
        margin-top: 20px;
    }
    .login-three img {
        width: 46px;
        height: 46px;
    }
    .weixin {
        margin-left: 120px;
        margin-right: 30px;
    }
    .three-title {
        font-size: 13px;
        text-align: center;
        padding: 10px 0;
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
    .container .el-button.active {
        background: #DE1C31 !important;
    }
</style>
<style>
    .user-login .container .el-button {
        background: #CCCCCC !important;
        color: #ffffff !important;
    }
</style>