<template>
    <div>
    <div class="nav">
        <div class="navGoods">
            <div class="boxx" >
                 <shuffling></shuffling>
                 <div class="listBottom">
                            <div class="star">
                                <ul @click="likeFun">
                                    <li v-show="!type"><img src="../../assets/img/store_information/星 拷贝 5@2x.png"><span>收藏</span></li>
                                    <li v-show="type"><img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png"><span>已收藏</span></li>
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
                            <div class="date">
                                    <countdown :endTime='endTime'></countdown>
                            </div>
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
                    <!-- <img :src=$store.state.storeInformation.succes.shopImg[0]>  -->
                    <!-- {{$store.state.storeInformation.succes.shopImg}} -->
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
                </div>
            </div>
           <div class="notess" id="notes">
               <div class="notesOne">
                    购买须知
               </div>
               <div class="hrTwo">
               </div>
               <div class="noteslist">
                    <p class="deadline">有效日期：{{$store.state.storeInformation.succes.deadline}}</p>
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
                    <snapUp></snapUp>
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
    </div>
</template>

<script>
   
    import countdown from "../../components/storeInformation/countdown.vue"
    import shuffling from "../../components/storeInformation/shuffling.vue"
    import right from "../../components/storeInformation/right.vue"
    import snapUp from "../../components/storeInformation/snapUp.vue"
    
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
                // if(localStorage.userId){
                    this.type = !this.type;
                    this.$store.dispatch('validation',this.$route.query.shopId)
                // }else{
                //      this.$alert('请先登录',  {
                //     confirmButtonText: '确定',
                // });
                // }
            }
        },
        mounted(){
            //第一个参数是actions的方法名,第二个参数是路由传过来的店铺ID     DOM加载完成执行的方法
            //this.$route.query.shopid
            this.$store.dispatch("getInfo",1);
            // this.$store.dispatch("getInfo",this.$route.query.shopId);
        },

        components:{
            countdown,
            shuffling,
            right,
            snapUp
        }
  }
</script>

<style src="../../assets/style/css/font/iconfont.css" scoped>
*{
    padding: 0;
    margin: 0;
}
body{
    background-color: #fff;
}
li{
    list-style: none;
}
i{
   font-style: normal;
}
a{
    text-decoration: none;
}
/* h1{
    font-weight: normal;
    font-size: 18px;
    display: inline-block;
} */
.nav{
    width: 100%;
    height: 527px;
    margin-top: 24px;
    background: #fff;
}
.nav .navGoods{
    width: 1200px;
    height: 527px;
    margin: 0 auto;
}
.nav .navGoods .boxx{
    margin-top: 24px; 
    margin-bottom: 56px;
    width: 570px;
    height: 447px;
    float: left;
}
.nav .navGoods .boxx #box{
    width: 570px;
    height: 429px;
}
.nav .navGoods .boxx #box #top{
    width: 570px;
    height: 307px;
}
.nav .navGoods .boxx #box #top .bigtop{
    width: 570px;
    height: 307px;
    position: absolute;
}
.nav .navGoods .boxx #box #top .bigtop img{
    width: 570px;
    height: 307px;
}
.nav .navGoods .boxx #box #bottom{
    width: 570px;
    height: 91px;
}
.nav .navGoods .boxx #box #bottom #small_ul{
    width: 570px;
    height: 91px;
    margin-top: 10px;
    display: inline;
}
.nav .navGoods .boxx #box #bottom #small_ul li img{
    width: 138px;
    height: 91px;
}
.nav .navGoods .boxx #box #bottom{
    width: 570px;
    height: 91px;
    margin: 10px  0;
}
.nav .navGoods .boxx #box #bottom #small_ul li{
    display: block;
    float: left;
    margin-right: 6px;
}
.nav .navGoods .boxx #box #bottom #small_ul li:last-child{
    margin-right: 0;
}
.nav .navGoods .boxx .listBottom{
    width: 570px;
    height: 19px;
}
.nav .navGoods .boxx .listBottom .star{
    display: inline-block;
    width: 80px; 
}
.nav .navGoods .boxx .listBottom .star img{
    width: 19px;
    height: 19px;
    margin-right: 10px;
    line-height: 19px
}
.nav .navGoods .boxx .listBottom .star span{
    width: 35px;
    height: 18px;
    font-size: 18px；
    color： #333;
    font-family: 'PingFangSC-Light';
    font-weight: 300;
}
.nav .navGoods .boxx .listBottom .share{
    /* width: 54px;
    height: 18px; */
    display: inline;
    margin-left: 25px;
    position: relative;
    border: #fff 1px solid;
    border-bottom: 0 none;
}
.nav .navGoods .boxx .listBottom .share span{
    width: 54px;
    height: 18px;
    font-size: 18px;
    color: #DE1C31;
}
.nav .navGoods .boxx .listBottom .share i img{
    width: 11px;
    height: 7px;
}
.nav .navGoods .boxx .listBottom .share .soft{
    position: absolute;
    z-index: 90;
    display: none;
    width: 178px;
    background: #fff;
    border: 1px solid #ccc;
    margin: 0;
    /* top: 39px; */
    height: auto;
    right: -1px;
    padding: 5px 0;
    left: 50px
}
.nav .navGoods .boxx .listBottom .share:hover .soft{
    display: block;
}
.nav .navGoods .boxx .listBottom .share .soft ul{
    display: none;
    position: absolute;
    width: 178px;
    background: #fff;
    border: 1px solid #ccc;
    margin: 0;
    top: 39px;
    height: auto;
    right: -1px;
    z-index: 90;
    padding: 5px 0;

}
.nav .navGoods .boxx .listBottom .share .soft ul li{
    width: 50%;
    overflow: hidden;
    height: 30px;
    padding: 0;
    line-height: 30px;
}
.nav .navGoods .boxx .listBottom .share .soft li a .wb{
    background :url("../../assets/img/store_information/jpg.png") no-repeat left 0 top 52px;
    width: 18px;
    height: 18px;
    display: inline-block;
}
.nav .navGoods .boxx .listBottom .date{
    width: 178px;
    height: 18px;
    color: #333;
    font-size: 18px;
    float: right;
}
.nav .navGoods .right{
    width: 502px;
    height: 309px;
    float: left;
    margin: 74px 3px 144px 125px;
}
.nav .navGoods .right .resName{
    width: auto;
    height: 24px;
    color: #333;
    font-size: 24px;
    font-weight: 300;
}
.nav .navGoods .right .slogan{
    width: auto;
    height: 19px;
    color: #333;
    font-size: 18px;
    font-weight: 300;
    margin-top: 15px;
}
.nav .navGoods .right .prices{
    width: 502px;
    height: 69px;
    background-color: #DE1C31;
    border-radius: 10px;
    margin-top: 15px;
}
.nav .navGoods .right .prices .proPrices{
    width: auto;
    height: 24px;
    font-size: 20px;
    color: #FEFEFE;
    margin: 18px 13px 22px;
    font-weight: lighter;
    display: inline-block;
}
.nav .navGoods .right .prices .proPrices i{
    font-size: 20px;
}
.nav .navGoods .right .prices .proPrices span{
    font-size: 30px;
}
.nav .navGoods .right .prices .shopPrices{
    width: auto;
    height: 15px;
    font-size: 14px;
    color: #FEFEFE;
    padding-top: 33px;
    font-weight: lighter;
    display: inline;
}
.nav .navGoods .right .informtion{
    width: 503px;
    height: 64px;
    margin-top: 15px;
}
.nav .navGoods .right .informtion .soldNum{
    width: 132px;
    height: 64px;
    border-right: 1px solid #999;
    display: block;
    float: left;
}
.nav .navGoods .right .informtion .soldNum .soldNumt{
    height: 18px;
    font-size: 18px;
    color: #333;
    margin-top: 16px;
    margin-left: 24px;
}
.nav .navGoods .right .informtion .evaNum{
    width: 229px;
    height: 64px;
    border-right: 1px solid #999;
    display: block;
    float: left
}
.nav .navGoods .right .informtion .evaNum .el-rate{
    width: 178px;
    height: 20px;
    display: inline-block;
    margin-left: 30px;
}
.nav .navGoods .right .informtion .evaNum .el-rate .el-rate__item .el-rate__icon{
    color: #DE1C31;
}
/* .nav .navGoods .right .informtion .evaNum .el-rate span{
    height: 15px;
    font-size: 18px;
} */
.nav .navGoods .right .informtion .evaNum .evaNums{
    width: auto;
    height: 18px;
    margin-top: 14px;
    margin-left: 54px;
    display: block;
}
.nav .navGoods .right .informtion .evaScore{
    width: 139px;
    height: 64px;
    border-right: 1px solid #999;
    display: block;
    float: left;
}
.nav .navGoods .right .informtion .evaScore .lit{
    padding-left: 27px;
    color: #333;
    font-size: 18px;
    margin-top: 14px;
}
.nav .navGoods .right .informtion .evaScore .lit:first-child{
    margin-top: 0;
}
.nav .navGoods .right .input_wrap{
    width: auto;
    height: 21px;
    display: block;
    margin-top: 15px;
}
.nav .navGoods .right .input_wrap span{
    font-weight: normal;
    font-size: 18px;
    display: inline-block;
    width: 43px;
    height: 18px;
    color: #666;
    font-size: 18px;
} 
.nav .navGoods .right .input_wrap .el-input-number{
    width: 74px;
    height: 21px;
    margin-left: 18px;
    line-height: 21px;
}
.nav .navGoods .right .input_wrap .el-input-number .el-input-number__increase .el-icon-plus{
    font-style: 12px;
}
.nav .navGoods .right .input_wrap .el-input-number .el-input-number__increase{
    width: 18px;
    height: 21px;
    
}
.nav .navGoods .right .input_wrap .el-input-number .el-input-number__decrease{
    width: 18px;
    height: 21px;
    
}
.nav .navGoods .right .input_wrap .el-input-number .el-input{
    height: 21px;
}
.nav .navGoods .right .input_wrap .el-input-number .el-input .el-input__inner{
    width: 74px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    
}
.nav .navGoods .right .rushing{
    width: 77px;
    height: 30px;
    background-color: #DE1C31;
    border-radius: 10px;
    margin-top: 13px;
    color: #333;
    line-height: 30px;
}
.nav .navGoods .right #rushing{
    width: 112px;
    height: 40px;
    background-color: #DE1C31;
    border-radius: 10px;
    margin-top: 13px;
    line-height: 0;
}
.nav .navGoods .right .rushing span{
    display: block;
    width: 72px;
    height: 18px;
    color: #fff;
    margin: 6px 20px;
    padding: 5px 0;
}
.nav .navGoods .right #rushing span{
    display: block;
    width: 72px;
    height: 18px;
    color: #fff;
    margin: 6px 20px;
    padding: 5px 0;
}
.present {
    width: 100%;
    height: 2827px;
    margin-top: 30px;
    background: #fff;
}
.present .presentm{
    width: 1200px;
    height: 2827px;
    margin: 0 auto;
}
.present .presentm .list{
    width: 1200px;
    height: 34px;
    margin-top: 19px;
    display: inline-block;
    position:sticky;
    top:0;
    background-color: #fff;
    border-bottom: #DE1C31 solid 2px;
    z-index: 2;
}
.present .presentm .one{
    color: #333;
    font-size: 22px;
}
.present .presentm .bulk{
    width: 110px;
    height: 34px;
    display: block;
    float: left;
}

.present .presentm .list .bulk .bulkne{
    width: 88px;
    height: 22px;
    display: block;
}
.present .presentm .notes{
    width: 110px;
    height: 34px;
    display: block;
    float: left;
}
.present .presentm .list .notes .notesne{
    width: 88px;
    height: 22px;
    display: block;
}
.present .presentm .introduction{
    width: 110px;
    height: 34px;
    display: block;
    float: left;
}
.present .presentm .list .introduction .introductionne{
    width: 88px;
    height: 22px;
    display: block;
}
.present .presentm .hr{
    width: 1200px;
    height: 2px;
    background-color: #DE1C31;
}
.present .presentm .bulkls{
    padding-top: 20px;
    width: 1200px;
    height: 665px;
}
.present .presentm .bulkls .shopImg{
    width: 371px;
    height: 22px;
    margin: 14px 38px 31px;
    float: left;
}
.present .presentm .bulkls .content{
    float: left;
    width: auto;
    height: auto;
    display: inline-block;
    margin-top: 13px;
}
.present .presentm .bulkls .content .screening{
    width: 129px;
    height: 22px;
    display: inline-block;
}
.present .presentm .bulkls .content .screening .screen{
    width: 42px;
    height: 19px;
    font-size: 18px;
    color: #333;
    float: left;
}
.present .presentm .bulkls .content .screening .border{
    width: 78px;
    height: 22px;
    display: block;
    border: 1px solid #999;
    float: left;
}
.present .presentm .bulkls .content .screening .border .map{
    margin: 4px 8px;
    font-size: 12px;
}
.present .presentm .bulkls .content .hrone{
    width: 718px;
    height: 1px;
    margin-top: 13px;
    background-color: #999;
}
.present .presentm .bulkls .content .resName{
    width: 170px;
    height: 23px;
    color: #333;
    font-size: 24px;
}
.present .presentm .bulkls .content .el-rate{
    margin-top: 11px;
}
.present .presentm .bulkls .address{
    width: 262px;
    height: 19px;
    color: #333;
    font-size: 18px;
    margin-top: 20px;
}
.present .presentm .bulkls .tel{
    width: 211px;
    height: 17px;
    color: #333;
    font-size: 18px;
    margin-top: 13px;
}
.present .presentm .bulkls .times{
    width: 282px;
    height: 18px;
    color: #333;
    font-size: 18px;
    margin-top: 14px;
}
.present .presentm .bulkls .table{
    width: 1144px;
    height: 184px;
    padding: 31px 19px 23px 38px;
    clear: both;
}
.present .presentm .bulkls .table .detail-table{
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 18px;
    border: 1px solid #e2e2e2;
    color: #333;
}    
.present .presentm .bulkls .table .detail-table thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
.present .presentm .bulkls .table .detail-table thead tr{
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.present .presentm .bulkls .table .detail-table thead tr th{
    color: #333;
    background-color: #f2f2f2;
    font-size: 20px;
    height: 47px;
    line-height: 47px;
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
}
.present .presentm .bulkls .table .detail-table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.present .presentm .bulkls .table .detail-table tbody .middle td{
    border: 1px solid #e2e2e2;
    padding: 0 10px;
    font-size: 20px;
    line-height: 46px;
    word-break: break-all;
    text-align: center;
}
.present .presentm .bulkls .table .detail-table tbody .total td{
    color: #333;
    background-color: #f2f2f2;
    font-size: 20px;
    height: 46px;
    line-height: 46px;
    text-align: center;
}
.present .presentm .bulkls .all{
    padding-left: 68px;
    height: 20px;
    font-size: 20px;
    color: #333;
    margin-bottom: 16px;
}
.present .presentm .bulkls .dish{
    color: #999;
}
.present .presentm .notess{
    width: 1200px;
    height: 375px;
}
.present .presentm .notess .notesOne{
    line-height: 2px;
    width: 102px;
    height: 22px;
    color: #333;
    font-size: 22px;
    padding: 3px 10px 8px 3px; 
    border-bottom: 1px solid #DE1C31;
}
.present .presentm .notess .hrTwo{
    width: 1200px;
    height: 1px;
    background-color: #DE1C31;
}
.present .presentm .notess .noteslist{
    width: 1200px;
    height: 262px;
    background-color: #F6F6F6;
    margin: 26px 0;
    border: 1px solid #DE1C31;
}
.present .presentm .notess .noteslist p{
    height: 18px;
    margin-top: 18px;
    margin-left: 16px;
    color: #333;
    font-size: 18px;
}
.present .presentm .notess .noteslist p:first-child{
    margin-top: 25px;
}
.present .presentm .introduce{
    width: 1200px;
    height: auto;
}
.present .presentm .introduce .introduceOne{
    width: 102px;
    height: auto;
    color: #333;
    font-size: 22px;
    padding: 3px 10px 8px 3px; 
    border-bottom: 1px solid #DE1C31;
}
.present .presentm .introduce .hrThree{
    width: 1200px;
    height: 1px;
    background-color: #DE1C31;
}
.present .presentm .introduce .dishImage{
    width: 1124px;
    height: 1361px;
    margin: 11px 38px;
}
.present .presentm .introduce .dishImage span{
    width: 1124px;
    height: 445px;
}
.present .presentm .rob{
    width:1200px;
    height: 162px;
    background-color:#F6F6F6;
    margin:64px 0;
    display: inline-block;
} 
.present .presentm .rob .shop{
    float: left;
}
.present .presentm .rob .rushing{
    width: 77px;
    height: 38px;
    background-color: #DE1C31;
    border-radius: 10px;
    margin: 56px 45px 68px 36px;
    line-height: 30px;
    display: inline-block;
    color: #333;
}
.present .presentm .rob .rushing span{
    width: 72px;
    height: 18px;
    /* margin: 11px 25px 9px 25px; */
    color: #fff;
}
.present .presentm .rob .prices{
    display: inline-block;
    width: 100px;
    height: 24px;
    font-size: 30px;
    color: #DE1C31;
    margin-top: 62px;
    padding-right: 87px;
}
.present .presentm .rob .buy-bottom-tab{
    display: inline-block;
    padding-left: 20px;
    border-left: 1px solid #999;
    width: 290px;
    margin-top: 50px;
}    
.present .presentm .rob .buy-bottom-tab table{
    border-collapse: separate;
}

/* h2{
    font-size: 20px;
} */
.container1{
    width: 1124px;
    height: 405px;
    margin: 0 auto;
    background-color: #fff;
}
.rob .shop .el-dialog__wrapper .el-dialog .el-dialog__body{
    padding: 0;
}
.container1 .closee{
    background-color: #EBEBEB;
    width: 1084px;
    height: 77px;
}
.container1 .closee .page-header{
    padding: 28px 42px;
    display: inline-block;
}
.container1 .closee .close{
    float: right;
    width: 41px;
    height: 41px;
    padding: 18px 34px;
    display: inline-block;
}
.container1 .table tr th{
    text-align: left;
    height: 56px;
    border-bottom: #999;
}
.container1 .table tr td{
    text-align: left;
    height: 56px;
}
.container1 .table tr th:first-child{
    padding-left: 75px;
}
.container1 .table tr td:first-child{
    padding-left: 75px;
}
.container1 .table tr .col-xs-3 .border{
    width: 74px;
    height: 21px;
    display: inline-block;
    margin-left: 18px;
}
.container1 .table tr .col-xs-3 .border .btn-default{
    float: left;
    display: block;
    width: 17px;
    height: 19px;
    border: 1px solid #d9d9d9;
    background-color: #f7f7f7;
    color: inherit;
    text-align: center;
    line-height: 19px;
    
}
.container1 .table tr .col-xs-3 .border .item_num{
    float: left;
    width: 36px;
    height: 19px;
    border: 0;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
}
.container1 .shopCart-bottom{
    width: 400px;
    margin: 164px 18px 42px 780px;
    height: 30px;
}
.container1 .shopCart-bottom .span{
    display: inline-block;
}
.container1 .shopCart-bottom .rushing{
    width: 112px;
    height: 30px;
    background-color: #DE1C31;
    border-radius: 10px;
    display: inline-block;
}
.container1 .shopCart-bottom .rushing span{
    display: block;
    color: #fff;
    margin: 0 20px;
    padding: 5px 0;
}
#el-popover-1284{
    top:2589px !important;
    left: 33px !important;
}
.shop .el-dialog__wrapper .el-dialog{
    width: 1124px !important;
    height: 482px !important;
    /* overflow: hidden; */
}


</style>