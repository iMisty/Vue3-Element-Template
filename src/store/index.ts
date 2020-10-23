/*
 * @Author: Miya
 * @Date: 2020-09-22 10:13:28
 * @LastEditTime: 2020-10-23 12:18:06
 * @LastEditors: Miya
 * @Description: 
 * @FilePath: \LandingPage\src\store\index.ts
 * @Version: 
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    displayNavBar: true
  },
  mutations: {
    changeDisplayNavBar(state,status){
      return state.displayNavBar = status;
    }
  },
  actions: {},
  modules: {}
});
