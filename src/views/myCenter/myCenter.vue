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

    // import "../../assets/css/myCenter/common.css"
    // import  "../../assets/css/myCenter/userInfo.css"
    <link rel="stylesheet" type="text/css" href="../../assets/css/myCenter/common.css"/>;
	<link rel="stylesheet" type="text/css" href="../../assets/css/myCenter/userInfo.css"/>
    export default {
        /*name: "myCenter",*/
        components:{
            myCentertop,
            myCenterWrapper,

        }

    }
</script>

<style scoped>

</style>