import vue from "vue"
import bus from  "../../bus"
import axios from "axios"
export default{
    state:{
        imgList:[
            {id:0,img:require("@/assets/img/community/tiezi01@2x.png")},    
            {id:1,img:require("@/assets/img/community/tiezi01@2x.png")},
            {id:2,img:require("@/assets/img/community/tiezi01@2x.png")},
            {id:3,img:require("@/assets/img/community/tiezi01@2x.png")}
        ],
        rows:[
            {
                userId:1,
                userName:"王",
                // userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么流",
                postText:"片ddhdh都好好的好的好的dhhdhsdkf和扩大腹黑而顾客和污垢违规为更好而我国",
                createdate:"2019-03-03 23:00",
                postTop:30,
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:1,
                userName:"王",
                // userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么流",
                postText:"片ddhdh都好好的好的好的dhhdhsdkf和扩大腹黑而顾客和污垢违规为更好而我国",
                createdate:"2019-03-03 23:00",
                postTop:30,
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:2,
                userName:"王",
                userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么",
                postText:"瀑布流瀑布流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑布流瀑布流瀑布瀑布流",
                createdate:"2019-03-03 23:00",
                postTop:"50",
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:3,
                userName:"王",
                userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么",
                postText:"瀑布流瀑布流瀑布瀑布流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑布流瀑布流瀑布瀑布流",
                createdate:"2019-03-03 23:00",
                postTop:"50",
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:3,
                userName:"王",
                userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么",
                postText:"瀑布流瀑布流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑布流瀑布流瀑布瀑布流",
                createdate:"2019-03-03 23:00",
                postTop:"50",
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:3,
                userName:"王",
                userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么",
                postText:"瀑布流瀑布流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑流瀑布流瀑布流瀑布流瀑布流瀑布瀑布流",
                createdate:"2019-03-03 23:00",
                postTop:"50",
                sumComm:3,
                postId:1,
                about:"美食"
            },
            {
                userId:1,
                userName:"王",
                // userImg:require("@/assets/img/community/coverage.png"),
                postName:"这是什么流",
                postText:"片为更好而我国",
                createdate:"2019-03-03 23:00",
                postTop:30,
                sumComm:3,
                postId:1,
                about:"美食"
            },
                
        ]
    },
    mutations:{
        TOPIMG(state,data){//轮播图
            state.imgList = data.imgList; 
            console.log(data,1212121);
        },
        ROWS(state,data){//瀑布流
            state.rows = data.rows;
            console.log(data,222222222222223)
        }
    },
    actions:{
        //轮播图接口
        topimg({commit}){
            axios.get("/community/topimg")
            .then(data=>{//(({data})
               commit("TOPIMG",data);
               
            })
        },
        rows({commit},Offset){//瀑布流
            axios.get("/community/postlist?offset=offset")
            .then(data=>{
                commit("ROWS",data);
                console.log(data,333333333333332);
            })
        }
        
    },
}