import vue from "vue"
import bus from  "../../bus"
import axios from "axios"
import qs from "querystring"
export default{
    state:{
       
        //帖子详情信息
        postInfo:
            {
            postId:1,
            userImg:require("@/assets/img/community/coverage.png"),//问题
            userName:"真xiang系列一锅",
            createDate:"2019-05-19",
            postName:"这哈子梭罗饭真的很香很香哟~",
            posttop:"2.0",
            comsum:"999",
            postText:'吃辣对皮肤好不好不好不好,吃辣对皮肤好不好,吃辣对皮肤好不好,吃辣对皮肤好不好,吃辣对皮肤好不好,吃辣对皮肤好不好不好不好不好',
            shopheadimg:require("@/assets/img/community/message2.png"),
            shopName:"来涮蜀川菜老手艺",
            commentScore:4,
            shopType:"日料",
            shopAds:"青年路",
            price:"200",
       },
        total:"",
        rows:[//获取帖子评论
            {
                id:1,
                userid:1,
                createdtime:"2019-04-20 11:20",
                comment:"美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉,美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉vv美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦没拉拉阿拉",
                commenttop:"90",
                userName:"游来游去的小可爱",
                userImg:require("@/assets/img/community/coverage.png")
            },
            {
                id:2,
                userid:2,
                createdtime:"2019-04-20 11:20",
                comment:"美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦美啦啦美啦啦美。啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦啦啦美啦啦美啦啦美啦啦美啦啦美。啦啦美啦美啦啦没拉拉阿拉",
                commenttop:"90",
                userName:"游来游",
                userImg:require("@/assets/img/community/coverage.png")
            },
          
        ],
        postImgList:[//详情正文图片
        
            {id:0,postid:1,postimg:require("@/assets/img/community/message1.png")},
            {id:1,postid:1,postimg:require("@/assets/img/community/message1.png")},
            {id:2,postid:1,postimg:require("@/assets/img/community/message1.png")},
        ]
        
    },
    mutations:{
        POSTINFO(state,data){
            state.postInfo = data.postInfo;
            console.log(data);
        },
        ROWS(state,data){//评论
            state.total = data;
            state.rows = data.rows;
        },
        
    },
    actions:{
        //
        postInfo({commit},postId){//获取帖子详情
            axios.get("/community/postinfo?postId="+postId.postId+"&userId="+postId.userId)
            .then(({data})=>{
               commit("POSTINFO",data);
            })
        },
        row({commit},obj){//获取帖子评论 page页
            axios.get("/community/postreview",{
                params:obj
            })//,{postId当前帖子的id,pageNum}
            .then(({data})=>{
               commit("ROWS",data);
            })
        },
        answer({commit},obj){//回t贴
            axios.post("/community/addcomment",qs.stringify(obj)
            // {
            //     userid:obj.userd,
            //     postid:obj.postId,
            //     comment:obj.comment
            // }
            ).then(({data})=>{
                if(data.code===0){
                    alert("回复成功")
                }else{
                    alert(data.msg)
                }
              
            })
        },
         uptop({commit},postId){//点赞功能
            axios.post("/community/uptop",{
                id:postId})//id=postId
            .then(({data})=>{
                if(data.code===0){
                    alert("点赞成功")
                }else{
                    alert(data.msg)
                }
              
            })
        }
        
    },
}

