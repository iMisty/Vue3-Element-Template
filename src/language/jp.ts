/*
 * @Description: Multi Language Japanese
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 16:04:27
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 17:27:10
 */
import { jpGlobalApplication } from './modules/GlobalApplication';
import { jpGlobalDrawer } from './modules/GlobalDrawer';
import { jpGlobalLanguage } from './modules/GlobalLanguage';
import { jpGlobalOption } from './modules/GlobalOptions';
import { jpGlobalTitle } from './modules/GlobalSystem';
import { jpLogin } from './modules/Login';

export default {
  GlobalApplication: jpGlobalApplication,
  GlobalDrawer: jpGlobalDrawer,
  GlobalTitle: jpGlobalTitle,
  GlobalLanguage: jpGlobalLanguage,
  Login: jpLogin,
  SystemSettings: {
    options: jpGlobalOption,
  },
};
