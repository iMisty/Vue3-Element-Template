/*
 * @Description: Router interface
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-25 10:10:49
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-25 10:32:14
 */
interface RouterData {
  path: String;
  name: String;
  component: Object;
  redirect?: String;
  meta?: RouterDataMeta;
  children?: Array<RouterData>;
}

interface RouterDataMeta {
  title: String;
  icon?: String;
  /**
   * @deprecated hidden is deprecated since 2.1 and will be remove on 2.2.Use isHidden
   */
  hidden?: Boolean;
  isHidden?: Boolean;
  isFirstRoute?: Boolean;
}

export default RouterData;
