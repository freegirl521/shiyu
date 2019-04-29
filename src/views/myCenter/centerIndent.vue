<template>
    <div class="main-w">
        <div class="modebox clear font20">
            <span class="sc-left fl font24" >订单</span>
            <div class="tabs fl" id="indent">
                <div class="tab">
                    <a href="javascript:;" :class="{cur:index===0}" @click="index=0" >全部订单</a>
                    <a href="javascript:;" :class="{cur:index===1}" @click="index=1" >代付款</a>
                    <a href="javascript:;" :class="{cur:index===2}" @click="index=2" >待使用</a>
                    <a href="javascript:;" :class="{cur:index===3}" @click="index=3" >待评价</a>
                    <a href="javascript:;" :class="{cur:index===4}" @click="index=4" >退款/售后</a>

                </div>
                <div class="tab-list">
                    <div v-if="index===0" class="clear">
                        <ident-tem v-for="item in $store.state.myCenter.pageInfo_indent.list" :key="item.id" :list="item"></ident-tem>
                    </div>
                    <div v-if="index===1" class="clear">
                       <indet-center-nu :pic="src2"></indet-center-nu>
                    </div>
                    <div v-if="index===2" class="clear">
                        <div class="pic fl">
                            <img :src="src2">
                        </div>
                        <div class="txt2 fl">
                            <h4>没有待使用的订单哦</h4>
                            <p>您还没有下订单~
                                <a href="#" class="red">赶快去下订单吧>></a>
                            </p>
                        </div>
                    </div>
                    <div v-if="index===3" class="clear">
                        <div class="pic fl">
                            <img :src="src2">
                        </div>
                        <div class="txt2 fl">
                            <h4>没有待评价的订单哦</h4>
                            <p>您还没有下订单~
                                <a href="#" class="red">赶快去下订单吧>></a>
                            </p>
                        </div>
                    </div>
                    <div v-if="index===4" class="clear">
                        <div class="pic fl">
                            <img :src="src2">
                        </div>
                        <div class="txt2 fl">
                            <h4>没有退款/售后的订单哦</h4>
                            <p>您还没有下订单~
                                <a href="#" class="red">赶快去下订单吧>></a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import identTem from "../../components/myCenter/identTem"
    // import indetCenterNu from "../../components/myCenter/identCenterNu"
    export default {
        name: "centerIndent",
        data(){
            return {
                index:0,
                src2:require("../../assets/img/myCenter/tiepic.png"),
                pageInfo:{
                    pageNum:1,//当前页
                    pageSize:5,//每页的数量
                    size:5,//当前页的数量
                    pages:3,//总页数
                    total:15,//总记录数
                    list:[
                        {
                            indentId:0,//订单id
                            indenttype:1,//订单状态
                            pricesum:188,//总价
                            creatadate:"2019-11-1 19:34",//创建时间
                            shopLog:{
                                shopname:"定福庄店"//店名
                            },
                            menuInfo:{
                                menuname:"乌鸡汤"//菜名
                            }
                        }
                    ]
                }
            }
        },
        components:{
            identTem,
            // indetCenterNu,
        },
        mounted(){
            this.$store.dispatch("getIndent")
        }

    }
</script>

<style scoped>

</style>