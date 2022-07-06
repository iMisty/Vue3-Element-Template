/*
 * @Description: Admin Template Layout
 * @Version: 2.0
 * @Author: Mirage
 * @Date: 2021-12-23 14:10:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-06 17:43:24
 */
import { FunctionalComponent } from 'vue';
import '@/style/layout/normal.module.less';

const LayoutNormal: FunctionalComponent<unknown> = () => {
  return <router-view></router-view>;
};

export default LayoutNormal;
