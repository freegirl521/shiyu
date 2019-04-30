<template>
    <article>
        <div class="find center " style="padding-bottom: 0px;">
            <div class="content-title clear">
                <h3>热帖专区</h3>
                <span >
                    <router-link :to="{name:'community'}" class="sort active">更多</router-link>
			</span>
            </div>
            <div class="text-container">
                <template>
                <div class="text-item" v-for="item in $store.state.home.post">
                    <div class="user-info clear">
                        <dl>
                            <dt><img src="item.userImg"></dt>
                            <dd><p class="u-name">{{item.userName}}</p>
                                <p class="u-time">发表于<span>{{item.date | date}}</span></p>
                                <p class="u-com"><span>点赞<i>{{item.likeNum}}</i></span><span>回帖<i>{{item.returnNum}}</i></span></p>
                            </dd>
                        </dl>
                    </div>
                    <div class="content">
                        {{item.particulars}}
                    </div>
                    <div class="u-img" v-for="(info,index) in item.imgs">
                        <img :src="info">
                        <!--<img src="img/tag1.png">-->
                        <!--<img style="margin-right:0px" src="img/tag1.png">-->
                        <!--<img src="img/tag1.png">-->
                        <!--<img src="img/tag1.png">-->
                        <!--<img style="margin-right:0px" src="img/tag1.png">-->
                    </div>
                </div>
                </template>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "hot",
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>