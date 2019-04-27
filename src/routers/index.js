import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import userReg from "../views/userReg.vue"
<<<<<<< HEAD
import storeInformation from "../views/store_information/storeInformation.vue"
=======
import myCenter from "../views/myCenter";
import centerIndex from "../components/centerindex"
import centerComment from "../components/centerComment"
import centerPosts from "../components/centerPosts"
import centerCollect from "../components/centerCollect"
import centerGroup from "../components/centerGroup"
import centerIndent from "../components/centerIndent"

>>>>>>> 895ff50b127e45a1d080ee4bee9b6d8a68b6da5a
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/userReg",
      name:"userReg",
      component:userReg
    },
    {
      path:"/storeInformation",
      name:"storeInformation",
      component:storeInformation
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
    },
    {
      path:'/myCenter',
      name:'myCenter',
      component:myCenter,
        children:[
            {
                path:'/centerIndex',
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
        ]
    },

  ]
})
