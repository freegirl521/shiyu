<template>
  
    <el-dialog  :visible.sync="dialogFormVisible" width="40%">
        <div class="wrap">
            <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
            <!-- <img src="../assets/img/comment_shopcenter/shopcenter2.png"> -->
            <!-- <img src="../static/index/tag1.png">
            <img src="../static/index/tag1.png">
            <img src="../static/index/tag1.png"> -->
        </div>
        <div class="food_info">
            <div>
                <p>菜品名称： <input class="food_name" type="text" v-model="str" /></p>
                <p>价格： <input class="food_price" type="text" v-model="price"/></p>
                <p>简介： <input class="food_context" type="text" v-model="context"/></p>
                <div>是否推荐菜：
                <el-switch
                        v-model="value"
                        active-color="#DE1C31"


                        active-value="1"
                        inactive-value="0">
                </el-switch>
                </div>


            </div>
        </div>


        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>

</template>


<script>
    export default {
       
        data() {
            return {
                str:"开心凉粉",
                price:"￥28",
                context:"凉菜，酸甜口，红糖，素菜",
                value:1,
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        }




    }
</script>


<style >
    .el-dialog__header{
        width:100%;
        height:40px;
        background:rgba(254,143,155,1);
        padding: 0 !important;
    }
    .el-dialog__body{
        padding:0 40px !important;
        overflow: hidden;
    }
    .wrap{
        width: 114%;
    }
    .wrap img{
        margin-top: 20px;
        width: 180px;
        height: 120px;
        margin-right: 62px;
    }
    .el-dialog__headerbtn .el-dialog__close{
        width:16px;
        height:17px;
        color: #fff!important;
    }
    .el-dialog__headerbtn{
        top:11px !important;
    }
    .food_name{
        width:106px;
        text-align:center;
        height:22px;
    }
    .food_context{
        width:180px;
        text-align:center;
        height:22px;
    }
    .food_info input{
        border:1px solid rgba(222,28,49,1);
    }
    .active{


    }


    .food_price{
        width: 60px;
        text-align: center;
        height: 22px;


    }
    .food_info p{
        line-height: 24px;
    }
    /* .el-upload-dragger{
		width:180px !important;
		height:120px !important;;
		background:#DE1C31;
	} */
</style>