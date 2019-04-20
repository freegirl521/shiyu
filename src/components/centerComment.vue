<template>
    <div class="sassList clear">
        <div class="sassfor clear">
            <div class="sassfor-top fl clear">
                <span class="sassfor-left">点评</span>
            </div>
            <comment-tem :pageInfo="pageInfo"></comment-tem>
        </div>

            <div class="moresass clear">
                <p class="morel fl">被屏蔽的点评>></p>
                <div class="pagina fr">
                    <!--<script type="text/x-template" id="page">
                        <ul class="pagination">
                            <li v-show="current != 1" @click="current&#45;&#45; && goto(current)">
                                <a href="#" rel="external nofollow" rel="external nofollow" rel="external nofollow" >上一页</a>
                            </li>
                            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                                <a href="#" rel="external nofollow" rel="external nofollow" rel="external nofollow" >{{index}}</a>
                            </li>
                            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
                                <a href="#" rel="external nofollow" rel="external nofollow" rel="external nofollow" >下一页</a>
                            </li>
                        </ul>
                    </script>-->
                    <!--<div id="app">
                        <page></page>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import  commentTem from "./commentTem"

    export default {
        name: "centerComment",

        data(){
            return {
                pageInfo:{
                    pageNum:1,//当前页
                    pageSize:5,//每页的数量
                    size:5,//当前页的数量
                    pages:3,//总页数
                    total:15,//总记录数
                    list:[//点评
                        {
                            shopLog:{
                                shopnid:1,
                                shopname:"串串香（定福庄店）",
                                shopads:"定福庄北街",
                            },
                            score:5,//评分
                            averagePrice:30,//人均消费
                            commentimg:require("../assets/img/myCenter/u=3003301855,516753607&fm=26&gp=0@2x.png"),//评价图片地址
                            evaluate:"去了很多次",//评价正文
                            commenttop:1110,//点赞数
                            createddate:"2018-09-12",//点评时间
                            menuList:[//喜欢的菜
                                 "牛蹄筋",
                                 "泡面"
                             ]
                        },
                    ]
                },

            }
        },
       /* mounted:{

        },*/
        components:{
            commentTem,
        }

    }
</script>

<style scoped>

</style>