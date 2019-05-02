<template>
<div class="Cmessage">
    <div class="main">
        <div class="nav2">
           <p>社区论坛>帖子正文</p>
        </div>
        <!-- 主要内容 -->
        <div class="select1">
            <!-- 头部信息 -->
            <top></top>
            <!-- 详情 -->
            <datailed></datailed>
        </div>
    </div>
       <!-- 帖子 -->
    <reply></reply>
</div>
</template>
<script>
    import top from "@/components/community/message-top.vue";
    import datailed from "@/components/community/datailed.vue";
    import reply from "@/components/community/reply.vue";
export default {
    name:"communitymessage",
    data(){
        return{ 
        }
    },
    components:{
        top,
        datailed,
        reply
    },
    
    mounted(){
        console.log(this.$route.query)
        this.$store.dispatch("postInfo",this.$route.query);//详情 ////实参
        this.$store.dispatch("row",{postId:this.$route.query.postId,pageNum:1});//评论
      
    }
     
}
</script>
