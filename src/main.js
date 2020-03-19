import Vue from 'vue';
import App from './App.vue';
import 'font-awesome/css/font-awesome.min.css';
import './assets/global.less';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
