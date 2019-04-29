<template>

        <div class="fl clear ">
            <div class="sassfor-right">
                <p class="sassName" >{{this.list.shopLog.shopname}}</p>
                <p class="sassStatus">该点评为匿名点评</p>
            </div>
            <div class="sassfor-main">
                <div class="sass-mes">
                    <p>{{this.list.shopLog.shopads}}</p>
                    <div class="sass-sco-mon clear">
                        <div id="score-box">

                            <center-star :size="48" :score="this.list.score"></center-star>
                        </div>

                        <div class="sass-mon">
                            人均&nbsp;&nbsp;&nbsp;
                            ￥<i>{{this.list.averageprice}}</i>
                        </div>
                    </div>
                </div>
                <div class="sass-txt-img">
                    <div class="sasa-txt">
                            <span>
                                {{this.list.evaluate}}
                            </span>
                    </div>
                    <div class="sasss-img">
                        <img src="this.list.commentimg">
                    </div>
                </div>
                <div class="likes clear" id="favorite">
                    <p class="ff fl">喜欢的菜：</p>
                    <div class="rl" id="likefoods">
                        <span class="rr" v-for="item in this.list.menunames">{{item}}</span>
                    </div>
                </div>
                <div class="timebott clear">
                    <div class="ltime fl">
                        发表于
                        <span>{{this.list.createdate}}</span>
                    </div>
                    <div class="zan fr clear">
                        <ul>
                            <li>
                                <b>&nbsp;&nbsp;</b>
                                <i>{{this.list.commenttop}}</i>
                                <a href="#">赞</a>
                            </li>
                            <li><a href="#">回应</a></li>
                            <li><a href="#">编辑</a></li>
                            <li><a href="javascript:;" @click="delete_comm(this.list.shopnid)">删除</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    import centerStar from "./centerStar"
    export default {
        name: "commentTem",
       /* data(){
            return {

            }
        },*/
        props:['pageInfo','list'],
        components:{
            centerStar,
        },
        methods:{
            delete_comm(id){
                this.$store.dispatch("delete_comm",{shopnid:id})
            }
        }
    }
</script>

<style scoped>

</style>