<template>
    <div class="block">

        <el-carousel :autoplay="true">
            <el-carousel-item v-for="item in 5" :key="item">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "swiper"
    }
</script>

<style scoped>


.block{
    height: 296px;
}

    .el-carousel__item:nth-child(n) {
        background: url("../../static/index/swiper.png") no-repeat;
        background-size: 100% auto;
        display: block;
    }

</style>