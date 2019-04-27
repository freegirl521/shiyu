import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex)
// // 创建了一个基于vuex的仓库。
// var abc = new vuex.Store({
//   state:{
//       liuDeHua:0,
//       zhangXueYou:1
//   }
// })

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)
Vue.prototype.$http= axios

axios.interceptors.request.use(config=>{
  config.url="http://10.9.62.238:8080"+config.url;
  //config.url="/footmeet"+config.url;
  return config;
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
