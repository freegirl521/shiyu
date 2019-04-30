<template>
    <div>
        <div class="pic fl">
            <img :src="pic">
        </div>
        <div class="txt2 fl">
            <h4>没有待付款的订单哦</h4>
            <p>您还没有下订单~
                <a href="#" class="red">赶快去下订单吧>></a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "identCenterNu",
        props:['pic']
    }
</script>

<style scoped>

</style>