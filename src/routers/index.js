import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import userReg from "../views/userReg.vue"
import storeInformation from "../views/store_information/storeInformation.vue"
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
    }
  ]
})
