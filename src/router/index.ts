/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-10-11 17:15:38
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: /Kagura-LandingPage/src/router/index.ts
 * @Version:
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.tsx')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/Work.tsx')
  },
  {
    path: '/workwrap',
    name: 'WorkWrap',
    component: () => import('@/views/WorkWrap.tsx')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/views/Loading.tsx')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.tsx')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
