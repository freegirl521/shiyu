import Vue from 'vue'
import vuex from "vuex";
import axios from "axios"

Vue.use(vuex)
 
export default {
    state:{
        commentList:[],
    },
    mutations:{
        GETLIST(state,list){
            state.commentList=list;
        }
    },
    getters:{
    
    },
    actions:{
        getList({commit},keyword){
            axios.get("/comment/selectStores",{
                params:{
                    keyword
                }
            }).then(({data})=>{
                commit("GETLIST",data)
            })
        },
        send({commit},context){
            axios.post("/insertCommentDetails",context).then(({data})=>{
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