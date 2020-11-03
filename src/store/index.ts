/*
 * @Author: Miya
 * @Date: 2020-09-22 10:13:28
 * @LastEditTime: 2020-11-04 01:15:16
 * @LastEditors: Miya
 * @Description:
 * @FilePath: /Kagura-Landing-Backend/Users/linjingyi/Documents/GitHub/Kagura-LandingPage/src/store/index.ts
 * @Version:
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    displayNavBar: true,
    blogData: []
  },
  mutations: {
    changeDisplayNavBar(state, status) {
      return (state.displayNavBar = status);
    },
    fetchBlogData(state, data) {
      return (state.blogData = data);
    }
  },
  actions: {},
  modules: {}
});
