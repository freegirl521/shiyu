import axios from "axios";
export default{
    state:{
        shopInfo:{
            // shopname:"哈哈店铺",
            // // 返回的评星数
            // commentscore:4,
            // conunts:123,
            // price:222,
            // teste:5,
            // environment:6,
            // serve:7,
            // shopads:"哈哈街哈哈号",
            // shopphone:"1111222",
            // feature:6,
            // usercount:23,
            // Shopmanage:1
        },
        shopSales:[
    ],

        shopRecomment:[
            // {
            //     menuname:"kkkkk",
            //     price:18,
            //     imgurl:require("../../assets/img/store_details/timg@2x.png")
            // },
            //      {
            //     menuname:"kkkkk",
            //     price:18,
            //     imgurl:require("../../assets/img/store_details/timg@2x.png")

            // },
            // {
            //     menuname:"kkkkk",
            //     price:18,
            //     imgurl:require("../../assets/img/store_details/timg@2x.png")
            // }
        ],
        shopComments:[
            
            ]

    },
    mutations:{
        SETSHOPINFO(state,info){
            state.shopInfo=info;
        },
        SETSHOPSALES(state,data){
            state.shopSales=data;
        },
        SETSHOPRECOMMEND(state,data){
            state.shopRecomment=data;
        },
        SETSHOPCOMMENT(state,data){
            state.shopComments=data;
        }
        
    },
    getters:{
    
    },
    actions:{
        getShopSales({commit},shopid){
            axios.post("/shopTicet",{
                shopid,
            }).then(({data})=>{
                // "方法名",值
                console.log(data);
                commit("SETSHOPSALES",data)
            })
        },
        getShopInfo({commit},shopid){
            axios.post("/shopinfo",{    //this.$http=axios(引入的axios)
                shopid,
            }).then(({data})=>{
                // "方法名",值
                console.log(data)
                commit("SETSHOPINFO",data.shopid)
            })
        },
        getShopRecommend({commit},obj){
            // console.log(1111111111111,obj);
            axios.post("/shopss",{
                type:obj.type,
                shopid:obj.shopid,
            }).then(({data})=>{
                // "方法名",值
                console.log(data);
                commit("SETSHOPRECOMMEND",data)
            })
        },
        
        getShopComment({commit},obj){
            axios.post("/usercomment",{
                shopid:obj.shopid,
                scoreid:obj.scoreid,  //评星
               text:obj.text,//关键字
               count:obj.count,
            }).then(({data})=>{
                // "方法名",值
                console.log(11111111,data);
                commit("SETSHOPCOMMENT",data)
            })
        }
    }
}
