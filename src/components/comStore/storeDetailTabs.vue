<template>
    <div>
        <div class="storeTabs common_style">
            <!-- 选项卡 -->
            <div class="infoCenter clearfloat">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="推荐菜" name="1" >
                           <div class="switch" v-for="(item,index) in $store.state.commentDetail.shopRecomment" :key="index">
                            <dl>
                                <dt><img :src=item.imgurl alt=""></dt>
                                <dd>
                                    <span>{{item.menuname}}</span>
                                     <span>￥<i>{{item.price}}</i></span>
                                </dd>
                            </dl>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="环境" name="2" >
                        <div class="switch" v-for="(item,index) in $store.state.commentDetail.shopRecomment" :key="index">
                            <dl>
                                <dt><img :src=item.environmentImg alt=""></dt>
                            </dl>
                            
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="价格表" name="3" >
                         <div class="switch" v-for="(item,index) in $store.state.commentDetail.shopRecomment" :key="index">
                            <dl>
                                <dt><img :src=item.imgurl alt=""></dt>
                                <dd>
                                    <span>{{item.menuname}}</span>
                                     <span>￥<i>{{item.price}}</i></span>
                                </dd>
                            </dl>
                            
                            
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="官方相册" name="4" >
                        <div class="switch" v-for="(item,index) in $store.state.commentDetail.shopRecomment" :key="index">
                            <dl>
                                <dt><img :src=item.shopphotoImg alt=""></dt>
                            </dl>
                            
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"storeDetailTabs",
         data() {
            return {
                activeName: '1',
            };
         },
        methods: {
            handleClick(tab, event, activeName) {
                console.log(tab, event,this.activeName);
                // console.log(this.activeName);
                this.$store.dispatch("getShopRecommend",{type:this.activeName,shopid:13});
            },
            
            //this.$route.query.shopid
        },
        mounted(){
            this.$store.dispatch("getShopRecommend",{type:1,shopid:13});
        }
    }
</script>

<style >

</style>