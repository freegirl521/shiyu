<template>
    <div>
    <div class="nav">
        <div class="navGoods">
                 <boxx></boxx>
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
                    <img src="../../assets/img/store_information/u=3600432712,3894872089&fm=26&gp=0@2x.png">
                </div>
                <div class="content">
                    <div class="screening">
                        <span class="screen">筛选:</span>
                        <div class="border">
                            <span class="map">全部地区</span>
                        </div>
                    </div>
                    <div class="hrone"></div>
                    <div class="resName">马可波罗西餐厅</div>
                    <!-- <div class="star">
                        <img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png">
                        <img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png">
                        <img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png">
                        <img src="../../assets/img/store_information/星 (1) 拷贝 5@2x.png">
                        <img src="../../assets/img/store_information/星 拷贝 5@2x.png">
                        <span>4.0</span>
                    </div> -->
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        :colors="['#DE1C31','#DE1C31','#DE1C31']"
                        text-color="#DE1C31"
                        score-template="{value}">
                    </el-rate>
                    <div class="address">
                        <span class="add">地址：</span>
                        <span class="shopAddress">北京市昌平区沙阳路18号</span>
                    </div>
                    <div class="tel">
                        <span class="telPhone">电话：</span>
                        <span class="phone">010-1245846557</span>
                    </div>
                    <div class="times">
                        <span class="timess">营业时间：</span>
                        <span class="time">周一至周日9:00~22:00</span>
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
                                <td class="tc"><span class="shopPrices">100</span><span>元</span></td>
                            </tr>
                            <tr class="total">
                                <td></td>
                                <td>价值</td>   
                                <td><span class="shopPrices">100</span><span>元</span></td> 
                            </tr>
                            <tr class="total">
                                <td></td>
                                <td>团购价</td>   
                                <td><span class="proPrices">95</span><span>元</span></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="evenAll all">
                    <span class="people">店内人均消费：</span>
                    <span class="even">80</span><span>元</span>
                </div>
                <div class="reference all">
                    店内部分价格菜品参考：
                </div>
                <div class="dish all">
                    <span class="dishName">铁板菲力牛排</span>
                    <span class="foodPrice">108</span>/<span>份</span>
                </div><div class="dish all">
                    <span class="dishName">牛油果袋</span>
                    <span class="foodPrice">88</span>/<span>份</span>
                </div>
            </div>
           <div class="notess" id="notes">
               <div class="notesOne">
                    购买须知
               </div>
               <div class="hrTwo">
               </div>
               <div class="noteslist">
                    <p class="deadline">有效期：2018-03-21至2019-12-16</p>
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
                <div class="dishImage">
                    <img src="../../assets/img/store_information/u=3829596455,4121332688&fm=26&gp=0@2x.png" alt="">
                    <img src="../../assets/img/store_information/timg (1)@2x(2).png" alt="">
                    <img src="../../assets/img/store_information/timg (3)@2x.png" alt="">
                </div>
            </div>
            <div class="rob">
                <div class="rushing">
                    <span>立即抢购</span>
                </div>
                <div class="prices">
                        <div class="proPrices"><i>￥</i><span>95</span> </div>
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
                                &#165;150
                            </td>
                            <td width="50"></td>
                            <td>
                                <span class="J_dealCount">
                                90天消费34份
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

    // import countdown from "../../components/storeInformation/countdown.vue"
    //  import countdown from "../../components/storeInformation/countIdown.vue"
    // import modalDialong from "../../components/storeInformation/modalDialog.vue"
    import boxx from "../../components/storeInformation/boxx.vue"
    import right from "../../components/storeInformation/right.vue"
    // import { realconsole } from '../../assets/js/details.js'
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
        //countdown倒计时
        components:{
            // countdown
            // countIdown
            // modalDialong
            boxx,
            right
        }
  }
</script>

<style lang="scss" scoped>

</style>