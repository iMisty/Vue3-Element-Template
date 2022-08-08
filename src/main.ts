/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 16:25:04
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './router/router';
import ElementPlus from 'element-plus';
import i18n from './language/index';
import './style/layout/app.module.less';
import './style/normalize.less';
import './style/transition.less';
import 'element-plus/dist/index.css';
import './style/elementChange.less';
import App from './App';

const app = createApp(App);

app.use(ElementPlus).use(createPinia()).use(Router).use(i18n);

app.mount('#app');
