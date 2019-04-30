// 公共部分
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// 屈莉页面路由
import userReg from "../views/register/userReg.vue"
import userLogin from "../views/login/userLogin.vue"
import shopLogin from "../views/login/shopLogin.vue"
import findPwd from "../views/findpwd/findPwd.vue"
import shopReg from "../views/register/shopReg.vue"
import order from "../views/order/order.vue"
//赵丽云页面路由
import storedetail from "../views/store_details/storedetail.vue"
// 慕晶晶页面路由
import communitymessage from "../views/communitymessage.vue"
import community from "../views/community.vue"
import posting from "../views/posting.vue"
// 魏玉兰页面路由
import comment from "../views/comment/comment.vue"
// import shopcenter from "../views/shopcenter.vue"
//刘合芝页面路由
import storeInformation from "../views/store_information/storeInformation.vue"
//李凤燕页面路由
import listapp from "../views/menu/listapp.vue"
// 艾鑫页面路由
import myCenter from "../views/myCenter/myCenter"
import member from "../views/myCenter/myInfo"
import centerPosts from "../views/myCenter/centerPosts"
import centerCollect from "../views/myCenter/centerCollect"
import centerGroup from "../views/myCenter/centerGroup"
import centerIndent from "../views/myCenter/centerIndent"
import centerIndex from "../views/myCenter/centerindex"
import centerComment from "../views/myCenter/centerComment"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: userLogin
    },
    {
      path:"/userReg",
      name:"userReg",
      component:userReg
    },
    {
      path:"/userLogin",
      name:"userLogin",
      component:userLogin
    },
    {
      path:"/shopLogin",
      name:"shopLogin",
      component:shopLogin
    },
    {
      path:"/findPwd",
      name:"findPwd",
      component:findPwd
    },
    {
      path:"/shopReg",
      name:"shopReg",
      component:shopReg
    },
    {
      path:"/order",
      name:"order",
      component:order
    },
    //慕晶晶路径设置
    {
        path:"/communitymessage",
        name:"communitymessage",
        component:communitymessage
        },
        {
        path:"/community",
        name:"community",
        component:community
        },
        {
        path:"/posting",
        name:"posting",
        component:posting
        },
        // 赵丽云路径设置
        {
            path:"/storedetail",
            name:"storedetail",
            component:storedetail
            },
        // 魏玉兰路径设置
        {
            path:"/comment",
            name:"comment",
            component:comment
          },
          // {
          //   path:"/shopcenter",
          //   name:"shopcenter",
          //   component:shopcenter
          // },
        //   刘合枝路径设置
        {
            path:"/storeInformation",
            name:"storeInformation",
            component:storeInformation
          },
        //   李凤燕路径设置
        {
			path:"/listapp",
			name:"listapp",
			component:listapp
        }, 
        // 艾鑫页面路径设置
        {
            path:"/member",
            name:"member",
            component:member,
          },
        {
          path:'/myCenter',
          name:'myCenter',
          component:myCenter,
            children:[
                {
                    path:'/centerIndex',
                    name:"centerIndex",
                    component:centerIndex
                },
                {
                    path:'/centerComment',
                    component:centerComment
                },
                {
                    path:'/centerPosts',
                    component:centerPosts
    
                },
                {
                    path:'/centerCollect',
                    component:centerCollect
                },
                {
                    path:'/centerGroup',
                    component:centerGroup
                },
                {
                    path:"/centerIndent",
                    component:centerIndent
                }
            ],redirect:"/centerIndex"
        },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    }
  ]
})
