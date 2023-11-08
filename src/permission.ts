/*
 * @Author: Miya
 * @Date: 2023-11-08 15:06:16
 * @LastEditTime: 2023-11-08 15:12:25
 * @LastEditors: Miya
 * @Description: Router Permission
 * @FilePath: \Vue3-Element-Template\src\router\permission.ts
 */
import Router from './router/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.beforeEach((to, from, next) => {
  nProgress.inc();
  next();
});

Router.afterEach(() => {
  nProgress.done();
});
