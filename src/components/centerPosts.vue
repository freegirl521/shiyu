<template>
    <div class="main-w">
        <div class="modebox clear">
            <span class="tie-left fl">帖子</span>
            <div class="tabs fl" id="tabchange">
                <div class="tabbott">
                    <a :class="{cur:index===0}" @click="index=0" href="javascript:;">发表的帖子</a>
                    <a :class="{cur:index===1}" @click="index=1" href="javascript:;">回应的帖子</a>
                </div>

                <div class="tieinfo ">
                    <div v-if="index===0" class="clear">
                        <div class="pic fl">
                            <img :src="src">
                        </div>
                        <div class="txt2 fl">
                            <h4>试试发表第一个帖子</h4>
                            <p>社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~
                                <a href="#" class="red">快去社区发表处女贴>></a>
                            </p>

                        </div>
                    </div>
                    <div v-if="index===1" class="clear">
                        <div class="pic fl">
                            <img :src="src">
                        </div>
                        <div class="txt2 fl">
                            <h4>试试回应第一个帖子</h4>
                            <p>社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~
                                <a href="#" class="red">快去社区发表处女贴>></a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "centerPosts",
        data(){
            return {
                src:require("../assets/img/myCenter/tiepic.png"),
                index:0,

            }
        }

    }
</script>

<style scoped>

</style>