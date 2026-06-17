/*
 * @Description: APP Root Page
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-17 01:39:29
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => <router-view></router-view>;
  },
});
