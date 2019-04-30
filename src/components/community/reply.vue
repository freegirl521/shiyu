<template>
    <div class="reply">
        <p class="all">全部回帖<span></span></p>
            <template>
                <div class="reply-all" v-for="(item,index) in $store.state.communitymessage.rows" :key="index">
                    <div class="reply-autor">
                        <p class="autor-img"><img :src="item.userImg" alt=""></p>
                        <div class="autor-right">
                            <p>{{item.userName}}</p>
                            <h1>回复时间：<span>{{item.createdtime}}</span></h1>
                            <h2 ref="comment" v-show="pos===index" >{{item.comment}}</h2>
                            <h2 ref="comment" :class="{active:pos!=index}" v-show="pos!=index">{{item.comment}}</h2>
                            <div class="right-box">
                                <p><span>{{2*(pageNum-1)+index+1}}</span>楼</p>
                               <p class="right-box-bottom pointer" v-show="top!=index"><img  @click="istop(item.postId,index)" src="@/assets/img/community/zan1.png" alt=""><span>{{item.commenttop}}</span></p>
                            <p class="right-box-bottom pointer"  v-show="top===index" ><img @click="isdown(postId,index)" src="@/assets/img/community/zan2.png" alt="" class="img-zan2"><span>{{item.commenttop}}</span></p>
                                    <div class="right-box-show pointer" v-show="item.comment.length>100" >
                                    <p class="show-open pointer" ref="open" v-show="pos!=index" @click="show(index)">展开</p>
                                    <p class="show-open" ref="open" v-show="pos===index" @click="hind(index)">收缩</p>
                                    </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </template>
            <page @hh="getPageNum"></page>
            
    <div class="answer">
        <p>回复帖子</p>
        <div class="answer-content">
        <el-input
            type="textarea"
            v-model="comment"
            :rows="22"
            placeholder="输入您的回复，字数不超过200字"
            >
        </el-input>
        </div>
        <h5 @click="answers" class="pointer">回复</h5>
        </div>
    </div>

</template>

<script>
import page from "./page.vue";
export default {
name:"replay",
    data(){
        return{
        comment:"",
        pos:-1,
        top:-1,
        // type:0,
        // tops:-1
        pageNum:1
        }
    },
components:{
    page
},
methods:{//加载
    answers(){
        // this.$store.dispatch("",this.offset);
        // if(!localStorage.userId){
        //     alert("请先登录")
        // }else{
           
            // console.log({postid:this.$route.query.postId,userid:1,comment:this.comment});
            this.$store.dispatch("answer",{postid:this.$route.query.postId,userid:1,comment:this.comment});//回帖
           
        // }
      
    },
    show(index){
        this.pos=index;
    },
    hind(index){
        this.pos=-1;
    },
    istop(postId,index){
        console.log(22222);
            this.top=index;
            console.log(index);
            
            var commenttop = this.$store.state.communitymessage.rows[index].commenttop/1;
            this.$store.state.communitymessage.rows[index].commenttop=commenttop+1;
             this.$store.dispatch("uptop",postId);//评论      
    },
    isdown(postId,index){
        this.top=-1;
         var commenttop =  this.$store.state.communitymessage.rows[index].commenttop/1;
            this.$store.state.communitymessage.rows[index].commenttop=commenttop-1;
             this.$store.dispatch("uptop",postId);//评论
    },
    getPageNum(pageNum){
        //this.$on("hh",this.pageNum);
        this.pageNum=pageNum;
        console.log(this.pageNum,8989898);
    }
},
    mounted(){         
    }  

}
</script>

<style scoped>
.el-textarea__inner{
    height:160px;
}
.active{
    height: 45px;
    overflow: hidden;
}
  .pointer{
        cursor: pointer;
    }
 
</style> 

