/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-10-22 17:00:14
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \LandingPage\src\main.ts
 * @Version: 1.0
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '@/style/style.less';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
