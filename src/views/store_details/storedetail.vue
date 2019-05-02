<template>
    <div>
        <!--店铺名：信息-->
        <storeDetailTop></storeDetailTop>
        <!-- 促销 -->
        <storeDetailSales></storeDetailSales>
        <!-- 选项卡 -->
        <storeDetailTabs></storeDetailTabs>
        <!-- 网友点评 -->
        <storeDetailComment></storeDetailComment>
        <!-- 写点评 -->
       <storeDetailComOn></storeDetailComOn>
       <text></text>
    </div>
</template>

<script>
    import storeDetailTop from "../../components/comStore/storeDetailTop.vue";
    import storeDetailSales from  "../../components/comStore/storeDetailSales.vue";
    import storeDetailTabs from  "../../components/comStore/storeDetailTabs.vue";
    import storeDetailComment from  "../../components/comStore/storeDetailComment.vue";
    import storeDetailComOn from  "../../components/comStore/storeDetailComOn.vue";
    // import text from  "../../components/comStore/text.vue";
   
    export default {
        name:"storedetail",
        data(){
            return{

            };
        },
        methods:{

        },       
        components:{
            storeDetailTop,
            storeDetailSales,
            storeDetailTabs,
            storeDetailComment,
            storeDetailComOn
        }
    }
    
</script>

<style src="../../assets/style-details/store_details.css" scoped>
</style>
<style>
/* 选项卡 */
 /* .storeTabs .el-tabs__item.is-active {
    color: #DE1C31;
   
} 
.storeTabs .el-tabs__item:hover {
    color: #DE1C31;
    cursor: pointer;
}
.storeTabs .el-tabs__active-bar {
   
    background-color: #DE1C31;
    
}*/
/* 评论区单选按钮 */
/* .netizensComment .el-radio__input.is-checked+.el-radio__label {
    color: #DE1C31;
}
.netizensComment .el-radio__input.is-checked .el-radio__inner {
    border-color: #DE1C31;
    background: #DE1C31;
} */
/* 评论星星(只读) */
/* .commentStar element.style {
    color: #DE1C31;
} */
/* 展开评论 */
/* .comText .el-collapse-item__header {
    
    display: block;
    border-bottom:none;
    float: right;
}
.comText .el-collapse {
    border-top:none;
    border-bottom:none;
}
.comText .el-collapse-item__wrap {
    border-bottom:none;
}
.comText .el-collapse-item__content {
    font-size: 16px;
} */
/* 写评论 */
 /* .block{
        margin-top: 8px;
    } */
  /* 口味 环境 服务 */
/* .commentOn_mag .comClassify .el-form-item{
     float: left;
   } */
   /* 上传图片 */
   /* 提示 */
   /* .el-upload__tip {
        width: 105px;
    }
    .uploadImage{
        margin-left: 64px;
    } */
/* 图片的ul */
 /* .uploadImage  .el-upload-list {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: -56px;
    margin-left: 115px;
    min-height: 92px;
}
.el-upload-list--picture .el-upload-list__item {
    float: left;
    width: 210px;
    margin-left: 12px;
} */
/* 提交按钮 */
/* .submitBtn{
    margin: 10px;
}
body .el-button--primary {
    color: #FFF;
    background-color: #DE1C31;
    border-color: #DE1C31;
}
body .el-button--primary:hover {
    background: #DE1C31;
    border-color: #DE1C31;
    color: #FFF;
} */
</style>
