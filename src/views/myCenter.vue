<template>
    <div>
        <my-centertop></my-centertop>
        <my-center-wrapper></my-center-wrapper>
        <div class="main clear">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import myCentertop from "../../components/myCentertop"
    import myCenterWrapper from "../../components/myCenterWrapper"
    import "../../assets/css/myCenter/common.css"
    // import  "../assets/css/myCenter/"
    export default {
        /*name: "myCenter",*/
        components:{
            myCentertop,
            myCenterWrapper
        }

    }
</script>

<style scoped>

</style>