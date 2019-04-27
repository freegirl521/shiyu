<template>
    <div class="header-container">
        <div class="top-nav">
            <div class="top-nav-container clear">
                <!--logo-->
                <div class="mini-logo">
                    <a target="_blank" class="item" href="index.html">
                        <i class="icon-logo"></i>
                    </a>
                </div>
                <!--导航-->
                <div class="quick-menu">

                  <!--  <p class="userinfo-container clear">-->
                        <a target="_blank" href="#" class="item mtop">
                            <img :src="this.userImg">
                        </a>
                        <a target="_blank" href="#" class="item" >
                            {{this.userName}}
                        </a>
                        <span class="seprate">|</span>
                        <!--个人中心-->
                        <a target="_blank" href="#" class="item">个人中心</a>

                        <!--商户服务-->
                        <a target="_blank" href="#" class="item">商户中心</a>
                  <!--  </p>-->



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../assets/css/myCenter/userInfo.css"
    export default {
        name: "myCentertop",
        data(){
            return {
               /* */
                userName:"好多鱼",
                userImg :require("../assets/img/myCenter/0190408154642.jpg")

            }

        },

    }

</script>

<style scoped>

</style>