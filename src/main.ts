/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-11-09 16:38:49
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

import MermaidModelComponent from '@/extends/model';
Vue.prototype.$model = MermaidModelComponent;

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
