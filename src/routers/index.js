import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import userReg from "../views/userReg.vue"
import hot from "../components/hot.vue"
import district from "../components/district.vue"
import subway from "../components/subway.vue"
import navarea from "../components/navarea.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:"/userReg",
      name:"userReg",
      component:userReg
    },
		{
		  path: '/',
		  name: 'navarea',
		  component:navarea,
			children:[
				{
				  path: '/',
				  component:hot
				}
			]
		},
		{
		  path: '/',
		  component:hot
		},
		{
		  path: '/district',
		  name: 'district',
		  component:district
		},
		{
		  path: '/subway',
		  name: 'subway',
		  component:subway
		}
		
		/* {
		  path: '/hot',
		  
			alias:"/",
		  component:hot
		},
		{
		  path: '/district',
		  name: 'district',
		  component:district
		},
		{
		  path: '/subway',
		  name: 'subway',
		  component:subway
		} */,
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

