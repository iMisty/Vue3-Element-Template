/*
 * @Description: Multi Language Chinese
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 16:03:52
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 17:26:58
 */
import { zhGlobalApplication } from './modules/GlobalApplication';
import { zhGlobalDrawer } from './modules/GlobalDrawer';
import { zhGlobalLanguage } from './modules/GlobalLanguage';
import { zhGlobalOption } from './modules/GlobalOptions';
import { zhGlobalTitle } from './modules/GlobalSystem';
import { zhLogin } from './modules/Login';

export default {
  GlobalApplication: zhGlobalApplication,
  GlobalDrawer: zhGlobalDrawer,
  GlobalLanguage: zhGlobalLanguage,
  GlobalTitle: zhGlobalTitle,
  Login: zhLogin,
  SystemSettings: {
    options: zhGlobalOption,
  },
};
