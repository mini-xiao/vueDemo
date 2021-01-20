// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import Axios from 'axios'
// 配置请求根路径
Axios.defaults.baseURL = 'http://192.168.0.161:8080/huge-boss-mobile/'    // 本地调试服务器
Vue.prototype.$axios = Axios
Vue.use(ViewUI);

Axios.defaults.headers['token'] = 'Dhz7/CXInPSGi9x7NqDEqUFcXk6ybo4TMIp6mV86oY8=#110001#721#721'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
