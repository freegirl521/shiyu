<template>
    <div>
        <!-- 点评 -->
        <div class="netizensComment common_style">
            <div class="infoCenter clearfloat">
                <!-- 网友点评title -->
                <div class="commentTit clearfloat" >
                    <p class="commentLeft">网友点评(<i>{{$store.state.commentDetail.shopComments[0].comments}}</i>)</p>
                    <!-- $store.state.commentDetail.shopComments. -->
                    <!--<p class="commenRight">
                         <span>质量排序</span>
                        <span>时间排序</span>
                    </p> -->
                </div>
                <!-- 点击进行模糊搜索 -->
                <div class="searchFont clearfloat">
                    <!-- 点击传参然后返回包含innerHTML的评论 -->
                    
                    <p class="first" @click="backMsg(customer)">{{customer}}</p>
                    <p class="Second" @click="backMsg(servefast)">{{servefast}}</p>
                    <p class="third" @click="backMsg(parking)">{{parking}}</p>
                    <p class="fourth" @click="backMsg(afternoon)">{{afternoon}}</p>
                    <p class="fifth" @click="backMsg(literary)">{{literary}}</p>
                    <p class="sixth" @click="backMsg(dinner)">{{dinner}}</p>
                </div>
                <!-- 好评搜索单选 -->
                <div class="assessbtn">
                    <el-radio-group v-model="radio" @change="two">
                        <el-radio :label="0" >全部</el-radio>
                        <el-radio :label="1">好评</el-radio>//1-2
                        <el-radio :label="2" >中评</el-radio>//3
                        <el-radio :label="3" >差评</el-radio>//4-5
                    </el-radio-group>
                </div>
                <!-- 评论正文$store.state.commentDetail.shopComments. -->
                <div class="commentText " v-for="(item,index) in $store.state.commentDetail.shopComments" :key="index">
                    <!-- 评论信息 -->
                    <dl class="comInformation">
                        <!-- 评论头像 -->
                        <dt class="headSculpture">
                            <img :src=item.userimg alt="">
                        </dt>
                        <!-- 用户名及等级 -->
                        <dd class="comUsername">
                            <p>
                                <span>{{item.username}}</span>
                                <img src="../../assets/img/store_details/Lv4@2x.png" alt="">
                            </p>
                        
                        </dd>
                        <!-- 评论星星 -->
                        <dd class="commentStar">
                            <el-rate
                                v-model="item.score"
                                disabled
                                show-score
                                :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                text-color="#DE1C31"
                                score-template="{value}">
                            </el-rate>
                                <!-- 人均多少 -->
                                人均<span>{{item.averageprice}}</span>元
                        </dd>
                        <!-- 评论内容 -->
                        <dd class="comText">
                            <p class="comMainText">
                                {{item.evaluate.split("|")[0]}}
                            </p>
                            
                            <el-collapse >
                                <el-collapse-item title=""  class="right" >
                                    
                                    <div>
                                        
                                        <p class="comMainText">
                                            {{item.evaluate.split("|")[1]}}
                                        </p>
                                    </div>
                                    <div class="comMainText">
                                        {{item.evaluate.split("|")[2]}}                                        
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </dd>
                        <!-- 评论图片 -->
                        <dd>
                            <p class="comMainText" v-for="(ele,index) in item.imgs" :key="index">
                        
                                    <img :src=ele alt="">
                                   
                            </p>
                        </dd>
                        <!-- 店铺信息 -->
                        <dd class="comTextBottom">
                            <span>{{item.createdate}}</span>
                            <span>{{item.shopname}}</span>
                            <p class="comTextRight">
                                <span>赞(<i>{{item.commenttop }}</i>)</span>
                                <span>回应(<i>{{item.collect}}</i>)</span>
                                <span>收藏(<i>{{item.countco}}</i>)</span>
                            </p>
                        </dd>
                    </dl>
                    
                    
                </div>
                <div class="moreReviews" @click="getmore">
                        更多点评(<i>{{$store.state.commentDetail.shopComments[0].comments}}</i>)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"storeDetailComment",
         data() {
            return {
                count:3,
                customer:"回头客",
                servefast:"上菜快",
                parking:"停车方便",
                afternoon:"下午茶",
                literary:"文艺清新",
                dinner:"请客",
                test:"",
                scoreid:"",
                // 评论好评单选
                radio: 0,
                //  星级只读
                // value: 3,
                //展开
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            
            },
            backMsg(back){
                this.test=back;
            // console.log(back);
            // var backstr=back;
            // console.log(backstr);
               this.$store.dispatch("getShopComment",{text:back,shopid:13,scoreid:this.scoreid,count:3});
            },
            two(){
                // this.scoreid=this.radio;
                // console.log(222222222222222,this.radio);
                this.$store.dispatch("getShopComment",{text:this.test,shopid:13,scoreid:this.radio,count:3});
            },
            getmore(){
                this.count+=3;
                console.log(this.count);
                this.$store.dispatch("getShopComment",{text:this.test,shopid:13,scoreid:this.radio,count:this.count});
            }
        },
        mounted(){
            this.$store.dispatch("getShopComment",{text:"",shopid:13,scoreid:0,count:3});//this.$route.query.shopid
        }
    }
</script>

<style lang="scss" scoped>

</style>