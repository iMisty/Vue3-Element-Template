/*
 * @Author: Miya
 * @Date: 2021-11-27 02:34:42
 * @LastEditTime: 2022-07-25 10:11:32
 * @LastEditors: Mirage
 * @Description: Test Pinia Store
 * @FilePath: \vue3-element-template\src\store\appStore.ts
 */
import { defineStore } from 'pinia';
import RouterData from '@/interface/Router';

interface LoginData {
  username: String;
  password: String;
}

export const useAPPStore = defineStore({
  id: 'app',
  // https://pinia.esm.dev/core-concepts/state.html
  state: () => ({
    // SideMenu Status
    isCollapse: true,
    // Router
    router: [],
    // Token
    token: '',
  }),
  // https://pinia.esm.dev/core-concepts/getters.html
  getters: {
    /**
     * @description Get Sidebar Status
     * @param state
     * @returns {Boolean} Status
     */
    getSidebarStatus(state): boolean {
      return state.isCollapse;
    },

    /**
     * @description Get Navbar Status
     * @param state
     * @returns {RouterData} Router Data
     */
    getNavbarData(state): Array<RouterData> {
      return state.router;
    },

    /**
     * @description Get Token
     * @param state
     * @returns {String | undefined} Token
     */
    getToken(state): string | undefined {
      return state.token;
    },
  },
  // https://pinia.esm.dev/core-concepts/actions.html
  actions: {
    /**
     * @description Toggle Sidebar Status
     * @returns {Boolean} Sidebar Status
     */
    toggleNavBarCollapse(): boolean {
      return (this.isCollapse = !this.isCollapse);
    },

    /**
     * @param {RouterData}  router Active Router Tree Array
     * @todo Fix any
     * @returns {RouterData} set Router Data to State
     */
    setRouteData(router: any): RouterData {
      return (this.router = router);
    },

    /**
     * @description Set Token from API or Mock
     * @param {LoginData} Token from API
     * @todo Your Login Method
     * @returns {String} token
     */
    setLoginData(loginData: LoginData): string {
      const userInfo = {
        username: loginData.username,
        token: 'mock1',
      };
      localStorage.setItem('token', 'mock1');
      localStorage.setItem('UserInfo', JSON.stringify(userInfo));
      return (this.token = 'mock1');
    },
  },
});
