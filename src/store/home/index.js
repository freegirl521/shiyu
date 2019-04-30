import axios from "axios"
import bus from "../../bus"
export default{
    state:{
        reSou:[],
        menu:[],
        shop:[],
         post:[],
        comment:[],
        menuList3:[{
            catName: "异国料理",
            footTypeDTO: [
                {
                    catName: "日本菜"
                },
                {
                    catName: "西餐"
                },
                {
                    catName: "法国菜"
                },
                {
                    catName: "日本菜"
                },
                {
                    catName: "西餐"
                },
                {
                    catName: "法国菜"
                }
            ]
        },
            {
                catName: "异国料理",
                footTypeDTO: [
                    {
                        catName: "日本菜"
                    },
                    {
                        catName: "西餐"
                    },
                    {
                        catName: "法国菜"
                    },
                    {
                        catName: "日本菜"
                    },
                    {
                        catName: "西餐"
                    },
                    {
                        catName: "法国菜"
                    }
                ]
            }
                ]

    },
    getters:{

    },
    mutations:{
        SETALL(state,content){
            state.reSou=content.reSou;
            state.menu=content.menu;
            state.shop=content.shop;
            state.post=content.post;
            state.comment=content.comment;
            state.menuList3=content.type;
            console.log(content);
            console.log(state.menuList3,21213);


        },

        SETSHOP(state,shop){
            state.shop=shop;
        }

    },
    actions:{

        getAll({commit},cityId){
            console.log(222222,cityId);
            axios.post("/index/show",
                {cityId:cityId}
            ).then(data=>{
                commit("SETALL",data)
            })
        },
        getShop({commit},obj){
            console.log(obj);
            axios.post("/index/shop",{
                cityId:1,rank:obj.keyWord
            }).then(data=>{
                commit("SETSHOP",data)
            })
        },

    }
}