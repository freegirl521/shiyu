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
    },
    mutations:{
        SET_LIST(state,list){
            state.shopInfoList=list;
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
        }
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
        }
    }
}