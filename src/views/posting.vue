<template>
    <div>
      <header class="posting-header">
          <!-- <div class="header-top">
              <div class="header-top-left"><img src="@/assets/img/community/location@2x.png" alt="">北京</div>
              <ul class="header-top-right">
                  <li>你好，小仙女！</li><span>|</span>
                  <li>个人中心</li>
                  <li>商户中心</li>
              </ul>
          </div> -->
          <div class="header-main">
              <ul class="header-main-left">
                    <li><img src="@/assets/img/community/Food Meet@2x.png" alt=""></li>
                    <li><div class="point"></div></li>
                    <li><p>社区论坛</p></li>
              </ul>
                <div class="header-main-right"><img :src=$store.state.posting.userImg alt=""></div>
          </div>
      </header>
        <div class="box">
            <div class="left"><!-- 帖子的主题 -->
            <el-cascader
                    placeholder="主题"
                    :options="this.options"
                    filterable
                    change-on-select
                    >
                </el-cascader>
            </div>
            <div class="right">请告诉我帖子的主题</div>
            <div class="content"><!-- 帖子的内容 -->
                
                <el-input
                    type="textarea"
                    :rows="22"
                    placeholder="请输入正文内容"
                    v-model="posttext">
                </el-input>

                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                
                    accept="image/png,image/jpg,image/jpeg"
                    :before-upload="beforeUpload"
                    list-type="picture"
                    v-model="posttext">
                    <el-button size="small" type="primary">添加图片</el-button>
                    
                </el-upload>
                <!-- :file-list="fileList" -->
                <el-row class="button">
                <el-button type="info" @click="serve">存草稿</el-button>
                    <el-button type="danger" @click="postanswer">发布</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"posting",
        data(){
            return{
                options:[
                    {
                        value: 'zhinan',
                        label:"美食"
                        // $store.state.posting.aboutList.about
                    },
                    // {
                    // value: 'zhinan',
                    //     label:$store.state.posting.aboutList[1].about
                    // },
                    // {
                    // value: 'zhinan',
                    //     label:$store.state.posting.aboutList[2].about 
                    // },
                    // {
                    // value: 'zhinan',
                    //     label:$store.state.posting.aboutList[3].about  
                    // }
                ],
                posttext:""  
            }
        },
         methods: {
            postanswer(){
                console.log(8888888);
                this.$store.dispatch("postanswer",{posttext:this.posttext,
                
                });
               
                // {userid:localStorage.userId,posttext:this.posttext,postname:this.options,aboutid:$store.state.aboutList.id}
              
                //  userid:obj.userid,
                // posttext:obj.posttext,
                // postname:obj.postname,
                // aboutid:obj.aboutid
                console.log(this.posttext,this.aboutid,6666666);
            },
   
            serve(){
                console.log(1111111111111111);
            },
            handleRemove(file) {
                console.log(file);
            },
            handlePreview(file) {
                console.log(file);
            },
            beforeUpload (file) {
                let _this = this
                const is1M = file.size / 1024 / 1024 < 1; // 限制小于1M
                const isSize = new Promise(function (resolve, reject) {
                    let width = 654; // 限制图片尺寸为654X270
                    let height = 270;
                    let _URL = window.URL || window.webkitURL;
                    let img = new Image();
                    img.onload = function () {
                        let valid = img.width === width && img.height === height;
                        valid ? resolve() : reject();
                    }
                    // img.src = _URL.createObjectURL(file);
                    }).then(() => {
                    return file;
                    });
            
                }
        }    
    }
</script>

<style scoped>
/* 头部 */

 .posting-header{
    width:100%;
    height:156px;
    background:#fff;
}
.header-main{
width:1200px;
height:118px;

color: #DE1C31;
font-size:24px;
margin:0 auto;
}
.header-main-left{
    float: left;
    line-height: 118px;
   
}

.header-main-left li{
    float:left;
}
.header-main-left img{
    width:205px;
    height:101px;  
    float: left;
    margin: 27px 0px;
}
.point{
    width:15px;
    height:15px;
    background: #DE1C31;
    float: left;
    margin: 76px 20px;
}
.header-main-left p{
   margin-top: 23px;
}
.header-main-right{
    width:70px;
    height: 70px;
    float:right;
    margin:44px 40px;

}
.header-main-right img{
    width: 70px;
    height:70px;
    border:1px dashed #dddddd;
}
/*
.header-top{
    width:1200px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    font-size:16px;
    color:#DE1C31;
}
.header-top-left{
    float:left;
    width:80px;
    margin-left: 120px;
}
.header-top-left img{
    width:16px;
    height:16px;
    margin-right: 10px;
}
.header-top-right{
    float:right;
}
.header-top-right li{
    float: left;
    margin-left:20px;
   cursor: pointer;
}
.header-top-right span{
    float: left;
    margin-left: 6px;
} */

  
/* 内容 */
.box{
    width:1200px;
    margin:0 auto;
    margin-top:21px;
}
.left{
    
    width:184px;
    height:40px;
    background:#fff;
    float:left;
    line-height: 40px;
  
}
.right{
    width:989px;
    height:40px;
    line-height: 40px;
    font-size:20px;
    color:rgba(171,171,171,1);
    background:#fff;
    margin-left:192px;
    padding-left:20px;
     /* float:right; */
}
.content{
    width:1180px;
    margin:0 auto;
    font-size:14px;
    margin-top:4px;
    padding-top:20px;
    padding-left:20px;
    background:#fff;
    color:rgba(171,171,171,1);
}
.el-upload-list{
    width:200px;
}
.el-upload-list--picture .el-upload-list__item {
    width:200px;
}
.el-textarea__inner{
    margin-bottom:18px;
}
.button{
    float:right;
    margin-top:12px;
}

</style>