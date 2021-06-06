import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 小项目，将axios赋值给vue的原型对像$http
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3333'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// render: function(createElement){
//   return createElement(App)
// }

// render: h => h(App)