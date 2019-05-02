<template>
    <article>
        <div class="find center ">
            <div class="content-title clear">
                <h3>店铺排行榜</h3>
                <span class="sort">
				<a :class="{active:index===1}" href="javascript:;" @click="fn('savesum',1)">热门</a>
				<a :class="{active:index===2}" href="javascript:;" @click="fn('serve',2)">评价</a>
				<a :class="{active:index===3}" href="javascript:;" @click="fn('taste',3)">口味</a>
				<a :class="{active:index===4}" href="javascript:;" @click="fn('environment',4)" style="padding-right: 23px;">环境</a>
				<router-link :to="{name:'listapp'}" class="more">更多</router-link>
			</span>
            </div>
            <div class="shop-container">
                <div class="shop-item" v-for="item in $store.state.home.shop">
                    <dl >
                        <dt><img src="shop.img"></dt>
                        <dd><p style="padding-top: 3px;">{{item.name}}</p>
                            <p >人均:<i style="color: #FF4545;padding-left:5px;">{{item.price}}</i></p>
                            <p style="padding-bottom: 8px;padding-top:3px;" >
                                <el-rate
                                        v-model="item.score"
                                        disabled
                                        :colors="['#FF2B3B', '#FF2B3B', '#FF2B3B']"
                                >
                                </el-rate>
                            <p style="font-size: 16px;padding-top: 4px;">推荐菜：<a href="#">{{item.recommendedDishes[0]}}</a><a href="#">{{item.recommendedDishes[1]}}</a><a href="#">{{item.recommendedDishes[2]}}</a></p>
                            <p class="type">{{item.type}}</p>
                            <p class="address">{{item.site}}</p>
                        </dd>
                        <div class="activity">

                            <img v-show="item.active===1||item.active===4||item.active===5||item.active===7" src="../../static/index/act1.png">
                            <img v-show="item.active===2||item.active===4||item.active===6||item.active===7" src="../../static/index/act2.png">
                            <img v-show="item.active===3||item.active===5||item.active===6||item.active===7" src="../../static/index/act3.png">
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "shop-sort",
        data(){
            return {
                index:1,
            }
        },
        methods:{
            fn(keyWord,index){
                this.index=index;
                console.log(this.$store.state.cityId,11111111111);
                this.$store.dispatch("getShop",{cityId:this.$store.state.cityId,keyWord})
            }
        },
        mounted(){

        }
    }
</script>

<style scoped >

    .active{
        color:#DE1C31 !important;
    }
    .el-rate__icon{
        font-size: 20px !important;
    }
    .shop-item dl{
        position: relative;
    }
    .activity{
        position: absolute;
        z-index: 5;
        top:-20px;
        left: 318px;

    }
    .activity img{
            margin-right: 12px;

    }
    .more{
        font-size: 16px;
        padding-right: 0px;
        padding-top: 0px;
        color: #DE1C31;
    }
</style>