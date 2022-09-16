/*
 * @Author: Miya
 * @Date: 2022-08-08 21:17:25
 * @LastEditTime: 2022-09-17 00:13:33
 * @LastEditors: Miya
 * @Description: Vue3-Element-Template Document Config
 * @FilePath: \Vue3-Element-Template\docs\.vitepress\config.ts
 */
import configFooter from './settings/footer';
import configNavbar from './settings/navbar';
import configSidebar from './settings/sidebar';

export default {
  title: 'Vue3-Template',
  description: 'Just playing around.',
  base: '/Vue3-Element-Template/',
  themeConfig: {
    nav: configNavbar,
    sidebar: configSidebar,
    footer: configFooter,
  },
};
