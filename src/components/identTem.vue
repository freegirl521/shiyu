<template>

        <div class="indentList clear">
            <div class="oopic fl">
                <img :src="src2">
            </div>
            <div class="ininfo fl clear">
                <div class="infl fl">
                    <h2>{{this.list.shopLog.shopname}}</h2>
                    <div>
                        <p>有效期至<i>2014-09-01</i></p>
                        <p>数量<i>1</i></p>
                    </div>
                </div>
                <div class="infr fr clear">
                    <span class="fl">总价：<i>{{this.list.pricesum}}</i></span>
                    <span class="fr" v-if="list.indenttype===1">预定成功</span>
                    <span class="fr" v-if="list.indenttype===0">预定失败</span>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "identTem",
        props:['list','src2']
    }
</script>

<style scoped>

</style>