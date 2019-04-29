import Vue from 'vue'
import vuex from "vuex";
import axios from "axios"

Vue.use(vuex)
 
export default {
    state:{
        Dialog:{},
        shopInfoList:[],
        shopId:localStorage.shopId,// 商户Id
        shopName:localStorage.shopName,//店铺名称
        token:localStorage.token,// token
        shopNewsList:{
            // shopname:"喵喵喵",
            // commentscore:4,
            // commentnum:200,
            // price:132,
            // taste:9.2,
            // environment:9.2,
            // serve:8.7,
            // shopads:"北京市海淀区",
            // shopphone:"13245678900",
            // feature:""
        },
        shopOrdersList:[]
    },
    mutations:{
        SET_LIST(state,list){
            state.shopInfoList=list;
        },
        SET_USERINFO(state,list){
            state.shopNewsList=list;
        },
        GET_SHOPORDERS(state,list){
            state.shopOrdersList=list;
        },
        SET_SHOPID_SHOPNAME(state,obj){
            console.log(2222,obj);
            state.shopId = localStorage.shopId = obj.shopId;
            state.shopName = localStorage.shopName = obj.shopName;
            state.token = localStorage.token = obj.token;
        },
        OUT_LOGIN(state){
            localStorage.clear();
            state.shopId = state.shopName = null;
        },
        SETDIALOG(state,Dialog){
            console.log(Dialog)
            state.Dialog=Dialog;
        },
    },
    getters:{
    
    },
    actions:{
        getShopInfo({commit},pageIndex){
           axios.get("/shop/GetStoreFoodList",{
                params:{
                    shopid:1,
                    page:pageIndex,
                }
            })
                .then(({data})=>{
                    console.log(data)
                    commit("SET_LIST",data.data.list);
                    commit("CHANGE_PAGE",{
                        pageIndex:data.pageIndex,
                        pageSum:data.pageSum
                    })
            })
        },
        updateInfo({commit},menuid){
            axios.get("/shop/FindUpdateStoreFood",{
                params:{
                    menuid
                }
            }).then(({data})=>{
                console.log(data.data);
                commit("SETDIALOG",data.data);
            })
        },
        updatedInfo({commit},foodInfo){
            axios.post("/shop/UpdateStoreFood",foodInfo).then(({data})=>{
                if(data.ok===1){
                    alert("修改成功");
                }
            })
        },
        delete({commit},menuid){
            axios.get("/shop/RemoveStoreFood",{
                params:{
                    menuid
                }
            }).then(({data})=>{
                if(data.ok===1){
                    alert("删除成功");
                }
            })
        },
        getShopNews({commit}){
            axios.get("/shop/GetShopInfo",{
                 params:{
                    shopid:1
                 }
             })
                 .then(({data})=>{
                     console.log(data)
                     commit("SET_USERINFO",data.data);
                     
             })
         },
         getShopOrders({commit}){
            axios.get("/shop/GetShopIndentList",{
                 params:{
                    shopid:1,
                    size:6,
                    page:1
                 }
             })
                 .then(({data})=>{
                     console.log(data)
                     commit("GET_SHOPORDERS",data.data);
                     
             })
         },
    }
}