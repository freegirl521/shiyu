import Vue from 'vue'
import vuex from "vuex";
Vue.use(vuex)
 

import comment from "./comment" 
import shop from "./shop"

export default new vuex.Store({
state:{
        // 页码数据
        page:{
            pageIndex:1,// 当前页
            pageSum:1// 总页数
        },
},
mutations:{
    CHANGE_PAGE(state,page){
        console.log(2222222);
        state.page.pageIndex = page.pageIndex;
        state.page.pageSum = page.pageSum;
    },

},
getters:{

},
actions:{
    
},
modules:{
    comment,
    shop
}
})