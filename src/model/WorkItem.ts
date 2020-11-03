/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-11 03:38:36
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-03 17:48:20
 * @Description: 项目表示接口
 * @FilePath: \LandingPage\src\model\WorkItem.ts
 */
export interface WorkItem {
  _id: string;
  id?: number;
  avatar?: object | string;
  title?: string;
  tag?: string[];
  intro?: string;
  content?: string;
  preview?: string;
  source: string;
  lastupdate?: string | number;
  version?: string;
  status?: string;
}
