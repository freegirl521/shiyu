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
    import myCentertop from "../../components/myCenter/myCentertop"
    import myCenterWrapper from "../../components/myCenter/myCenterWrapper"
   
    export default {
        /*name: "myCenter",*/
        components:{
            myCentertop,
            myCenterWrapper,

        }

    }
</script>

<style src="../../assets/css/myCenter/common.css" scoped>
</style>
<style src="../../assets/css/myCenter/userInfo.css" scoped>
</style>
