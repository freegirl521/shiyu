import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


export default {
    state:{//初始化参数
        pageInfo_coll:{
            /*pageNum:1,//当前页
            pageSize:5,//每页的数量
            size:5,//当前页的数量
            pages:3,//总页数
            total:15,//总记录数
            list:[
                {
                    id:1,//收藏编号
                    shopid:0,//店铺id
                    savetime:"2019-11-1 19:34",//收藏时间
                    shopLog:{

                        shopname:"肯德基（北清路店）",
                        shopads:"北京***",
                        commentscore:5//店铺星级

                    }
                },{
                    id:2,//收藏编号
                    shopid:1,//店铺id
                    savetime:"2019-11-1 19:34",//收藏时间
                    shopLog:{

                        shopname:"酒井日本寿司",
                        shopads:"[北京]酒仙桥路北京798艺术区751时尚设计广场A11楼56181908",
                        commentscore:5//店铺星级

                    }
                }
            ]*/
        },
        pageInfo_comm:{
            /*pagesize:12,//每页的数量
            pageNum: 1,//当前页

            size: 5,//当前页的数量
            pages: 3,//总页数
            total: 15,//总记录数
            list: [//点评
                {
                    shopLog: {
                        shopnid: 1,
                        shopname: "串串香（定福庄店）",
                        shopads: "定福庄北街",
                    },
                    score: 5,//评分
                    averagePrice: 30,//人均消费
                    commentimg: require("../../assets/img/myCenter/u=3003301855,516753607&fm=26&gp=0@2x.png"),//评价图片地址
                    evaluate: "去了很多次",//评价正文
                    commenttop: 1110,//点赞数
                    createddate: "2018-09-12",//点评时间
                    menuList: [//喜欢的菜
                        "牛蹄筋",
                        "泡面"
                    ]
                },
            ]*/

        },
        pageInfo_post:{
            /*pageNum:1,//当前页
            pageSize:5,//每页的数量
            size:5,//当前页的数量
            pages:3,//总页数
            total:15,//总记录数
            "list":[
                {
                    user:{
                        userid:2,//用户id
                        userName:"张三",//用户名

                        userimg:"/!**!/!*!/",//用户头像路劲
                    },
                    posttext:"真好吃",//帖子正文
                    postname:"*******",//帖子标题
                    postimg:"/!*!/!*"//帖子图片路劲
                },
                {
                    user:{
                        userid:2,//用户id
                        userName:"张三",//用户名

                        userimg:"/!**!/!*!/",//用户头像路劲
                    },
                    posttext:"真好吃",//帖子正文
                    postname:"*******",//帖子标题
                    postimg:"/!*!/!*"//帖子图片路劲
                }
            ]*/

        },
        pageInfo_indent:{
           /* pageNum:1,//当前页
            pageSize:5,//每页的数量
            size:5,//当前页的数量
            pages:3,//总页数
            total:15,//总记录数
            "list":[
                {
                    indentId:0,//订单id
                    indenttype:1,//订单状态
                    pricesum:188,//总价
                    creatadate:"2019-11-1 19:34",//创建时间
                    shopLog:{
                        shopname:"定福庄店"//店名
                    },
                    menuInfo:{
                        menuname:"乌鸡汤"//菜名
                    }
                }
            ]*/

        },
        res:{

        }
    },
    mutations:{
        //点评
        GET_COLLECT_INFO(state,obj){

            state.pageInfo_coll = obj;
            //console.log(obj);

        },
        GET_COMMENT_INFO(state,obj){
            state.pageInfo_comm = obj;

        },
        GET_POST_INFO(state,obj){
            state.pageInfo_post = obj;
        },
        GET_INDENT_INFO(state,obj){
            state.pageInfo_indent = obj;
        },
        POST_USER_INFO(state,obj){
            state.res=obj;
        }



    },
    getters:{

    },
    actions:{
        postMyInfo({commit},data){
            axios.post("/DeleteEvaluateShop",{
                shopnid:data.shopid,
                userName:data.userName,
                usersex:data.usersex,//性别
                userads:data.userads,//住址
                usertext:data.usertext,//简介
                userimg:data.userImg,

            }).then(data=>{
                commit("POST_USER_INFO",data)
            })
        }
        ,
        getCollect({commit},data){
            axios.get("/CollectShopList",{
                params: {
                    userid: 1,
                    pageNum: 1,
                }
            }).then(data=>{
                commit("GET_COLLECT_INFO",data.data.pageInfo)

            })
        },
        delete_coll({commit},obj){
            axios.get("/DeleteCollectShop",{
                params:{
                    id:obj.id
                }

            }).then(data=>{
                commit("GET_COLLECT_INFO",data.data)

            })
        }
        ,
        getComment({commit},data){
            axios.get("/EvaluateShopList",{
               params:{
                   userid:2,
                   pageNum:1,
               }

            }).then(data=>{
                commit("GET_COMMENT_INFO",data.data.pageInfo)
            })
        },
        delete_comm({commit},obj){
            axios.post("/DeleteEvaluateShop",{
                shopnid:obj.shopid
            }).then(data=>{
                commit("GET_COMMENT_INFO",data.data)
            })
        },
        getPost({commit},data){
            axios.get("/PostList",{
                params:{
                    userid:2,
                    pageNum:1,
                }

            }).then(data=>{
                commit("GET_POST_INFO",data.data.pageInfo)
            })
        },
        getIndent({commit},data){
            axios.get("/IndentList",{
                params:{
                    userid:1,
                    pageNum:1,
                }

            }).then(data=>{
                commit("GET_INDENT_INFO",data.data.pageInfo)
            })
        }

    }
}