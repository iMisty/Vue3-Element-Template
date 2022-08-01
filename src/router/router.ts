/*
 * @Description: Router Main
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 17:11:35
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-01 18:01:46
 */
import { createRouter, createWebHistory, Router } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Login from '@/views/Login';
import { useAPPStore } from '@/store/appStore';
import RouterData from '@/interface/Router';
import { House } from '@element-plus/icons-vue';

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
        meta: { title: 'DashBoard', icon: 'House', isCollapse: false },
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
    component: () => import('@/views/404'),
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
