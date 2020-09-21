/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-09-21 17:20:08
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \LandingPage\src\main.ts
 * @Version: 
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
