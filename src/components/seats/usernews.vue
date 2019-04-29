<template>
    <div>
        <div class="shopHead common_style">
            <div class="infoCenter">
                <h3>{{$store.state.shopNewsList.shopname}}</h3>
                <div class="shopScore">
                    <!--评论、人均、口味、环境、服务-->
                    <div>
                        <!-- 店铺评价(几星) -->
                        <p class="shopIco">
                            <!-- v-model="$store.state.commentDetail.shopInfo.commentscore"传进来的评星数(就是原来的value) -->
                           <el-rate v-model="$store.state.shopNewsList.commentscore" disabled :colors="['#DE1C31','#DE1C31','#DE1C31']" text-color="#DE1C31" score-template="{value}">
                            </el-rate> 
                        </p>
                    </div>
                    <div>
                        <span>{{$store.state.shop.shopNewsList.commentnum}}</span> 条评论
                    </div>
                    <div>
                        人均
                        <span>{{$store.state.shop.shopNewsList.price}}</span> 元
                    </div>
                    <div>
                        口味：
                        <span>{{$store.state.shop.shopNewsList.taste}}</span>
                    </div>
                    <div>
                        环境：
                        <span>{{$store.state.shop.shopNewsList.environment}}</span>
                    </div>
                    <div>
                        服务：
                        <span>{{$store.state.shop.shopNewsList.serve}}</span>
                    </div>
                </div>
                <div class="obclear">
                    <!-- 店铺地址 -->

                    <p>地址：<span>{{$store.state.shop.shopNewsList.shopads}}</span></p>
                    <!-- 电话 -->
                    <p class="phone">电话：<span class="tel">{{$store.state.shop.shopNewsList.shopphone}}</span></p>
                    <p class="special"><b class="dib">特色</b>：
                        <span class="tuan dib" v-show="$store.state.shop.shopNewsList.feature === 1 || $store.state.shop.shopNewsList.feature === 4 || $store.state.shop.shopNewsList.feature === 5 || $store.state.shop.shopNewsList.feature === 7"></span>
                        <span class="ding dib" v-show="$store.state.shop.shopNewsList.feature === 2 || $store.state.shop.shopNewsList.feature === 4 || $store.state.shop.shopNewsList.feature === 6 || $store.state.shop.shopNewsList.feature === 7"></span>
                        <span class="wai dib" v-show="$store.state.shop.shopNewsList.feature === 3 || $store.state.shop.shopNewsList.feature === 5 || $store.state.shop.shopNewsList.feature === 6 || $store.state.shop.shopNewsList.feature === 7"></span> 
                    <p>营业时间：周一至周日 9:20-22:30</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.common_style {
padding-top: 12px;
width: 100%;
margin: 0 auto;
background: #FFFFFF;
border-bottom: 1px solid #DE1C31;

}
body .shopHead {
/* padding:1%; */
min-width: 510px;
}
body .infoCenter {
margin: 0 auto;
width: 1000px;
}
.clearfloat::after {
display: block;
clear: both;
content: "";
visibility: hidden;
height: 0;
}
.shopHead .infoCenter h3 {
padding-bottom: 1%;
font-size: 22px;
font-weight: normal;
}
.shopHead .infoCenter p {
padding-bottom: .5%;
padding-top: .5%;
}
.shopHead .infoCenter .shopScore {
padding-bottom: 1%;
}
.shopHead .infoCenter .shopScore div {
float: left;
margin-right: 1%;
}
.shopHead .infoCenter .shopIco {
width: 130px;
}
/* .shopHead .infoCenter .shopIco img,.shopHead_right img{
display: inline;
width:20px;
margin-right: 5px;
} */
/**/
.shopHead .infoCenter .obclear {
clear: both;
}
.shopHead .infoCenter .obclear .phone .tel {
margin-right: 20px;
}
.shopHead .infoCenter .obclear .special span {
display: inline-block;
width: 26px;
height: 26px;
margin-right: 8px;
}
/* .shopHead .infoCenter .obclear .special .tuan {
background: url("../img/store_details/tuan@2x.png") no-repeat left 0 bottom 0;
}
.shopHead .infoCenter .obclear .special .ding {
background: url("../img/store_details/tuan@2x.png") no-repeat right -30px bottom 0;
}
.shopHead .infoCenter .obclear .special .wai {
background: url("../img/store_details/tuan@2x.png") no-repeat right 0 bottom 0;
} */
.shopHead .infoCenter .obclear details {
/* display: block; */
margin-bottom: 10px;
}
.shopHead .infoCenter .obclear .openTime {
margin-bottom: 10px;
display: none;
}
.shopHead .infoCenter .shopHead_left {
float: left;
}
.shopHead .infoCenter .shopHead_left .write {
display: inline-block;
background: #DE1C31;
width: 96px;
height: 29px;
text-align: center;
line-height: 29px;
color: #FFFFFF;
border-radius: 5px;
margin-right: 14px;
}
.shopHead .infoCenter .shopHead_left .book {
display: inline-block;
width: 226px;
height: 29px;
border: 1px #DE1C31 solid;
line-height: 29px;
border-radius: 5px;
}
/* .shopHead .infoCenter .shopHead_left .book img {
vertical-align: middle;
margin: 0 10 */
.special .tuan{
    background:url("../../assets/img/login/type.png") no-repeat;
}
.special .ding{
     background:url("../../assets/img/login/type.png") no-repeat -30px 0;
}
.special .wai{
     background:url("../../assets/img/login/type.png") no-repeat -60px 0;
}
</style>