/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-11-25 15:03:13
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\LandingPage\src\router\index.ts
 * @Version:
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import axios from 'axios';
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
    path: '/login',
    name: 'login',
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
        component: () => import('@/layout/admin/blog.tsx')
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('blog-token');
  if (to.path === '/admin' || to.path === '/admin/*') {
    const a = (axios.defaults.headers.common['Authorization'] =
      'Bearer ' + token);
    console.log('aaaaa');
  }
  next();
});

export default router;
