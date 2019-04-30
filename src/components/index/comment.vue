<template>
    <article>
        <div class="shop center">
            <div class="content-title clear">
                <h3>热门点评</h3>
                <span ><router-link :to="{name:'comment'}" class="sort active">更多</router-link></span>
            </div>
            <div class="wrap">
                <template>
                <div class="comment" v-for="item in $store.state.home.comment">
                    <img src="item.img">
                    <h3 class="s-name">{{item.name}}</h3>
                    <div class="comment-img">
                        <el-rate
                                v-model="item.score"
                                disabled
                                :colors="['#FF2B3B', '#FF2B3B', '#FF2B3B']"
                        >
                        </el-rate>
                    </div>
                    <div class="comment-con">{{item.particulars}}</div>
                </div>
                </template>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>