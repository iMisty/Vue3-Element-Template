/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-11 03:38:36
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-04 00:34:18
 * @Description: 项目表示接口
 * @FilePath: /Kagura-Landing-Backend/Users/linjingyi/Documents/GitHub/Kagura-LandingPage/src/model/WorkItem.ts
 */

export interface WorkItem {
  // mongodb 自带 id
  _id: string;
  // 用户设置 ID
  id?: number;
  // 头像
  avatar?: string;
  // 标题
  title?: string;
  // 标签
  tag?: string[];
  // 简介
  intro?: string;
  // 内文
  content?: string;
  // 演示地址
  preview?: string;
  // 源代码仓库
  source: string;
  // 最后更新日期
  lastupdate?: string | number;
  // 版本
  version?: string;
  // 状态
  status?: string;
  // mongodb 自带版本控制
  __v?: string;
}
