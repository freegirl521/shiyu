import Vue from "vue";
import vuex from "vuex";
import list from "./list/"
import comment from "./comment" 
import shop from "./shop"
import communitymessage from "./community/communitymessage.js"
import community from "./community/community.js"
import posting from "./community/posting.js"
import commentDetail from "./commentDetail"
import storeInformation from "./storeInformation"
import myCenter from "./myCenter"
import home from "./home"


Vue.use(vuex);
console.log(list,552)
export default new vuex.Store({
    state:{
        // 页码数据
        page:{
            pageIndex:1,// 当前页
            pageSum:1// 总页数

        },
        cityId:sessionStorage.cityId? sessionStorage.cityId:1,
        Info:"登录",
},
mutations:{
        CHANGE_PAGE(state,page){
            console.log(2222222);
            //state.page.pageIndex = page.pageIndex;
            state.page.pages = page;
        },
        CHANGE_CITY(state,cityId){
            sessionStorage.cityId=cityId
            state.cityId=cityId;
            console.log(222,state.cityId);
        },
        CHANGE_INFO(state){
            state.Info=localStorage.userName? localStorage.userName:"登录";
        },
    },
    getters:{

    },
    actions:{
        
    },

	modules:{
        list,
        comment,
        shop,
        community,
        communitymessage,
        posting,
        commentDetail,
        storeInformation,
        myCenter,
        home
	}
})