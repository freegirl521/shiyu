import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import userReg from "../views/userReg.vue"
import comment from "../views/comment.vue"
import shopcenter from "../views/shopcenter.vue"

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
      path:"/comment",
      name:"comment",
      component:comment
    },
    {
      path:"/shopcenter",
      name:"shopcenter",
      component:shopcenter
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
