import Vue from 'vue'
import vuex from "vuex";
import axios from "axios"

Vue.use(vuex)
 
export default {
    state:{
        commentList:[],
        page:[]
    },
    mutations:{
        GETLIST(state,list){
            state.commentList=list;
        }
    },
    getters:{
    
    },
    actions:{
        getList({commit},obj){
            console.log(obj,808070);

            axios.post("/sys/comment/list",
            {   keyword:obj.keyword,
                pageIndex:obj.pageIndex}
             )
            .then(({data})=>{
                commit("GETLIST",data.rows)
                commit("CHANGE_PAGE",data.pages)
                console.log(data)
            })
        },
        // 点击获取菜单/sys/comment/menu
        send({commit},context){
            axios.post("/sys/comment/insert",context).then(({data})=>{
                if(data.ok===1){
                    alert("提交成功");
                }
                
            })
        },
        getAdminLog({commit},pageIndex){
     
       axios.get("/comment/selectStores",{
                params:{
                    pageIndex,
                    keyword
                }
            })
            .then(data=>{
                commit("SET_ADMIN_LOG",data.adminLog);
                commit("CHANGE_PAGE",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                })
            })
        }
    }
}