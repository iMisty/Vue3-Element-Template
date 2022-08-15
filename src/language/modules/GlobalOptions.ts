/*
 * @Description: Multi Language for Options Page
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-15 16:48:22
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 16:59:11
 */

const textOptions = {
  zh: {
    title: '默认标题',
  },
  en: {
    title: 'Default Title',
  },
  jp: {
    title: 'デフォルトタイトル',
  },
};

const zhGlobalOption = {
  ...textOptions.zh,
};

const enGlobalOption = {
  ...textOptions.en,
};

const jpGlobalOption = {
  ...textOptions.jp,
};

export { zhGlobalOption, enGlobalOption, jpGlobalOption };
