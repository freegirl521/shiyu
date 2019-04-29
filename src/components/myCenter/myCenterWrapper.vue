<template>
    <div class="wrapper">
        <div class="header-box">
            <div class="home-header">
                <div class="header-nav">
                    <div class="pic-txt head-user">
                        <div class="pic">
                            <a href="#" title="">
                                <img :src="this.userImg">
                            </a>
                        </div>
                        <div class="txt">
                            <div class="tit">
                                <h2 class="name">{{this.userName}}</h2>
                                <div class="user-btn">
                                    <!--此处去个人设置中心-->
                                    <a href="#" title="编辑资料">[编辑资料]</a>
                                    <!--此处去我的点评网-->
                                    <a href="#">去我的点评>></a>
                                </div>
                            </div>
                            <div class="user-info">
                                <span class="stars">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>

                            <!--导航start-->
                            <div class="tabs-box clear">
                                <!--<div class="tab-nav">-->
                                <ul class="clear">
                                    <router-link to="/centerIndex"><li >首页</li></router-link>
                                    <router-link to="/centerComment"><li>点评</li></router-link>
                                    <router-link to="/centerCollect"><li><a href="javascript:;">收藏</a></li></router-link>
                                    <router-link to="/centerPosts"><li><a href="javascript:;">帖子</a></li></router-link>
                                    <router-link to="/centergroup"><li><a href="javascript:;">团购</a></li></router-link>
                                    <!--<router-link to="/dingzuo"><li><a href="javascript:;">订座</a></li></router-link>-->
                                    <router-link to="/centerIndent"><li><a href="javascript:;">订单</a></li></router-link>
                                    <router-link to="/shezhi"><li><a href="javascript:;">设置</a></li></router-link>
                                </ul>
                                <!--</div>-->
                            </div>
                            <!--导航end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../assets/css/myCenter/userInfo.css"
    export default {
        name: "myCenterWrapper",
        data(){
                return {
                    userName:"好多鱼",
                    userImg :require("../../assets/img/myCenter/0190408154642.jpg"),
                    cur : -1,
                    flag : false //鼠标点击后变成true，鼠标进入进出事件就不会改变背景图
                }
    },
        methods : {
            enter(idx){
                if(!this.flag){
                    this.cur = idx;
                }
            },
            leave(){
                if(!this.flag){
                    this.cur = -1;
                }
            },
            Selected(n){
                this.flag = true;
                this.cur = n;
            }
        }
       /* el : '#score-box',
        data : {

        },*/

    }
</script>

<style scoped lang="scss">
    .router-link-active{
        li{
            background: #DE1C31;
            color: white;
        }

    }


</style>