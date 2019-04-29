<template>
    <div class="sassList clear">
        <div class="sassfor-top fl clear">
            <span class="sassfor-left">点评</span>
        </div>
        <div class="sassfor fl clear">

                <comment-tem v-for="(item,index) in $store.state.myCenter.pageInfo_comm.list" :key="index" :list="item"></comment-tem>
        </div>

        <div class="moresass clear">
            <a href="javascript:;" class="morel fl">被屏蔽的点评>></a>

               <!-- <page-center class="pagina fr" :page="pageInfo"></page-center>-->

        </div>
    </div>

</template>

<script>
    import  commentTem from "../../components/myCenter/commentTem"
    import  pageCenter from "../../components/myCenter/pageCenter"
    export default {
        name: "centerComment",

        data() {
            return {

                pageInfo: {


                    pagesize:12,//每页的数量
                    pageNum: 1,//当前页

                    size: 5,//当前页的数量
                    pages: 3,//总页数
                    total: 15,//总记录数
                    list: [//点评
                        {
                            shopLog: {
                                shopnid: 1,
                                shopname: "串串香（定福庄店）",
                                shopads: "定福庄北街",
                            },
                            score: 5,//评分
                            averagePrice: 30,//人均消费
                            commentimg: require("../../assets/img/myCenter/u=3003301855,516753607&fm=26&gp=0@2x.png"),//评价图片地址
                            evaluate: "去了很多次",//评价正文
                            commenttop: 1110,//点赞数
                            createddate: "2018-09-12",//点评时间
                            menuList: [//喜欢的菜
                                "牛蹄筋",
                                "泡面"
                            ]
                        },
                    ]
                },

            }
        },
        components:{
            commentTem,
            pageCenter
        },
        mounted(){
            this.$store.dispatch("getComment");
        }
    }
       /* mounted:{

        },*/



</script>

<style scoped>

</style>