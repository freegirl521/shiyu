<template>
    <div class="aside">
        <navleft></navleft>
        <div class="main">
            <my-info-tem></my-info-tem>
        </div>

    </div>
</template>

<script>
    // import navleft from "../../components/myCenter/navleft"
    import myInfoTem from "../../components/myCenter/myInfoTem"
    export default {
        name: "myInfo",
        components:{
            // navleft,
            myInfoTem
        }
    }
</script>

<style>
    .aside{
        width: 1200px;
        margin: 0 auto;
        background: #CCCCCC;
    }
</style>