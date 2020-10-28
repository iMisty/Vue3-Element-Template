/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-10-28 22:51:17
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
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.tsx')
  },
  {
    path: '/blogwrap',
    name: 'BlogWrap',
    component: () => import('@/views/BlogWrap.tsx')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.tsx')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/views/Loading.tsx')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.tsx'),
    redirect: '/',
    children: [
      {
        path: '',
        component: () => import('@/layout/admin/dash.tsx')
      },
      {
        path: 'blog',
        component: () => import('@/layout/admin/blog.tsx'),
      },
      {
        path: 'blogedit',
        component: () => import('@/layout/admin/blogedit.tsx')
      },
      {
        path: 'work',
        component: () => import('@/layout/admin/work.tsx')
      },
      {
        path: 'workedit',
        component: () => import('@/layout/admin/workedit.tsx')
      },
      {
        path: 'setting',
        component: () => import('@/layout/admin/setting.tsx')
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.tsx')
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
});

export default router;
