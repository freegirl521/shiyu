<template>
    <div>
         <div class="shopHead common_style"  >
            <div class="infoCenter">
                    <h3>{{$store.state.commentDetail.shopInfo.shopname}}</h3>
                    <div class="shopScore">
                        <!--评论、人均、口味、环境、服务-->
                        <div>
                            <!-- 店铺评价(几星) -->
                            <p class="shopIco">
                                <!--  v-model="$store.state.commentDetail.shopInfo.commentscore"传进来的评星数(就是原来的value) -->
                                <el-rate
                                v-model="$store.state.commentDetail.shopInfo.commentscore"
                                disabled
                                :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                text-color="#DE1C31"
                                score-template="{value}">
                                </el-rate>
                                
                            </p>    
                        </div>
                        <div>
                            <span>{{$store.state.commentDetail.shopInfo.conunts}}</span>
                            条评论
                        </div>
                        <div>
                            人均
                            <span>{{$store.state.commentDetail.shopInfo.price}}</span>
                            元
                        </div>
                        <div>
                            口味：
                            <span>{{$store.state.commentDetail.shopInfo.taste}}</span>
                        </div>
                        <div>
                            环境：
                            <span>{{$store.state.commentDetail.shopInfo.environment}}</span>
                        </div>
                        <div>
                            服务：
                            <span>{{$store.state.commentDetail.shopInfo.serve}}</span>
                        </div>
            
                    </div>
                    <div class="obclear" >
                        <!-- 店铺地址 -->
                        <p>地址：<span>{{$store.state.commentDetail.shopInfo.shopads}}</span></p>
                        <!-- 电话 -->
                        <p class="phone">电话：<span class="tel">{{$store.state.commentDetail.shopInfo.shopphone}}</span></p>
                        
                        <p class="special">特色：
                            <span class="tuan" v-show="$store.state.commentDetail.shopInfo.feature === 1 || $store.state.commentDetail.shopInfo.feature === 4 || $store.state.commentDetail.shopInfo.feature === 5 || $store.state.commentDetail.shopInfo.feature === 7"></span>
                            <span class="ding" v-show="$store.state.commentDetail.shopInfo.feature === 2 || $store.state.commentDetail.shopInfo.feature === 4 || $store.state.commentDetail.shopInfo.feature === 6 || $store.state.commentDetail.shopInfo.feature === 7"></span>
                            <span class="wai" v-show="$store.state.commentDetail.shopInfo.feature === 3 || $store.state.commentDetail.shopInfo.feature === 5 || $store.state.commentDetail.shopInfo.feature === 6 || $store.state.commentDetail.shopInfo.feature === 7"></span>
                        </p>
                        <details>
                                <summary>更多信息</summary>
                                营业时间：周一至周日 9:20-22:30
                        </details>
                        <!-- 点击更多信息时显示营业时间,更多信息变为收起,图片为向下箭头 -->
                        <!-- <div class="openTime">
                            营业时间：周一至周日 9:20-22:30
                        </div> -->
                </div>
                    <div>
                        <div class="shopHead_left">
                            <a href="#anchorPoint" class="write">写点评</a>
                            <!-- <span class="write">写点评</span> -->
                            <p class="book">
                                <img src="../../assets/img/store_details/reserve@2x.png">
                                <span v-show="$store.state.commentDetail.shopInfo.shopmanage === 0">提前订座</span>
                                <span v-show="$store.state.commentDetail.shopInfo.shopmanage === 1">停止订座</span>
                                <i>{{$store.state.commentDetail.shopInfo.usercount}}</i>
                                <span class="last">人已定</span>
                            </p>
                        </div>
                        <!-- 转发   收藏 -->
                        <div class="shopHead_right">
                            <!-- <ul>
                                    <li @click="likeFun" v-show="!type"><img src="../../assets/img/store_information/星 拷贝 5@2x.png"><span>收藏</span></li>
                                    <li @click="likeFun" v-show="type"><img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png"><span>已收藏</span></li>
                                </ul> -->
                            <img src="../../assets/img/store_details/share@2x.png">
                            <img @click="likeFun" v-show="!type" src="../../assets/img/store_details/star 5@2x.png">
                            <img @click="likeFun" v-show="type" src="../../assets/img/store_details/star(1)@2x.png">
                        </div>
                    </div>
                    <!-- 清除浮动 -->
                    <div class="obclear"></div>

            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:"storeDetailTop",
         data() {

            return {
                type:0,
                // value: 3.7,
                // shopInfo:[
                //     {
                //         shopname:"哈哈店铺",
                //         // 返回的评星数
                //         commentscore:4,
                //         conunts:123,
                //         price:222,
                //         teste:5,
                //         environment:6,
                //         serve:7,
                //         shopads:"哈哈街哈哈号",
                //         shopphone:"1111222",
                //         feature:6,
                //         usercount:23,
                //         Shopmanage:1
                //     }
                // ]
            }
        },
        methods:{
            likeFun(){
                this.type = !this.type;
            }
        },
        mounted(){
            //第一个参数是actions的方法名,第二个参数是路由传过来的店铺ID     DOM加载完成执行的方法
            this.$store.dispatch("getShopInfo",13);
            // this.$route.query.shopid    第二个参数

            
        }
    }
</script>

<style lang="scss" scoped>

</style>