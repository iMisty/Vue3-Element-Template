/*
 * @Description: Multi Language English
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 16:04:06
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 17:27:22
 */
import { enGlobalApplication } from './modules/GlobalApplication';
import { enGlobalDrawer } from './modules/GlobalDrawer';
import { enGlobalLanguage } from './modules/GlobalLanguage';
import { enGlobalOption } from './modules/GlobalOptions';
import { enGlobalTitle } from './modules/GlobalSystem';
import { enLogin } from './modules/Login';

export default {
  GlobalApplication: enGlobalApplication,
  GlobalDrawer: enGlobalDrawer,
  GlobalLanguage: enGlobalLanguage,
  GlobalTitle: enGlobalTitle,
  Login: enLogin,
  SystemSettings: {
    options: enGlobalOption,
  },
};
