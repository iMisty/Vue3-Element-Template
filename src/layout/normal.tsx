/*
 * @Description: Admin Template Layout
 * @Version: 2.0
 * @Author: Mirage
 * @Date: 2021-12-23 14:10:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:27:20
 */
import { defineComponent } from 'vue';
import '@/layout/style/normal.module.less';

export default defineComponent({
  setup() {
    return () => <router-view></router-view>;
  },
});
