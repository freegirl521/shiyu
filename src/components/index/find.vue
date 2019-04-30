<template>
    <article>
        <div class="find center ">

            <div class="content-title clear">
                <h3>发现美食</h3><span>更多</span>
            </div>
            <div class="ul">
            <template>
            <div class="content-item" v-for="item in $store.state.home.menu">
                <img src="item.img">
                <h4 class="find-name">{{item.name}}</h4>
                <p>共有<span class="find-comment">{{item.menuCommntount}}</span>个点评</p>
                <div class="star">
                    <el-rate
                            v-model="item.score"
                            disabled
                            :colors="['#FF2B3B', '#FF2B3B', '#FF2B3B']"
                            >
                    </el-rate>
                </div>
            </div>
            </template>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "find",
        data(){
            return {

            }
        },
    }
</script>

<style scoped>
.ul{
    width: 1212px;
    overflow: hidden;
}
.el-rate__icon{

    font-size: 20px !important;
}
</style>