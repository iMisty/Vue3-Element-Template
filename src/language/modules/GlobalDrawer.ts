/*
 * @Description: Multi Language Config - Drawer
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 15:44:23
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 09:37:36
 */
const GlobalDrawer = {
  zh: { welcome: '欢迎' },
  en: { welcome: 'Welcome' },
  jp: { welcome: 'ようこそ' },
};

const zhGlobalDrawer = {
  ...GlobalDrawer.zh,
};

const enGlobalDrawer = {
  ...GlobalDrawer.en,
};

const jpGlobalDrawer = {
  ...GlobalDrawer.jp,
};

export { zhGlobalDrawer, enGlobalDrawer, jpGlobalDrawer };
