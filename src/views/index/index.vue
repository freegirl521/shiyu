<template>
    <div>
        <head-top></head-top>
        <tabs></tabs>
        <swiper></swiper>
        <find></find>
        <shop-sort></shop-sort>
        <hot></hot>
        <comment></comment>


    </div>
</template>

<script>
    
    import tabs from "../../components/index/tab";
    import HeadTop from "../../components/index/HeadTop";
    import swiper from "../../components/index/swiper";
    import find from "../../components/index/find";
    import shopSort from "../../components/index/shopSort";
    import hot from "../../components/index/hot";
    import comment from "../../components/index/comment";

    export default{
        name:'index',
        mounted(){
            // this.$store.dispatch("getAll",)
        },

        components:{
            HeadTop,
            tabs,
            swiper,
            find,
            shopSort,
            hot,
            comment,
        },

    }
</script>

<style scoped>
@import "../../static/index_css/base.css";
@import "../../static/index_css/index.css";
@import "../../static/index_css/public.css";

</style>
