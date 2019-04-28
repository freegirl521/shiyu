<template>
    <div class="reply">
        <p class="all">全部回帖<span>{{$store.state.communitymessage.total}}</span></p>
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
                                <p><span>{{item.userid}}</span>楼</p>
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
            <page></page>
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
        
    }
},
components:{
    page
},
methods:{//加载
    answers(){
        // this.$store.dispatch("",this.offset);
        if(!localStorage.userId){
            alert("请先登录")
        }else{
            this.$store.dispatch("answer",{postId:this.$route.query.postId,userId:localStorage.userId,comment:this.comment});//回帖
            this.$store.dispatch("postInfo",this.$route.query.postId);
        }
       
        console.log(this.comment,11111111,userId,postId);
    },
    show(index){

        this.pos=index;
      
    },
    hind(index){

        this.pos=-1;
      
    },
    // istop(index){
    //     this.tops=-1;
    // },
    // top(index){
    //     this.tops=index;
    // }
    istop(postId,index){
        console.log(22222);
            this.top=index;
            console.log(index);
             this.$store.dispatch("rows",postId);
            var commenttop = this.$store.state.communitymessage.rows[index].commenttop/1;
            this.$store.state.communitymessage.rows[index].commenttop=commenttop+1;
             this.$store.dispatch("rows",{postId:this.$route.query.postId,pageNum:1});//评论
          
            
           
    },
    isdown(postId,index){
        this.top=-1;
         var commenttop =  this.$store.state.communitymessage.rows[index].commenttop/1;
            this.$store.state.communitymessage.rows[index].commenttop=commenttop-1;
             this.$store.dispatch("rows",{postId:this.$route.query.postId,pageNum:1});//评论
    }


},
    mounted(){
        
    }
}
</script>

<style>
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


























 <!--<template>
<div class="reply">
        <p class="all">全部回帖<span>{{$store.state.communitymessage.total}}</span></p>
        <template>
            <div class="reply-all" v-for="(item,index) in $store.state.communitymessage.rows" :key="index">
                <div class="reply-autor">
                    <p class="autor-img"><img :src="item.userImg" alt=""></p>
                    <div class="autor-right">
                        <p>{{item.userName}}</p>
                        <h1>回复时间：<span>{{item.createdtime}}</span></h1>
                         <h2 ref="comment" v-show="collapse" :class="{active:collapse}" >{{item.comment}}</h2>
                        <h2 ref="comment" :class="{active:collapse}" v-show="!collapse">{{item.comment}}</h2>
                        <div class="right-box">
                            <p><span>{{item.userid}}</span>楼</p>
                            <p class="right-box-bottom" @click="istop(index)" v-show="!top"><img src="@/assets/img/community/zan1.png" alt=""><span>{{item.commenttop}}</span></p>
                            <p class="right-box-bottom" @click="istop" v-show="top" ><img src="@/assets/img/community/zan2.png" alt="" class="img-zan2"><span>{{item.commenttop}}</span>
                            <div class="right-box-show" v-show="item.comment.length>200" >
                             <p class="show-open" ref="open"  v-show="collapse" @click="show(index)">展开</p>
                              <p class="show-open" ref="open"  v-show="!collapse" @click="hind(index)">收缩</p>
                               
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </template>
        <page></page>
        
        <div class="answer">
            <p>回复帖子</p>
            <div class="answer-content">
                <el-input
                    type="textarea"
                    v-model="Comment"
                    :rows="22"
                    placeholder="输入您的回复，字数不超过200字"
                    >
                </el-input>
            </div>
            <h5 @click="answers">回复</h5>
        </div>
    </div>

   
</template>

<script>
  import page from "./page.vue";
    export default {
        name:"replay",
        data(){
            return{
                Comment:"",
                collapse:[],
                top:true,
                type:0
            }
        },
        components:{
            page
        },
        methods:{//加载
        answers(){
            // this.$store.dispatch("",this.offset);
              this.$store.dispatch("answer",{postId:this.postId,userId:this.userId,Comment:this.Comment});//回帖
             console.log(this.Comment,11111111,userId,postId);
        },
        show(index){

            this.collapse=!this.collapse;
            
            console.log(this.str);
            //this.open=!this.open;
        },
        hind(index){
            this.collapse=!this.collapse;
            
           // console.log(this.str);
            //this.open=!this.open;
        },
        istop(index){
            this.top=!this.top;
             this.$store.dispatch("rows",this.id);
            this.$store.state.communitymessage.rows(index).commenttop+=1;
            console.log(this.$store.state.communitymessage.rows(index).commenttop);
            
            // uptop({commit,}){//点赞功能
            // axios.get("community/uptop?id=postId")//id=postId
            // .then(({data})=>{
            //     commit("UPTOP",data);
            // })
        // }
        },
        

    },
    mounted(){
        
    }
}
</script>

<style>
.el-textarea__inner{
    height:160px;
}
.active{
   height: 45px;
    overflow: hidden;
}
</style>  

-->



