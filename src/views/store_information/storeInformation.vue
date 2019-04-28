<template>
    <div>
    <div class="nav">
        <div class="navGoods">
            <div class="boxx" >
<<<<<<< HEAD
                 <shuffling></shuffling>
=======
                 <boxx></boxx>
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
                 <div class="listBottom">
                            <div class="star">
                                <ul>
                                    <li @click="likeFun" v-show="!type"><img src="../../assets/img/store_information/星 拷贝 5@2x.png"><span>收藏</span></li>
                                    <li @click="likeFun" v-show="type"><img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png"><span>已收藏</span></li>
                                </ul>
                            </div>
                            <div class="share">
                                <span>分享到</span>
                                <i><img src="../../assets/img/store_information/箭头 (3)@2x.png"> </i>
                                <!-- <ul class="soft">
                                    <li>
                                        <a title="分享到微博">
                                            <i class="wb"></i>
                                            微博
                                        </a> 
                                        </li>
                                    <li><a title="分享到QQ"><i class="wb"></i>QQ </a></li>
                                    <li><a title="分享到豆瓣"><i class="wb"></i>豆瓣</a> </li>
                                    <li><a title="分享到微博"><i class="wb"></i>微博</a> </li>
                                    <li><a title="分享到QQ"><i class="wb"></i>QQ </a></li>
                                    <li><a title="分享到豆瓣"><i class="wb"></i>豆瓣</a> </li>
                                </ul> -->
                            </div>
<<<<<<< HEAD
                            <div class="date">
                                    <countdown :endTime='endTime'></countdown>
                            </div>
=======
                            <!-- <div class="er"></div> -->
                            <div class="date">
                                    <!-- <countdown :endTime='endTime'></countdown> -->
                                   
                            </div>
                                <countIdown></countIdown> 
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
                        </div>
            </div>
                <right></right>
        </div>
    </div>
     <div class="present">
        <div class="presentm">
            <div class="list">
                <div class="bulk one">
                    <a href="#bulk" class="bulkne"> 团购详情</a>
                </div>
                <div class="notes one">
                    <a href="#notes" class="notesne">购买须知</a>
                </div>
                <div class="introduction one">
                     <a href="#introduce" class="introductionne">产品介绍</a> 
                </div>
            </div>
                
            <div class="bulkls" id="bulk"> 
                <div class="shopImg">
<<<<<<< HEAD
                    <!-- <img :src=$store.state.storeInformation.succes.shopImg[0]>  -->
                    <!-- {{$store.state.storeInformation.succes.shopImg}} -->
=======
                    <img :src=$store.state.storeInformation.succes.shopImg> 
                    {{$store.state.storeInformation.succes.shopImg}}
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
                    <!-- <img src="../../assets/img/store_information/u=3600432712,3894872089&fm=26&gp=0@2x.png"> -->
                </div>
                <div class="content">
                    <div class="screening">
                        <span class="screen">筛选:</span>
                        <div class="border">
                            <span class="map">全部地区</span>
                        </div>
                    </div>
                    <div class="hrone"></div>
                    <div class="resName">{{$store.state.storeInformation.succes.resName}}</div>
      
                    <el-rate
                        v-model="$store.state.storeInformation.succes.evaScore"
                        disabled
                        show-score
                        :colors="['#DE1C31','#DE1C31','#DE1C31']"
                        text-color="#DE1C31"
                        score-template="{value}">
                    </el-rate>
                    <div class="address">
                        <span class="add">地址：</span>
                        <span class="shopAddress">{{$store.state.storeInformation.succes.shopAddress}}</span>
                    </div>
                    <div class="tel">
                        <span class="telPhone">电话：</span>
                        <span class="phone">{{$store.state.storeInformation.succes.phone}}</span>
                    </div>
                    <div class="times">
                        <span class="timess">营业时间：</span>
                        <span class="time">{{$store.state.storeInformation.succes.time}}</span>
                    </div>
                </div>
                <div class="table">
                    <table width="100%" cellpadding="0" cellspacing="0" class="detail-table" >
                        <thead>
                            <tr>
                                <th widht="50%">名称</th>
                                <th widht="25%">数量</th>
                                <th widht="25%">单价</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="middle">
                                <td>代金券</td>
                                <td class="tc"><span>1</span><span>张</span></td>
                                <td class="tc"><span class="shopPrices">{{$store.state.storeInformation.succes.shopPrices}}</span><span>元</span></td>
                            </tr>
                            <tr class="total">
                                <td></td>
                                <td>价值</td>   
                                <td><span class="shopPrices">{{$store.state.storeInformation.succes.shopPrices}}</span><span>元</span></td> 
                            </tr>
                            <tr class="total">
                                <td></td>
                                <td>团购价</td>   
                                <td><span class="proPrices">{{$store.state.storeInformation.succes.proPrices}}</span><span>元</span></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="evenAll all">
                    <span class="people">店内人均消费：</span>
                    <span class="even">{{$store.state.storeInformation.succes.even}}</span><span>元</span>
                </div>
                <div class="reference all">
                    店内部分价格菜品参考：
                </div>
                <div v-for="(item,index) in $store.state.storeInformation.succes.foots" :key="index">
                    <div class="dish all">
                        <span class="dishName">{{item.dishName}}</span>
                        <span class="foodPrice">{{item.foodPrice}}</span>/<span>份</span>
                    </div>
<<<<<<< HEAD
=======
                    <!-- <div class="dish all">
                        <span class="dishName">牛油果袋</span>
                        <span class="foodPrice">88</span>/<span>份</span>
                    </div> -->
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
                </div>
            </div>
           <div class="notess" id="notes">
               <div class="notesOne">
                    购买须知
               </div>
               <div class="hrTwo">
               </div>
               <div class="noteslist">
                    <p class="deadline">{{$store.state.storeInformation.succes.deadline}}</p>
                    <p>除外日期：有效期内周末、节假日通用</p>
                    <p>使用时间：团购券24小时可用</p>
                    <p>规则提醒：不可叠加使用、不找零、不兑现</p>
                    <p>商家服务：停车位收费详情咨询商家</p>
                    <p>温馨提示：团购用户不可同时享用商家其他优惠</p>
               </div>
           </div>
           <div class="introduce" id="introduce">
                <div class="introduceOne">
                        产品介绍
                </div>
                <div class="hrThree">
                </div>
                <!-- (item,index) in $store.state.storeInformation.succes.dishImages" :key="index" -->
                <div class="dishImage" v-for="(item,index) in $store.state.storeInformation.succes.dishImages" :key="index">
                    <!-- <img src="../../assets/img/store_information/u=3829596455,4121332688&fm=26&gp=0@2x.png" alt="">
                    <img src="../../assets/img/store_information/timg (1)@2x(2).png" alt="">
                    <img src="../../assets/img/store_information/timg (3)@2x.png" alt=""> -->
                    <!-- {{item}} -->
                    <img :src=item alt="">
                </div>
            </div>
            <div class="rob">
                <!-- <div class="rushing"> -->
                    <!-- <span>立即抢购</span> -->
<<<<<<< HEAD
                    <snapUp></snapUp>
=======
                    
                     <shopCartt></shopCartt>
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
                <!-- </div> -->
                <div class="prices">
                        <div class="proPrices">
                            <!-- <i> -->
                                ￥
                                <!-- </i> -->
                            <!-- <span> -->
                            {{$store.state.storeInformation.succes.proPrices}}
                            <!-- </span>  -->
                            </div>
                </div>
                <div class="buy-bottom-tab">
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr>
                            <th>门店价</th>
                            <th width="50">
                            <th>消费量</th>
                            <th width="50"></th>
                        </tr>
                        <tr>
                            <td class="Price-font">
                                ￥{{$store.state.storeInformation.succes.shopPrices}}
                            </td>
                            <td width="50"></td>
                            <td>
                                <span class="J_dealCount">
                                已售{{$store.state.storeInformation.succes.soldNum}}份
                                </span>
                            </td>
                            <td width="50"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>          
            </div>
        </div>
    </div> 
    <shopCart></shopCart>
    </div>
</template>

<script>
<<<<<<< HEAD
    import "../../assets/style/css/detail.css"
    import "../../assets/style/css/font/iconfont.css"
    import countdown from "../../components/storeInformation/countdown.vue"
    import shuffling from "../../components/storeInformation/shuffling.vue"
    import right from "../../components/storeInformation/right.vue"
    import snapUp from "../../components/storeInformation/snapUp.vue"
    
=======

    // import countdown from "../../components/storeInformation/countdown.vue"
    // import modalDialong from "../../components/storeInformation/modalDialog.vue"
     import countIdown from "../../components/storeInformation/countIdown.vue"
    import boxx from "../../components/storeInformation/boxx.vue"
    import right from "../../components/storeInformation/right.vue"
    import shopCart from "../../components/storeInformation/shopCart.vue"
    import shopCartt from "../../components/storeInformation/shopCartt.vue"

>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
    export default {
        name:"storeInformation",
        data() {
            return {
                //星级评分
                value: 3.7,
                //购买数量
                num: 1,
                //收藏
                isShow:true,
                type:0,
                endTime:"2019-05-27 18:39:15"

            }
        },  
        methods: {
          
            //购买数量计数器
            handleChange(value) {
                console.log(value);
            },
            //倒计时count-down
            // callback:function(){
            // },
            //收藏
            likeFun(){
                this.type = !this.type
            }
        },
        mounted(){
            //第一个参数是actions的方法名,第二个参数是路由传过来的店铺ID     DOM加载完成执行的方法
            //this.$route.query.shopid
            this.$store.dispatch("getInfo",1);
<<<<<<< HEAD
            // this.$store.dispatch("getInfo",this.$route.query.shopId);
        },

        components:{
            countdown,
            shuffling,
            right,
            snapUp
=======
        },

        //countdown倒计时
        components:{
            // countdown
            // modalDialong
            countIdown,
            boxx,
            right,
            shopCart,
            shopCartt
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
        }
  }
</script>

<style scoped>

</style>