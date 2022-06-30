/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Miya
 * @LastEditTime: 2021-12-11 21:04:05
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './router/router';
import ElementPlus from 'element-plus';
import './style/normalize.less';
import './style/transition.less';
import 'element-plus/dist/index.css';
import './style/elementChange.less';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(Router);
app.mount('#app');
