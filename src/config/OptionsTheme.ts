/*
 * @Description: Theme Config for System Option
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-16 10:12:21
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-16 16:52:33
 */

import { $t } from '@/language';

interface ThemeOption {
  label: String;
  value: String;
  model?: String;
  options?: Array<ThemeOption>;
  isDisabled?: Boolean;
}

type themeSidebar = 'default' | 'overlay' | 'slim' | 'horizontal';

type themeLanguage = 'zh-cn' | 'en-us' | 'jp-ja';

type themeColor = 'system' | 'light' | 'dark';

const optionsTheme: Array<ThemeOption> = [
  {
    label: $t('SystemSettings.options.themeSidebar'),
    value: 'default' as themeSidebar,
    model: 'themeSidebar',
    options: [
      { label: 'default', value: 'default', isDisabled: false },
      { label: 'overlay', value: 'overlay', isDisabled: true },
      { label: 'slim', value: 'slim', isDisabled: true },
      { label: 'horizontal', value: 'horizontal', isDisabled: true },
    ],
  },
  {
    label: $t('SystemSettings.options.themeLanguage'),
    value: 'en-us' as themeLanguage,
    model: 'themeLanguage',
    options: [
      { label: 'zh-cn', value: 'zh-cn', isDisabled: false },
      { label: 'en-us', value: 'en-us', isDisabled: false },
      { label: 'jp-ja', value: 'jp-ja', isDisabled: false },
    ],
  },
  {
    label: $t('SystemSettings.options.themeColor'),
    value: 'light' as themeColor,
    model: 'themeColor',
    options: [
      { label: 'Light', value: 'light', isDisabled: false },
      { label: 'Dark', value: 'dark', isDisabled: true },
    ],
  },
];

export { ThemeOption };
export default optionsTheme;
