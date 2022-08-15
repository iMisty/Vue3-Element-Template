/*
 * @Description: Multi Language for System
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-15 16:47:58
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 17:13:17
 */

const textGlobalTitle = {
  zh: {
    setting: '系统设置',
  },
  en: {
    setting: 'System Settings',
  },
  jp: {
    setting: 'システム設定',
  },
};

const zhGlobalTitle = {
  ...textGlobalTitle.zh,
};

const enGlobalTitle = {
  ...textGlobalTitle.en,
};

const jpGlobalTitle = {
  ...textGlobalTitle.jp,
};

export { zhGlobalTitle, enGlobalTitle, jpGlobalTitle };
