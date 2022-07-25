/*
 * @Description: Router Main
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 17:11:35
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-25 22:06:35
 */
import { createRouter, createWebHistory, Router } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Login from '@/views/Login';
import { useAPPStore } from '@/store/appStore';
import RouterData from '@/interface/Router';

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
        name: 'test1',
        component: () => import('@/views/example/dashboard.vue'),
        meta: { title: 'DashBoard', icon: 'Headset', isFirstRoute: true },
      },
      {
        path: 'example',
        name: 'Example',
        component: () => import('@/views/example/components/indexComponents'),
        meta: { title: 'Example', icon: 'Headset', isFirstRoute: true },
        children: [
          {
            path: 'table',
            name: 'ExampleTable',
            component: () => import('@/views/example/table.vue'),
            meta: { title: 'Example Table', icon: 'Document' },
          },
        ],
      },

      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/example/tree.vue'),
        meta: { title: 'Tree', icon: 'Headset' },
      },
      {
        path: '3',
        name: 'test3',
        component: () => import('@/views/example/tree.vue'),
        meta: { title: 'DashBoard3 Hidden', icon: 'Headset', hidden: true },
      },
      {
        path: '4',
        name: 'test4',
        redirect: '/4/5',
        component: () => import('@/views/example/component.vue'),
        meta: { title: 'DashBoard4', icon: 'location' },
        children: [
          {
            path: '5',
            name: 'test5',
            component: () => import('@/views/example/child1'),
            meta: { title: 'DashBoard Children1', icon: 'Document' },
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
    component: () => import('@/404'),
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
  const tokenInStorage: string | null = localStorage.getItem('token');
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
