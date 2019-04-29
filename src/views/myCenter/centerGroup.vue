<template>
    <div class="main-w">
        <div class="modebox clear">
            <span class="sc-left fl font24">团购</span>
            <div class="groupList fl">
               <group-tem></group-tem>
                <div class="lists clear">
                    <a href="javascript:;" class="fr">预定成功</a>
                    <h2>宽板凳重庆火锅（传媒大学店）</h2>

                    <p>
                            <span>
                                <i class="month">11</i>月
                                <i class="day">01</i>日
                            </span>
                        <span>周六</span>
                        <span>19:34</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import groupTem from "../../components/myCenter/groupTem"
    export default {
        name: "centerGroup",
        data(){
            return {
                index:0,


        }
        },
        components:{
            groupTem,
        }
    }
</script>

<style scoped>

</style>