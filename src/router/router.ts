/*
 * @Description: Router Main
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 17:11:35
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:10:49
 */
import { createRouter, createWebHistory, Router } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Login from '@/views/Login/Login';
import { useAPPStore } from '@/store/appStore';
import type RouterData from '@/interface/Router';

const constantRouter: Array<RouterData> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/Admin'),
    redirect: '/dashboard',
    meta: { title: 'HomePage' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/example/dashboard'),
        meta: { title: 'DashBoard', icon: 'House', isCollapse: false },
      },
      {
        path: 'example',
        name: 'Example',
        redirect: '/example/table',
        component: () => import('@/views/RouterViews'),
        meta: {
          title: 'Components',
          icon: 'Headset',
          isFirstRoute: true,
          isCollapse: false,
        },
        children: [
          {
            path: 'table',
            name: 'ExampleTable',
            component: () => import('@/views/example/components/table'),
            meta: { title: 'Table', icon: 'Document' },
          },
          {
            path: 'button',
            name: 'ExampleButton',
            component: () => import('@/views/example/components/button'),
            meta: { title: 'Button', icon: 'Document' },
          },
          {
            path: 'tree',
            name: 'Tree',
            component: () => import('@/views/example/components/tree'),
            meta: { title: 'Tree', icon: 'Headset' },
          },
        ],
      },
      {
        path: 'hidden',
        name: 'Hidden',
        component: () => import('@/views/example/components/tree'),
        meta: { title: 'DashBoard3 Hidden', icon: 'Headset', isHidden: true },
      },
      {
        path: 'block',
        name: 'block',
        redirect: '/block/table',
        component: () => import('@/views/RouterViews'),
        meta: {
          title: 'Block',
          icon: 'location',
          isFirstRoute: true,
        },
        children: [
          {
            path: 'table',
            name: 'ContainerTable',
            component: () => import('@/views/example/block/containerTable'),
            meta: { title: 'Container Table', icon: 'Document' },
          },
        ],
      },
      {
        path: 'system',
        name: 'System',
        redirect: '/system/options',
        component: () => import('@/views/RouterViews'),
        meta: {
          title: 'System',
          icon: 'location',
          isFirstRoute: true,
        },
        children: [
          {
            path: 'options',
            name: 'Options',
            component: () => import('@/views/system/Options'),
            meta: { title: 'Options', icon: 'Document' },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404/404'),
  },
];

export function initDynamicRouter() {
  return constantRouter;
}

const Router = createRouter({
  history: createWebHistory(),
  routes: initDynamicRouter() as any,
});

Router.beforeEach((to, from, next) => {
  const tokenInStorage: string | null = sessionStorage.getItem('token');
  const tokenInStore: string | undefined = useAPPStore().getToken;
  if (to.path === '/login') {
    next();
    return true;
  }
  if ((tokenInStore || tokenInStore) && to.path === '/login') {
    next();
  }
  // No token
  if (!tokenInStorage && !tokenInStore) {
    nprogress.done();
    next(`/login`);
  } else {
    nprogress.inc();
    next();
  }
});

Router.afterEach((to, from) => {
  nprogress.done();
});

export default Router;
