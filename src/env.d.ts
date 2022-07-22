/*
 * @Description: Declare File
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-12-13 09:32:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-22 16:28:58
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'element-plus/dist/locale/zh-cn';
declare module 'element-plus/dist/locale/en';
declare module 'element-plus/dist/locale/ja';
