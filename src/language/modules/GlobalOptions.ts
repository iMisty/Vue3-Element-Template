/*
 * @Description: Multi Language for Options Page
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-15 16:48:22
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-16 11:17:22
 */

/**
 * Default Options
 * @example For Example: $t('SystemSettings.options.themeSidebar')
 */
const textOptionsDefault = {
  zh: {
    title: '默认标题',
    themeSidebar: '侧边栏样式',
    themeLanguage: '显示语言',
    themeColor: '显示主题',
  },
  en: {
    title: 'Default Title',
    themeSidebar: 'Sidebar Theme',
    themeLanguage: 'Language',
    themeColor: 'Theme',
  },
  jp: {
    title: 'デフォルトタイトル',
    themeSidebar: 'サイドバー',
    themeLanguage: '言語',
    themeColor: 'テーマ',
  },
};

const zhGlobalOption = {
  ...textOptionsDefault.zh,
};

const enGlobalOption = {
  ...textOptionsDefault.en,
};

const jpGlobalOption = {
  ...textOptionsDefault.jp,
};

export { zhGlobalOption, enGlobalOption, jpGlobalOption };
