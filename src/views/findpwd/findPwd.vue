<template>
    <div>
        <div class="find-pwd">
            <div class="find-top">
                <router-link class="dib" to="/"><img src="../../assets/img/login/logo.png"></router-link><span class="dib">找回密码</span>
            </div>
            <div class="road">
                <el-steps :active="step" align-center>
                    <el-step :class="{one:step>1}" title="确认账号"></el-step>
                    <el-step :class="{sec:step==3}" title="安全验证"></el-step>
                    <el-step title="重置密码"></el-step>
                    <el-step title="完成修改"></el-step>
                </el-steps>
            </div>
            <div class="container container1">
                <el-form class="first-step dib" :model="ruleForm" v-show="step == 0" status-icon :rules="rules2" ref="ruleForm">
                    <h3>通过手机号找回密码</h3>
                    <h4>手机号：</h4>
                    <el-form-item prop="userPhone">
                        <el-input placeholder="请输入您的手机号码" v-model="ruleForm.userPhone" type="text"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="to-login" @click="goNext(1)">下一步</el-button>
                    </el-form-item>
                </el-form>
                <!--  第二步-->
                <el-form class=" dib second-step" :model="ruleForm" v-show="step == 1">
                    <h3>手机短信验证</h3>
                    <h4>验证码：</h4>
                    <el-form-item prop="code">
                        <el-input placeholder="请输入验证码" v-model="ruleForm.code" type="text"></el-input>
                        <el-button class="send upload-btn" @click="sendcode" :disabled='isDisabled'>{{buttonText}}</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="loading" class="to-login" @click="goWhere(2)">下一步</el-button>
                    </el-form-item>
                </el-form>
                <!-- 第三步 -->
                <el-form class=" dib third-step" :model="ruleForm" v-show="step == 2">
                    <h3>设置新密码</h3>
                    <h4>新密码：</h4>
                    <el-form-item prop="newpassword">
                        <el-input placeholder="请输入新密码" v-model="ruleForm.newpassword" type="password"></el-input>
                    </el-form-item>
                    <h4>确认新密码：</h4>
                    <el-form-item prop="surepassword">
                        <el-input placeholder="请再次输入新密码" v-model="ruleForm.surepassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="loading" class="to-login" @click="goHere(3)">确认提交</el-button>
                    </el-form-item>
                </el-form>
                <!-- 第四步 -->
                <div class=" dib four-step" v-show="step == 3">
                    <img src="../../assets/img/login/success.png">
                </div>
            </div>
        </div>
        <div class="bottom">
            <!-- <bottom></bottom> -->
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import bottom from '../../components/bottom/bottom.vue'
    export default {
        name: 'findPwd',
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
            // 验证新密码
            let validatePass = (rule, value, callback) => {
                console.log(value)
                if (value === "") {
                    callback(new Error("新密码不能为空"))
                } else if (!this.checkPassword(value)) {
                    callback(new Error("请输入新密码，至少8-16位字符，包含英文字母、数字和“_”的2种"))
                } else {
                    callback()
                }
            }
            // <!--二次验证密码-->
            let validatePass2 = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm.shopPassword) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            }
            return {
                isDisabled: false, // 是否禁止点击发送验证码按钮
                step: 0,
                loading: false,
                ruleForm: {
                    userPhone: "",
                    userCode: "",
                },
                rules2: {
                    userPhone: [{
                        validator: checkTel,
                        trigger: 'blur'
                    }],
                    code: [{
                        validator: checkSmscode,
                        trigger: 'blur',
                    }],
                    newpassword: [{
                        validator: validatePass2,
                        trigger: 'blur',
                    }],
                    surepassword: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }]
                },
                buttonText: '发送',
                isDisabled: false, // 是否禁止点击发送验证码按钮
                flag: true
            }
        },
        components: {
            bottom
        },
        methods: {
            goNext(num) {
                if (!this.checkMobile(this.ruleForm.userPhone)) {
                    this.$message.error('请输入正确的11位手机号码')
                    return false;
                }
                this.step = num;
            },
            goWhere(num) {
                if (this.ruleForm.code === "") {
                    this.$message.error("请输入正确的验证码")
                    return false;
                }
                this.step = num;
                this.sendPhone();

                console.log(this.ruleForm.code);
            },
            goHere(num) {
                if (!this.checkPassword(this.ruleForm.newpassword)) {
                    this.$message.error("请输入正确的用户名密码")
                    return false;
                }
                if (this.ruleForm.surepassword !== this.ruleForm.newpassword) {
                    this.$message.error("两次输入密码不一致")
                    return false;
                }
                this.step = num;
                this.ajaxFun();
            },
            // 发送验证码
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
            // 验证手机号
            checkMobile(str) {
                let re = /^1\d{10}$/
                if (re.test(str)) {
                    return true;
                } else {
                    return false;
                }
            },
            //验证新密码
            checkPassword(str) {
                let pass = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/
                if (pass.test(str)) {
                    return true;
                } else {
                    return false;
                }
            },
            sendFun() {
                 var json = {
                   userphone: this.ruleForm.userPhone,
                }
                //以url请求方式访问
                // let json = this.$qs.stringify({
                //     userPhone: this.ruleForm.userPhone,
                // });
                console.log(json);
                this.$http.post('/code2', json).then((res) => {
                    console.log(res)
                })
            },
            //发送手机号和验证码接口后台请求方法
            sendPhone(){
                // let json = this.$qs.stringify({
                //     userPhone:this.ruleForm.userPhone,
                //     code:this.ruleForm.code,
                // })
                var json ={
                    userphone:this.ruleForm.userPhone,
                    code:this.ruleForm.code,
                }
                console.log(json);
                this.$http.post("/changepwd", json).then((res) => {
                     localStorage.setItem("sy-userid",res.data.userCountById)
                    console.log(res);
                })
            },

            //后台请求
            ajaxFun() {
                var json ={
                    // userphone:this.ruleForm.userPhone,
                    // userpwd:this.ruleForm.newpassword,
                    userpwd: this.ruleForm.newpassword,
                    userid:localStorage.getItem("sy-userid")
                }
                //以url形式访问
                // let json = this.$qs.stringify({
                //     userpwd: this.ruleForm.newpassword,
                // });
                console.log(json);
                this.$http.post("/updateUserPwd", json).then((res) => {
                    console.log(res);
                })
            }
        },
    }
</script>

<style scoped>
    .find-pwd {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .line {
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background: #DE1C31;
        top: 70px;
    }
    .find-top {
        margin-bottom: 50px;
        width: 900px;
    }
    .find-top img {
        padding-right: 20px;
    }
    .find-pwd span {
        font-size: 18px;
        border-left: 1px dotted black;
        padding: 0 20px;
        color: #6b6b6b;
        line-height: 20px;
    }
    .container {
        position: absolute;
        left: 50%;
        min-width: 500px;
        transform: translateX(-50%);
        margin-top: 50px;
    }
    .container .el-input {
        width: 350px;
        border-color: #DE1C31;
    }
    .container h3 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 40px;
    }
    .container h4 {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }
    .container .el-button {
        background: #DE1C31;
        border: none;
    }
    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .container .send {
        color: #FFFFFF;
        margin-left: 20px;
        background: #DE1C31;
    }
    .four-step img {
        width: 220px;
    }
</style>
<style>
    .road .el-step__head.is-finish {
        /* background:#DE1C31; */
        color: #FFFFFF;
        border: 0;
    }
    .find-pwd .el-step__icon {
        background: #DE1C31;
        width: 40px;
        height: 40px;
    }
    .find-pwd .el-step.is-horizontal .el-step__line {
        top: 21px;
        background: rgba(222, 28, 49, 0.2)
    }
    .find-pwd .el-step__head.is-finish .el-step__line {
        background: linear-gradient(90deg, rgba(222, 28, 49, 1) 0%, rgba(238, 216, 218, 1) 100%);
    }
    .road .el-step__head.is-process {
        color: #FFFFFF;
        border: 0;
    }
    .road .el-step__head.is-wait {
        color: #FFFFFF;
        border: 0;
    }
    .find-pwd .el-step__head.is-wait .el-step__icon {
        background: rgba(222, 28, 49, 0.6);
        z-index: 10;
    }
    .find-pwd .el-step__title.is-finish {
        color: #DE1C31;
        font-weight: 700;
    }
    .find-pwd .el-step.is-center .el-step__line {
        left: 50%;
        right: -42%;
    }
    .one.el-step:first-child .el-step__head.is-finish .el-step__line {
        /* left: -40%; */
        height: 4px;
    }
    .find-pwd .sec .el-step__head.is-finish .el-step__line {
        /* left: -40%; */
        height: 4px;
    }
    .container1 .second-step .el-input__inner {
        border: 2px solid #DE1C31;
    }
</style>