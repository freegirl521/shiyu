import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import Vuex from 'vuex';
import store from './store'
import './assets/css/reset.css'

Vue.use(Vuex)
// json转字符串  post请求
import qs from 'qs';
Vue.prototype.$qs = qs;

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)
Vue.prototype.$http= axios


axios.interceptors.request.use(config=>{
  config.url="http://10.9.62.230:8080"+config.url;
  return config;
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
