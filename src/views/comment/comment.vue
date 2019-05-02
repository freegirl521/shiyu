<template>
    <div>
    <header>
        <div class="bar_wrap">
            <div class="top_bar">
                <div class="left l-info">
                    <img src="../../assets/img/comment_shopcenter/home@2x.png" alt="">
                    <a href="">回到首页</a>
                    <!-- <a class="city" target="_blank">
                        <span class="map-info"></span><span>北京</span>
                    </a> -->
                </div>
                <div class="right r-info">
                    <ul>
                        <li><a href="">注册</a></li>
                        <li><a href="">登录</a></li>
                        <li><span style="padding-left: 15px;">|</span></li>
                        <li><a href="">个人中心</a></li>
                        <li><a href="">商户中心</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="top_wrap">
            <div class="top ">
                <img src="../../assets/img/comment_shopcenter/Food Meet@2x.png" class="left" alt="">
                <p class="left">我要点评>></p>
            </div>
        </div>
        <div class="select_wrap">
            <div class="select">
                <p class="left">点评记录美好生活</p>
                <input class="right" type="text" v-model.lazy="str" placeholder="请输入店名或商圈名" @blur="search(str)">     
                <div class="btn">
                    <img src="../../assets/img/comment_shopcenter/搜索 (1)@2x.png" alt="">
                </div>           
            </div>
        </div>
    </header>

    <!-- 点评区 -->

    <div class="content">
        <template>            
        <div class="item_wrap" @click="showToggle(index)" v-for="(item,index) in $store.state.comment.commentList"  :key="index">
            <div class="item">
                <div class="pic left">
                    <img src="../../assets/img/comment_shopcenter/1a5039bfaf96c6d0187ec794f0b3bbfef23f9396311d-HBRNdK_fw658 拷贝 2@2x.png" alt="">
                </div>
                <form class="left">
                    <div class="clear">
                        <h4 class="left">{{item.shopname}}</h4>
                        <span class="left pay">美团智能支付</span>
                    </div>
                    <div class="score">
                        <div class="block">
                            <span class="demonstration">评分：</span>
                            <el-rate :colors="['#DE1C31','#DE1C31','#DE1C31']" v-model="value1[index]"></el-rate>
                        </div>
                    </div> 
                    <div class="hide" v-show="isShow===index">
                        <div class="clear">
                            <div class="flavor left">
                                <div class="block">
                                    <span class="demonstration">口味：</span>
                                    <el-rate :colors="['#DE1C31','#DE1C31','#DE1C31']" v-model="value2[index]"></el-rate>
                                </div>
                            </div>
                            <div class="service left">
                                <div class="block">
                                    <span class="demonstration">服务：</span>
                                    <el-rate :colors="['#DE1C31','#DE1C31','#DE1C31']" v-model="value3[index]"></el-rate>
                                </div>
                            </div>
                            <div class="environment left">
                                <div class="block">
                                    <span class="demonstration">环境：</span>
                                    <el-rate :colors="['#DE1C31','#DE1C31','#DE1C31']" v-model="value4[index]"></el-rate>
                                </div>
                            </div>
                        </div>
                        <div class="write_c clear">
                            <p class="left">评价：</p> 
                            <textarea name="" id="" cols="30" rows="10" ref="text">写点评论，记录生活......</textarea>
                        </div>
                        <div class="pictureAddress">
                            电脑传图
                            <input type="file" multiple="multiple" value="电脑传图">
                        </div>
                        <div class="more none">
                            获取更多信息
                            <img src="../../assets/img/comment_shopcenter/箭头@2x.png" alt="">
                        </div>
                        <div class="averagePrice">
                            <span>人均：</span>
                            <input type="text" placeholder="98" ref="price">元
                        </div>
                        <div class="tui clear">
                            <span class="left">推荐：</span>
                            <div class="menu left" v-for="(recommend,index) in item.like" :key=index>
                                <template>
                                <i>{{recommend}}</i>
                                <!-- <i>啦啦啦</i>
                                <i>啦啦啦啦啦</i>
                                <i>啦啦啦啦</i>
                                <i>啦啦啦啦</i> -->
                                </template>
                            </div>
                            <p class="right">
                                <!-- 展开 -->
                                <img src="../../assets/img/comment_shopcenter/箭头@2x.png" alt="">
                            </p>   
                        </div>
                        <div class="park">
                            <span class="left">停车：</span>
                            <textarea rows="1" ref="parking">车停在哪儿？收费吗？</textarea>
                        </div>
                        <p class="close">
                            收起选项
                            <img src="../../assets/img/comment_shopcenter/箭头@2x.png" alt="">
                        </p>
                        <div class="clear">
                            <div class="send left" @click="submit(index)">
                                <input type="button" >
                            </div>
                            <span class="cancel left">取消点评</span>
                        </div>
                    </div>
                </form>
                <div class="no right">
                    没去过
                </div>
            </div>
        </div>
        </template>
     
    </div> 
        
    <!-- 分页区 -->
    <div class="pagination">
        <el-pagination
            background
            prev-text="上一页"
            next-text="下一页"
            layout="prev, pager, next"
            :page-count="$store.state.page.pageSum"
            :current-page="$store.state.page.pageIndex"
            @current-change ="v=>this.$store.dispatch('getList',{keyword:'',pageIndex:v})"
             >
        </el-pagination>
    </div>

    <!-- 底部 -->
    <bottom></bottom>
    </div>
</template>

<script>
    import bottom from "../../components/bottom/bottom.vue"
    export default {
        name:"comment",
        data() {
            return {
                value1: [],
                value2: [],
                value3: [],
                value4: [],
                isShow:-1,
                index:1,
                cur:1,
                str:"",      
             list:[
                 {
                     name:"茜拉甜点"
                 },
                  {
                     name:"味千拉面"
                 }
             ]
            
            }
        },
        components:{
            bottom
        },
        methods: {
            showToggle(index){
                this.isShow = index;
            },
            handleCurrentChange(val){
                this.cur=val;
                console.log(val,797989);
            },
            search(keyword){
                console.log(keyword)
                this.$store.dispatch("getList",{keyword:keyword,pageIndex:this.$store.state.page.pageIndex});
            },
            submit(index){
                var obj;
                obj={evaluate:this.$refs.text[index].value,
                score:this.value1[index],
                flavor:this.value2[index],
                service:this.value3[index],
                enviorment:this.value4[index],
                averageprice:this.$refs.price[index].value,
                car:this.$refs.parking[index].value,
                menuid:2,
                commentimg:""
                };
                console.log(obj);
                // 传出去
                this.$store.dispatch("send",obj);
            }
            
        },
        mounted() {
            this.$store.dispatch("getList",{keyword:"",pageIndex:1});
            },            
    }
</script>

<style scoped>
     @import "../../assets/style/comment.css";

    /* 评分 */
    .el-rate{
        float: right;
    }
    .el-pagination{
        margin-top: 56px;
        color:rgba(222,28,49,1) !important;

    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background:rgba(222,28,49,1) !important;
        color: #FFF !important;
    }
    .el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev{
        width:93px;
        height:39px;
        color: #FFF !important;
        background:rgba(222,28,49,1) !important;
        border-radius:6px !important;
    }
    .el-pagination.is-background .el-pager li{
        width:44px;
        height:39px;
        line-height: 36px;
        font-size:20px;
        border:2px solid rgba(222,28,49,1) !important;
        border-radius:6px !important;
        color:rgba(222,28,49,1) !important;
        background:#fff !important;

    }
</style>