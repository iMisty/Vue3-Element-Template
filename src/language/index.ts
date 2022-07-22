/*
 * @Description: Multi Language Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 15:30:55
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-22 17:29:47
 */

import { createI18n } from 'vue-i18n';

/**
 * Multi Language from Element UI
 */
import zhCn from 'element-plus/dist/locale/zh-cn';
import en from 'element-plus/dist/locale/en';
import ja from 'element-plus/dist/locale/ja';

/**
 * Multi Language from User
 */
import Chinese from './zh';
import English from './en';
import Japanese from './jp';

const MultiLanguageConfig = {
  zh: { ...Chinese, ...zhCn },
  en: { ...English, ...en },
  jp: { ...Japanese, ...ja },
};

function getLanguage() {
  const chooseLanguage = localStorage.getItem('language');
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(MultiLanguageConfig);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'en';
}

const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: 'en',
  allowComposition: true,
  messages: MultiLanguageConfig,
  silentTranslationWarn: true,
});

export default i18n;
