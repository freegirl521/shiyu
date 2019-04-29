<template>
    <div>
        <div class="shop-reg">
            <div class="shop-top">
                <router-link class="dib" to="/"><img src="../../assets/img/login/logo.png"></router-link><span class="dib">商家注册</span>
            </div>
            <el-steps :active="step" align-center>
                <el-step :class="{one:step>1}" title="注册账号"></el-step>
                <el-step :class="{sec:step==3}" title="认领门店"></el-step>
                <el-step title="提交资质"></el-step>
            </el-steps>
            <div class="container">
                <el-form class="first-step dib" :model="ruleForm" v-show="step == 0" status-icon :rules="rules2" ref="ruleForm">
                    <el-form-item prop="shopPhone">
                        <h4 class="dib" style="text-indent:14px">手机号：</h4>
                        <el-input class="dib" placeholder="请输入您的手机号" v-model="ruleForm.shopPhone" type="text"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <h4 class="dib" style="text-indent:14px">验证码：</h4>
                        <el-input class="dib" placeholder="请输入验证码" v-model="ruleForm.code" type="text" style="width:200px"></el-input>
                        <el-button class="send upload-btn" @click="sendcode" :disabled='isDisabled'>{{buttonText}}</el-button>
                    </el-form-item>
                    <el-form-item prop="shopPassword" class="dib">
                        <h4 class="dib" style="text-indent:28px">密码：</h4>
                        <el-input class="dib" placeholder="请设置您的密码" v-model="ruleForm.shopPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item prop="surePassword" class="dib">
                        <h4 class="dib">确认密码：</h4>
                        <el-input class="dib" placeholder="请再次输入您的密码" v-model="ruleForm.surePassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="loading" class="to-login upload-btn" @click="goNext(1) ">下一步</el-button>
                    </el-form-item>
                </el-form>
                <!--  第二步-->
                <div class="second-step" v-show="step == 1">
                    <h4 class="dib">城市：</h4>
                    <el-select v-model="value5" placeholder="请选择" @change="provinceFun">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value11" collapse-tags style="margin-left: 20px;" placeholder="请选择" @change="cityFun">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value16" collapse-tags style="margin-left: 20px;" placeholder="请选择" @change="townFun">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="shopname" prop="shopname">
                        <h4 class="dib">门店：</h4>
                        <el-input class="dib" type="textarea" v-model="textarea" placeholder="请输入门店信息" :autosize="{ minRows: 5, maxRows: 7}">
                        </el-input>
                    </div>
                    <el-form>
                        <el-form-item class="submit-shop">
                            <el-button @click="goThree(2)" class="upload-btn">
                                下一步
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- 第三步 -->
                <div class="third-step" v-show="step == 2">
                    <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm">
                        <h4 class="dib" style="text-indent:28px">法人名称：</h4>
                        <el-form-item prop="manager" class="dib">
                            <el-input placeholder="请输入法人姓名" v-model="ruleForm.manager" type="text"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="upload">
                        
                        <h4 class="dib" style="text-indent:28px">营业执照：</h4>
                        <el-upload class="upload-demo dib"  action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                            :on-error="imgUploadError">
                            <el-button size="small" type="primary" class="upload-btn">点击上传</el-button>
                        </el-upload>
                    </div>
                    <div class="upload">
                        <h4 class="dib">上传有效证件：</h4>
                        <div class="dib">
                            <el-upload class="upload-demo db"  action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                                 :on-error="imgUploadError">
                                <el-button size="small" type="primary" class="upload-btn">身份证正面照</el-button>
                            </el-upload>
                            <el-upload class="upload-demo db person"  action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                                :on-error="imgUploadError">
                                <el-button size="small" type="primary" class="db upload-btn">身份证反面照</el-button>
                            </el-upload>
                        </div>
                    </div>
                    <div class="upload last-submit">
                        <h4 class="dib">卫生许可证照：</h4>
                        <el-upload class="upload-demo dib"  action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                            :on-error="imgUploadError">
                            <el-button size="small" type="primary" class="upload-btn">点击上传</el-button>
                        </el-upload>
                    </div>
                    <el-form>
                        <el-form-item class="submit-shop">
                            <el-button @click="submitForm" class="upload-btn">
                                提交认证
                            </el-button>
                        </el-form-item>
                    </el-form>
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
     import city from '../../assets/city.data.js'
    import bottom from '../../components/bottom/bottom'
    export default {
        name: 'shopReg',
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
                console.log(value)
                if (value === "") {
                    callback(new Error("密码不能为空"))
                } else if (!this.checkPassword(value)) {
                    callback(new Error("至少8-16位字符，包含英文字母、数字和“_”的2种"))
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
            //  <!--店铺名是否为空-->
            let checkShopname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('店铺名不能为空'))
                } else {
                    callback()
                }
            }
            //  <!--法人名字是否为空-->
            let checkManager = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请填写法人信息'))
                } else {
                    callback()
                }
            }
            return {
                loading: false,
                isDisabled: false, // 是否禁止点击发送验证码按钮
                step: 0,
                textarea: '',
                ruleForm: {
                    shopPhone: "",
                    shopPassword: "",
                    code: "",
                    surePassword: "",
                    shopname: "",
                    manager: ""
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
                    code: [{
                        validator: checkSmscode,
                        trigger: 'blur',
                    }],
                    surePassword: [{
                        validator: validatePass2,
                        trigger: 'blur',
                    }],
                    shopname: [{
                        validator: checkShopname,
                        trigger: 'blur',
                    }],
                    manager: [{
                        validator: checkManager,
                        trigger: 'blur',
                    }]
                },
                buttonText: '点击获取',
                isDisabled: false, // 是否禁止点击发送验证码按钮
                flag: true,
                options: [],
                options1: [],
                options2: [],
                value5: [],
                value11: [],
                value16: [],
                fileList: [],
                isSuccess:false,
            };
        },
        components: {
            bottom
        },
        methods: {
            goNext(num) {
                if (!this.checkMobile(this.ruleForm.shopPhone)) {
                    this.$message.error('请输入正确的手机号码');
                    return false;
                }
                if (this.ruleForm.code === "") {
                    this.$message.error("请输入正确的验证码")
                    return false;
                }
                if (!this.checkPassword(this.ruleForm.shopPassword)) {
                    this.$message.error("请输入正确的用户密码")
                    return false;
                }
                if (this.ruleForm.surePassword !== this.ruleForm.shopPassword) {
                    this.$message.error("两次输入密码不一致")
                    return false;
                }
                this.step = num;
                 this.sendPwd();
            },
            goThree(num) {
                if (this.value5 === "") {
                    this.$message.error('请选择省');
                    return false;
                }
                if (this.value11 === "") {
                    this.$message.error('请选择市');
                    return false;
                }
                if (this.value16 === "") {
                    this.$message.error('请选择区');
                    return false;
                }
                if (this.textarea === "") {
                    this.$message.error('请输入店铺名');
                    return false;
                }
                this.step = num;
                this.sendAddress();
                
            },
            // <!--发送验证码-->
            sendcode() {
                let tel = this.ruleForm.shopPhone
                if (this.checkMobile(tel)) {
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
            // <!--提交注册-->
            submitForm() {
                if(this.ruleForm.manager ===""){
                     this.$message.error("请输入法人名字")
                    return false;
                }
                 console.log(this.isSuccess);
                if(this.isSuccess === false){
                    this.$message.error("请正确上传所有的图片")
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
            // <!--进入登录页-->
            gotoLogin() {
                this.$router.push({
                    path: "/userLogin"
                });
            },
            getData() {
                this.$http.get('/data/city.json').then((res) => {
                    let province = [];
                    this.options = res.data;
                })
            },
            provinceFun(e) {
                let index = this.options.findIndex(function(val) {
                    return val.value == e;
                })
                    this.province = this.options[index].label;
                this.options1 = this.options[index].children;
            },
            cityFun(e) {
                let index = this.options1.findIndex(function(val) {
                    return val.value == e;
                })
                this.city = this.options1[index].label;
                this.options2 = this.options1[index].children;
                console.log(index);
            },
            townFun(e) {
                let index = this.options2.findIndex(function(val) {
                    return val.value == e;
                })
                this.town = this.options2[index].label;
                console.log(this.town);
            },
            //  上传图片
            // 移除图片
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) { //预览图片时调用
                console.log(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            beforeAvatarUpload(file) { //文件上传之前调用做一些拦截限制
                console.log(file);
                const isJPEG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isJPG = file.type === 'image/jpg';
                const isLt2M = file.size /1024 < 500;
                if (!isJPG && !isPNG && !isJPEG) {
                    this.$message.error('上传头像图片只能是 jpg和png 格式!');
                    return isJPG || isPNG || isJPEG;
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过500kb!');
                    return isLt2M;
                }
                // return isJPG && isLt2M;
            },
        
        handleAvatarSuccess(res, file) { //图片上传成功
            console.log(res);
            console.log(file);
            this.imageUrl = URL.createObjectURL(file.raw);
            this.isSuccess = true;
        },
        imgUploadError(err, file, fileList) { //图片上传失败调用
            console.log(err)
            this.$message.error('上传图片失败!');
            this.isSuccess = false;
        },   
        // 后台请求
          ajaxFun(){
                   var json = {
                    shopname:this.ruleForm.manager,//法人
                    frontcard:"",//身份证正面
                    countercard:"",//身份证反面
                    HYphoto:"",//卫生许可证
                    business:"",//营业执照
      
                }
               console.log(json);
                this.$http.post('/', json).then((res) => {
                    console.log(res)
                    //如果注册登录，直接跳转到商户登录页面
                    // if(code == "200"){
                        // this.$router.push("/userLogin")
                    // }
                })
            },
            //验证码后台请求
             sendFun(){
                   var json = {
                   shopphone: this.ruleForm.shopPhone,

                }
                //以url形式访问
                //  let json = this.$qs.stringify({
                //    shopPhone: this.ruleForm.shopPhone,
                // });
                console.log(json);
                this.$http.post('/code1', json).then((res) => {
                    console.log(res)
                })
            },
            sendPwd(){
                 var json = {
                shopphone: this.ruleForm.shopPhone,
                  shoppwd: this.ruleForm.shopPassword,
                  code:this.ruleForm.code 
                }
                // let json = this.$qs.stringify({
                //   shopPhone: this.ruleForm.shopPhone,
                //   shopPwd: this.ruleForm.shopPassword,
                //   code:this.ruleForm.code  
                // });
                console.log(json)
                this.$http.post('/shopRegist', json).then((res) => {
                    console.log(res)
                    localStorage.setItem("sy-shopid",res.data.shopId)
                    // localStorage.getItem("data","shopId") 
                })
            },
            //提交商户地址后台请求
            sendAddress(){
                var json = {
                    shopname:this.textarea,
                    shopads:this.province +  this.city +  this.town,
                    shopid: localStorage.getItem("sy-shopid")
                }
                // let json = this.$qs.stringify({
                //   shop:this.textarea,
                //   shopAddress:this.province + "," + this.city + "," + this.town
                // });
                console.log(json)
                this.$http.post('/shopaddress', json).then((res) => {
                    console.log(res)
                }) 
            }

            
        },
        mounted() {
           this.options = city;
        },
    
    }
</script>

<style scoped>
    .shop-reg {
        width: 900px;
        margin: auto;
    }
    .line{
        position: absolute;
        left:0;
        right: 0;
        height: 1px;
        background: #DE1C31;
        top:70px;
    }
    .person {
        margin-top: 10px;
    }
    .el-select {
        width: 150px;
        border: 2px solid #DE1C31;
    }
    .shop-top {
        margin-bottom: 50px;
    }
    .shop-top img {
        padding-right: 20px;
    }
    .shop-reg span {
        font-size: 18px;
        border-left: 1px dotted black;
        padding: 0 20px;
        color: #6b6b6b;
        line-height: 20px;
    }
    .container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 50px;
    }
    .container .el-input {
        width: 350px;
    }
    .container .third-step h4 {
        font-size: 14px;
        font-weight: 400;
        line-height: 40px;
    }
    .container .el-form-item:last-child .el-button {
        background: #DE1C31;
        border: none;
        width: 350px;
        margin-left: 65px;
    }
   
    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .send {
        color: #FFFFFF;
        margin-left: 20px;
    }
    .second-step h4 {
        font-size: 14px;
        margin-right: 10px;
    }
    .second-step .shopname {
        width: 500px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .submit-shop .el-button {
        width: 100px;
        color: #FFFFFF;
    }
    .third-step .upload {
        margin-top: 15px;
    }
    .last-submit {
        margin-bottom: 15px;
    }
    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .upload-btn {
        background: #DE1C31 !important;
    }
</style>
<style>
 .send {
        width: 100px;
        background: #DE1C31;
        border: none;
        margin-left: 50px;
    }
    .shop-reg .el-step__head.is-finish {
        /* background:#DE1C31; */
        color: #FFFFFF;
        border: 0;
    }
    .shop-reg .el-step__icon {
        background: #DE1C31;
        width: 40px;
        height: 40px;
    }
    .shop-reg .el-step.is-horizontal .el-step__line {
        top: 21px;
        background: rgba(222, 28, 49, 0.2)
    }
    .shop-reg .el-step__head.is-finish .el-step__line {
        background: linear-gradient(90deg, rgba(222, 28, 49, 1) 0%, rgba(238, 216, 218, 1) 100%);
    }
    .shop-reg .el-step__head.is-process {
        color: #FFFFFF;
        border: 0;
    }
    .shop-reg .el-step__head.is-wait {
        color: #FFFFFF;
        border: 0;
    }
    .shop-reg .el-step__head.is-wait .el-step__icon {
        background: rgba(222, 28, 49, 0.6);
        z-index: 10;
    }
    .shop-reg .el-step.is-center .el-step__line {
        left: 50%;
        right: -42%;
    }
    .one.el-step:first-child .el-step__head.is-finish .el-step__line {
        /* left: -40%; */
        height: 4px;
    }
    .shop-reg .sec .el-step__head.is-finish .el-step__line {
        /* left: -40%; */
        height: 4px;
    }
    .first-step .el-input__inner,
    .second-step .el-input__inner,
    .third-step .el-input__inner {
        border: 2px solid #DE1C31;
    }
    .container .second-step .el-textarea__inner {
        border: 2px solid #DE1C31;
    }
    .second-step .el-input__inner {
        border-color: #DE1C31;
        border: 0;
    }
    .shop-reg .el-textarea {
        width: 400px;
    }
    .upload .el-button--primary {
        border-color: #DE1C31;
    }
    .shop-reg .container .first-step .el-form-item__error {
        left: 70%;
        top: 30%;
    }
     .shop-reg .el-step__title.is-finish{
        color:#DE1C31;
        font-weight:700;
    }
</style>