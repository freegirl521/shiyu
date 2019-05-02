<template>
    <div class="main-w">
        <div class="modebox clear">
            <span class="tie-left fl font24">帖子</span>
            <div class="tabs fl" id="tabchange">
                <div class="tabbott font24">
                    <a :class="{cur:index===0}" @click="index=0" href="javascript:;">发表的帖子</a>
                    <a :class="{cur:index===1}" @click="index=1" href="javascript:;">回应的帖子</a>
                </div>

                <div class="tieinfo ">
                    <div v-if="index===0" class="clear">
                        <div v-if="$store.state.myCenter.pageInfo_post.list!==undefined&&$store.state.myCenter.pageInfo_post.list.length === 0">
                            <div class="pic fl">
                                <img :src="src">
                            </div>
                            <div class="txt2 fl font20">
                                <h4>试试发表第一个帖子</h4>
                                <p>社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~
                                    <a href="#" class="red">快去社区发表处女贴>></a>
                                </p>

                            </div>
                        </div>

                        <div v-if="$store.state.myCenter.pageInfo_post.list!==undefined&&$store.state.myCenter.pageInfo_post.list.length > 0">
                            <table>
                                <thead>
                                    <tr class="post_tr">
                                        <th>标题</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in $store.state.myCenter.pageInfo_post.list" :key="index">
                                        <td><a href="#">{{item.postname}}</a></td>
                                        <td><a href="#">{{item.posttext}}</a></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div v-if="index===1" class="clear">
                        <div class="pic fl">
                            <img :src="src">
                        </div>
                        <div class="txt2 fl font20">
                            <h4>试试回应第一个帖子</h4>
                            <p>社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~
                                <a href="#" class="red">快去社区发表处女贴>></a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "centerPosts",
        data(){
            return {
                src:require("../../assets/img/myCenter/tiepic.png"),
                index:0,

            }
        },
        components:{

        },
        mounted() {
            this.$store.dispatch("getPost")
        }

    }
</script>

<style scoped>
    th{
        width: 500px;
        text-align: left;
        font-size: 20px;
    }
    td{
        width: 500px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #9da0a4;
        font-size: 20px;
        overflow: hidden;
    }
    .post_tr{
        border-bottom: 1px solid red;
    }
</style>