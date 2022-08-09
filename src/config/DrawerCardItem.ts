/*
 * @Description: Drawer Card Item Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-08 15:03:22
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 17:06:17
 */

import { Component } from 'vue';
import { ElMessage } from 'element-plus';
import { House, SwitchButton, Setting } from '@element-plus/icons-vue';
import { $t } from '@/language';
import { useAPPStore } from '@/store/appStore';

/**
 * type for DrawerCardItem
 */
type DrawerCardItem = {
  /**
   * icon in @element-plus/icon-vue
   * @TODO Custom Icon
   */
  icon: Component;
  /**
   * Drawer Item's Title
   */
  title: String;
  /**
   * Drawer Item's Content
   */
  content: String;
  /**
   * Close Drawer Component Param
   * @description If this is true,It's will be close drawer after callback function
   */
  isClose: Boolean;
  /**
   * Click Event Function
   * @description This function will be start on click event
   */
  callback?: Function;
};

/**
 * @exports <DrawerCardItem>
 * Drawer Container Card List Item
 */
const DrawerCardItem: Array<DrawerCardItem> = [
  {
    icon: House,
    title: $t('GlobalApplication.profile'),
    content: $t('GlobalApplication.desProfile'),
    isClose: false,
    callback: () => {
      ElMessage({
        message: 'TODO',
        type: 'info',
      });
    },
  },
  {
    icon: Setting,
    title: $t('GlobalApplication.setting'),
    content: $t('GlobalApplication.desSetting'),
    isClose: true,
    callback: () => {
      ElMessage({
        message: 'TODO',
        type: 'info',
      });
    },
  },
  {
    icon: SwitchButton,
    title: $t('GlobalApplication.logout'),
    content: $t('GlobalApplication.desLogout'),
    isClose: true,
    callback: () => {
      ElMessage({
        message: 'TODO',
        type: 'info',
      });
      setTimeout(() => {
        useAPPStore().setLogout();
      }, 3000);
    },
  },
];

export default DrawerCardItem;
