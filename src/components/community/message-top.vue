<template>
        <div class="head">
               <!-- 发表者信息 -->
                <ul>
                    <li class="top-left"><img :src="$store.state.communitymessage.postInfo.userImg" alt=""></li>
                    <li class="top-right">
                        <p class="name">{{$store.state.communitymessage.postInfo.userName}}</p>
                        <p class="time">发表时间：{{$store.state.communitymessage.postInfo.createDate}}</p>
                    </li>
                </ul>
                <p class="· p">{{$store.state.communitymessage.postInfo.postName}}</p>
                <ol>
                    <li class="ts">10万+</li>
                    <li>浏览</li>
                    <li class="t">{{$store.state.communitymessage.postInfo.posttop}}万</li>
                    <li>点赞</li>
                    <li class="t">{{$store.state.communitymessage.postInfo.comsum}}</li>
                    <li>回帖</li>
                    <li class="t">0</li> 
                    <li>收藏</li>
                    <li>分享</li>
                    <li>更多</li>
                </ol>
            </div>
</template>
<script>

export default {
    name:"top",
    data(){
        return{
        
        }
    },
     mounted(){
        this.$store.dispatch("postInfo",1);
        }
}
</script>
