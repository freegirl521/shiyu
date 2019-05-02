<template>
    <div class="aside">
        <myleft></myleft>
        <div class="main">
            <my-info-tem></my-info-tem>
        </div>

    </div>
</template>

<script>
    import myleft from "../../components/myCenter/myleft"
    import myInfoTem from "../../components/myCenter/myInfoTem"
    export default {
        name: "myInfo",
        components:{
           myleft,
            myInfoTem
        }
    }
</script>

<style scoped>
    .aside{
        width: 1200px;
        margin: 0 auto;
        background: #CCCCCC;
    }
</style>