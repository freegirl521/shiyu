<template>
    <div class="main-w">
        <div class="modebox clear">
            <span class="sc-left fl">收藏</span>
            <div class="tabs fl" id="scchange">
                <div class="sc-tab">
                    <a href="javascript:;" :class="{cur:index===0}" @click="index=0" >收藏商户</a>
                    <a href="javascript:;" :class="{cur:index===1}" @click="index=1" >收藏榜单</a>
                    <a href="javascript:;" :class="{cur:index===2}" @click="index=2" >收藏帖子</a>
                    <a href="javascript:;" :class="{cur:index===3}" @click="index=3" >收藏点评</a>
                </div>
                <div class="sc-info">
                    <div v-if="index===0" class="clear">
                        <collectTem v-for="item in this.pageInfo.list" :key="item.id" :list="item"></collectTem>
                        <div class="sc-list">
                            <h2>酒井日本寿司</h2>
                            <div class="scll">
                                <div id="score-box">
                                    <!--<div v-for="n in 5" @mouseenter="enter(n)" @mouseleave="leave()" @click="Selected(n)" :class="{'on':cur>=n}"></div>-->
                                </div>
                                <p>[北京]酒仙桥路北京798艺术区751时尚设计广场A11楼56181908</p>
                            </div>
                            <div class="scllbott">
                                <span>03-28 14:35</span>
                                <span>收藏</span>
                                <span>|</span>
                                <a href="javascript:;" class="red">编辑</a>
                                <a href="javascript:;" class="red">删除</a>
                            </div>
                        </div>
                    </div>
                    <div v-if="index===1" class="clear">
                        <div class="pic fl">
                            <img :src="src1">
                        </div>
                        <div class="txt2 fl">
                            <h4>试试收藏第一个榜单</h4>
                            <p>榜单是属于DP达人们自己创建的，特定主题的商户排行榜，体现着自己的经验和品位。
                                <a href="#" class="red">查看榜单>></a>
                            </p>
                        </div>
                    </div>
                    <div v-if="index===2" class="clear">
                        <div class="pic fl">
                            <img :src="src1">
                        </div>
                        <div class="txt2 fl">
                            <h4>试试收藏第一个帖子</h4>
                            <p>社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~
                                <a href="#" class="red">查看热帖>></a>
                            </p>
                        </div>
                    </div>
                    <div v-if="index===3" class="clear">
                        <div class="pic fl">
                            <img :src="src1">
                        </div>
                        <div class="txt2 fl">
                            <h4>试试收藏第一个点评</h4>
                            <p>哪些店让人惊艳、哪些店让人难以忘怀，想发现更多意想不到的好店？
                                <a href="#" class="red">快去查看最新点评>></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import collectTem from "./collectTem"
    export default {
        name: "centerCollect",
        data(){
            return {
                index:0,
                src1:require("../assets/img/myCenter/tiepic.png"),
                pageInfo:{
                    pageNum:1,//当前页
                    pageSize:5,//每页的数量
                    size:5,//当前页的数量
                    pages:3,//总页数
                    total:15,//总记录数
                    list:[
                        {
                            id:1,//收藏编号
                            shopid:0,//店铺id
                            savetime:"2019-11-1 19:34",//收藏时间
                            shopLog:{

                                    shopname:"肯德基（北清路店）",
                                    shopads:"北京***",
                                    commentscore:5//店铺星级

                            }
                        },{
                            id:2,//收藏编号
                            shopid:1,//店铺id
                            savetime:"2019-11-1 19:34",//收藏时间
                            shopLog:{

                                shopname:"酒井日本寿司",
                                shopads:"[北京]酒仙桥路北京798艺术区751时尚设计广场A11楼56181908",
                                commentscore:5//店铺星级

                            }
                        }
                        ]
                    }

        }
        },
        components:{
            collectTem,
        }
    }
</script>

<style scoped>

</style>