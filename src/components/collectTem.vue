<template>
    <div class="sc-list">
        <h2>{{this.list.shopLog.shopname}}</h2>
        <div class="scll">
            <div id="score-box">

                <!--<div v-for="n in 5" @mouseenter="enter(n)" @mouseleave="leave()" @click="Selected(n)" :class="{'on':cur>=n}"></div>-->
            </div>
            <p>{{this.list.shopLog.shopads}}</p>
        </div>
        <div class="scllbott">
            <span>{{this.list.savetime}}</span>
            <span>收藏</span>
            <span>|</span>
            <a href="javascript:;" class="red">编辑</a>
            <a href="javascript:;" class="red">删除</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collectTem",
        props:['list']
    }
</script>

<style scoped>

</style>