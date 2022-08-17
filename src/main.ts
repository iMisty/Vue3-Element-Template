/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:51:28
 */

/**
 * Import Node Modules
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';

/**
 * Import Config File
 */
import Router from './router/router';
import i18n from './language/index';

/**
 * Import Node Modules Style
 */
import 'element-plus/dist/index.css';

/**
 * Import Custom Style
 */
// Global APP Style
import './style/app.module.less';
// Normalize.css
import './style/normalize.less';
// Animation and Transition CSS
import './style/transition.less';
// Change Element Plus CSS
import './style/elementChange.less';

/**
 * Import Root Component
 */
import App from './App';

const app = createApp(App);

app.use(ElementPlus).use(createPinia()).use(Router).use(i18n);

app.mount('#app');
