<template>

        <div class="clear fl">
            <div class="sassfor-right">
                <p class="sassName" >{{this.pageInfo.list[0].shopLog.shopname}}</p>
                <p class="sassStatus">该点评为匿名点评</p>
            </div>
            <div class="sassfor-main">
                <div class="sass-mes">
                    <p>{{this.pageInfo.list[0].shopLog.shopads}}</p>
                    <div class="sass-sco-mon clear">
                        <div id="score-box">
                            <!--<div v-for="n in 5" @mouseenter="enter(n)" @mouseleave="leave()" @click="Selected(n)" :class="{'on':cur>=n}"></div>-->
                        </div>

                        <div class="sass-mon">
                            人均&nbsp;&nbsp;&nbsp;
                            ￥<i>{{this.pageInfo.list[0].averagePrice}}</i>
                        </div>
                    </div>
                </div>
                <div class="sass-txt-img">
                    <div class="sasa-txt">
                            <span>
                                {{this.pageInfo.list[0].evaluate}}
                            </span>
                    </div>
                    <div class="sasss-img">
                        <img :src="this.pageInfo.list[0].commentimg">
                    </div>
                </div>
                <div class="likes clear" id="favorite">
                    <p class="ff fl">喜欢的菜：</p>
                    <div class="rl" id="likefoods">
                        <span class="rr" v-for="item in this.pageInfo.list[0].menuList">{{item}}</span>
                    </div>
                </div>
                <div class="timebott clear">
                    <div class="ltime fl">
                        发表于
                        <span>{{this.pageInfo.list[0].createddate}}</span>
                    </div>
                    <div class="zan fr clear">
                        <ul>
                            <li>
                                <i>{{this.pageInfo.list[0].commenttop}}</i>
                                <span>赞</span>
                            </li>
                            <li><span>回应</span></li>
                            <li><span>编辑</span></li>
                            <li><span>删除</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        name: "commentTem",
       /* data(){
            return {

            }
        },*/
        props:['pageInfo']
    }
</script>

<style scoped>

</style>