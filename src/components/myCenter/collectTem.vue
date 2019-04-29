<template>
    <div class="sc-list">
        <h2 class="font24">{{this.list.shopLog.shopname}}</h2>
        <div class="scll font18">
            <div id="score-box">
                <center-star :size="48" :score="this.list.shopLog.commentscore"></center-star>
                <!--<div v-for="n in 5" @mouseenter="enter(n)" @mouseleave="leave()" @click="Selected(n)" :class="{'on':cur>=n}"></div>-->
            </div>
            <p>{{this.list.shopLog.shopads}}</p>
        </div>
        <div class="scllbott font18">
            <span>{{this.list.savetime}}</span>
            <span>收藏</span>
            <span>|</span>
            <a href="javascript:;" class="red">编辑</a>
            <a href="javascript:;" class="red" @click="delete_coll(list.id)">删除</a>
        </div>
    </div>
</template>

<script>
    import centerStar from "./centerStar"
    export default {
        name: "collectTem",
        props:['list'],
        components:{
            centerStar,
        },
        methods:{
            delete_coll(id){
                console.log(id);
                this.$store.dispatch("delete_coll",{id:id});
                this.$store.dispatch("getCollect")
            }
        }
    }
</script>

<style scoped>

</style>