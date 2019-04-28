<template>
    <div>
        <!-- 促销 -->
         <div class="sales common_style" >
            <div class="infoCenter">
                <h1>优惠促销</h1>
                <div class="saleCoupon"  v-for="(item,index) in $store.state.commentDetail.shopSales" :key="index">
                <!-- 优惠券 -->
                    <router-link :to="{name:'',query:{shopid:item.shopid}}" style="color:#333">
                        <div class="coupon" >
                        <!-- 第一张代金券 -->
                            <div>
                                <!-- 图片 -->
                            <div class="quanPic">
                                    <img :src=item.ticketimg>
                            </div>
                            <!-- 代金券信息 -->
                                <div class="quanInfo">
                                            <p>代金券1张</p>
                                            <span>￥<i>{{item.price}}</i>元</span>
                                            <span class="beforPrice">{{item.rackrate}}</span>
                                            <span class="quanInfo_right">已售<i>{{item.numberofsold}}</i></span>
                                </div>
                                
                                <div class="obclear"></div>
                            </div>
                        </div>
                    </router-link>
                </div>
             </div>
            </div>
        </div>
    
</template>

<script>
    export default {
        name:"storeDetailSales",
        data(){
            return{
                
            }
        },
        methods:{
            
        },
         mounted(){
            //第一个参数是actions的方法名,第二个参数是路由传过来的店铺ID     DOM加载完成执行的方法this.$route.query.Shopid
            this.$store.dispatch("getShopSales",13);
        },

    }
</script>

<style lang="scss" scoped>

</style>