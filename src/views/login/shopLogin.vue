<template>
    <div class="shop-box">
        <div class=shop-login>
            <el-form :model="ruleForm" class="container" status-icon :rules="rules2" ref="ruleForm">
                <div class="shop-title box">
                    <img src="../../assets/img/login/logo.png" class="dib">
                </div>
                <el-form-item prop="shopPhone">
                    <el-input placeholder="请输入11位手机号码" v-model="ruleForm.shopPhone" type="text" @blur="changebac"></el-input>
                </el-form-item>
                <el-form-item prop="shopPassword">
                    <el-input placeholder="请输入注册密码" v-model="ruleForm.shopPassword" type="password" @input="changebac"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="agree" @click="submitForm" :disabled="isDisable" :class="{active:!isDisable}">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="bottom">
            <p>©2003-2019 dianping.com, All Rights Reserved. 本站发布的所有内容，未经许可，不得转载，详见《知识产权声明》《用户使用协议》</p>
            <p>增值电信业务经营许可证：沪B2-20040012|互联网药品信息服务资格：（沪）-经营性-2017-0017</p>
            <p>网络文化经营许可证：沪网文【2017】|2375-139号|用户举报热线：10100011</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shopLogin',
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
                loading: false,
                isDisable: true,
                ruleForm: {
                    shopPhone: "",
                    shopPassword: "",
                },
                rules2: {
                    shopPassword: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    shopPhone: [{
                        validator: checkTel,
                        trigger: 'blur'
                    }],
                }
            }
        },
        methods: {
            submitForm() {
                if (!this.checkMobile(this.ruleForm.shopPhone)) {
                    this.$message.error('请输入正确的手机号码');
                    return false;
                }
                if (!this.checkPassword(this.ruleForm.shopPassword)) {
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
                if (this.ruleForm.shopPhone && this.ruleForm.shopPassword) {
                    this.isDisable = false;
                    console.log(this.ruleForm)
                }
            },
            //  登录获取后台请求
            ajaxFun() {
                var json = {
                    shopphone: this.ruleForm.shopPhone,
                    shoppwd: this.ruleForm.shopPassword,
                }
                // let json = this.$qs.stringify({
                //    shopphone: this.ruleForm.shopPhone,
                //     shoppwd: this.ruleForm.shopPassword,
                // });
                console.log(json);
                this.$http.post('/shop/login', json).then((res) => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .shop-box {
        display: flex;
        width: 100%;
        height: 100%;
        background: url("../../assets/img/login/background.jpg") no-repeat;
        position: absolute;
        background-size: cover;
        justify-content: center;
    }
    .shop-login {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%)
    }
    .shop-title {
        margin-bottom: 20px;
        text-align: center
    }
    .shop-title img {
        width: 134px;
        height: 56px;
    }
    .container {
        width: 350px;
        padding: 20px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-left: 30px;
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
    .container .el-form-item:nth-child(3) .el-input::after {
        background-image: url("../../assets/img/login/pwd.png")
    }
    .agree {
        width: 100%;
        background-color: #CCCCCC;
        border-color: none;
        margin-top: 20px;
    }
    .bottom {
        padding: 30px 0;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .bottom p {
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 20px;
    }
    .container .el-button.active {
        background: #DE1C31 !important;
    }
</style>
<style>
    .shop-login .container .el-button {
        background: #CCCCCC !important;
        color: #ffffff !important;
    }
</style>