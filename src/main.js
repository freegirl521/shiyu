import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Vuex from 'vuex';
import store from './store'

Vue.use(Vuex)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)
Vue.prototype.$http= axios

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
