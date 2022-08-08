import { en } from 'element-plus/dist/locale/en';
/*
 * @Description: Multi Language Config - Language
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-08 09:37:20
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 09:39:24
 */

const GlobalLanguage = {
  zh: { labelSelector: '语言' },
  en: { labelSelector: 'Language' },
  jp: { labelSelector: '言語' },
};

const zhGlobalLanguage = {
  ...GlobalLanguage.zh,
};

const enGlobalLanguage = {
  ...GlobalLanguage.en,
};

const jpGlobalLanguage = {
  ...GlobalLanguage.jp,
};

export { zhGlobalLanguage, enGlobalLanguage, jpGlobalLanguage };
