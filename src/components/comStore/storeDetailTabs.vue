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
                // tabsRecommend:[
                //     {
                //         menuname:"kkkkk",
                //         price:18,
                //         imgurl:require("../../assets/img/store_details/timg@2x.png")
                //     },
                //          {
                //         menuname:"kkkkk",
                //         price:18,
                //         imgurl:require("../../assets/img/store_details/timg@2x.png")

                //     },
                //     {
                //         menuname:"kkkkk",
                //         price:18,
                //         imgurl:require("../../assets/img/store_details/timg@2x.png")
                //     }
                    
                // ],
                // tabsEnvironment:[
                //     {
                //         environmentImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     },
                //     {
                //         environmentImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     }
                // ],
                // shopPrice:[
                //     {
                //         menuname:"hahahah",
                //         price:18,
                //         imgurl:require("../../assets/img/store_details/uWDKmtpMKfLsqSRGsR916V8P-R4MwCc3ZBy99cPKfVc8NmT9nV3mH-MgzIbl_8PYHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ@2x.png")

                //     },
                //          {
                //         menuname:"hahahah",
                //         price:18,
                //         imgurl:require("../../assets/img/store_details/timg@2x(1).png")

                //     },
                // ],
                // shopimg:[
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     },
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     },
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     },
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/timg@2x(1).png")
                //     },
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/uWDKmtpMKfLsqSRGsR916V8P-R4MwCc3ZBy99cPKfVc8NmT9nV3mH-MgzIbl_8PYHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ@2x.png")
                //     },
                //     {
                //         shopphotoImg:require("../../assets/img/store_details/uWDKmtpMKfLsqSRGsR916V8P-R4MwCc3ZBy99cPKfVc8NmT9nV3mH-MgzIbl_8PYHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ@2x.png")
                //     }
                // ]
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
            
            // this.$store.dispatch("getShopEnvironment",this.$route.query.shopid);
            // this.$store.dispatch("getShopPrice",this.$route.query.shopid);
            // this.$store.dispatch("getShopimg",this.$route.query.shopid);
        }
    }
</script>

<style >

</style>