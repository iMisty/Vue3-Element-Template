import { Component } from 'vue';

/*
 * @Description: Router interface
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-25 10:10:49
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-28 16:30:40
 */
interface RouterData {
  path: string;
  name: string;
  component: Object;
  redirect?: string;
  meta?: RouterDataMeta;
  children?: Array<RouterData>;
}

interface RouterDataMeta {
  title: string;
  icon?: string;
  /**
   * @deprecated hidden is deprecated since 2.1 and will be remove on 2.2.Use isHidden
   */
  hidden?: Boolean;
  isHidden?: Boolean;
  isFirstRoute?: Boolean;
  isCollapse?: Boolean;
}

export default RouterData;
