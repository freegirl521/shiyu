import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import userReg from "../views/register/userReg.vue"
import userLogin from "../views/login/userLogin.vue"
import shopLogin from "../views/login/shopLogin.vue"
import findPwd from "../views/findpwd/findPwd.vue"
import shopReg from "../views/register/shopReg.vue"
import order1 from "../views/order/order1.vue"
import order from "../views/order/order.vue"


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
      path:"/order1",
      name:"order1",
      component:order1
    },
    {
      path:"/order",
      name:"order",
      component:order
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
