/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-22 17:14:47
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './router/router';
import ElementPlus from 'element-plus';
import i18n from './language/index';
import './style/normalize.less';
import './style/transition.less';
import 'element-plus/dist/index.css';
import './style/elementChange.less';
import App from './App';
import { useI18n } from 'vue-i18n';

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(Router);
app.use(i18n);

/**
 * @description Register i18n function
 * @param string {String} value in i18n
 * @see https://vue-i18n.intlify.dev/guide/migration/vue3.html
 * @see https://vuejs.org/api/application.html#app-config-globalproperties
 * @returns i18n string
 */
app.config.globalProperties.$t = (string: string): string => {
  return useI18n().t(string);
};

app.mount('#app');
