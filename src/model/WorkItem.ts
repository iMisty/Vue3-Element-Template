/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-11 03:38:36
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-11 04:49:58
 * @Description: 项目表示接口
 * @FilePath: /Kagura-LandingPage/src/model/WorkItem.ts
 */
export interface WorkItem {
  id: number;
  avatar: object | string;
  title: string;
  tag: string[];
  intro: string;
  preview: string;
  source: string;
  lastupdate: string | number;
  version: string;
  status: string;
}
