/*
 * @Author: Miya
 * @Date: 2020-10-12 17:00:33
 * @LastEditTime: 2020-10-27 10:44:04
 * @LastEditors: Miya
 * @Description: Blog Model
 * @FilePath: \LandingPage\src\model\BlogItem.ts
 * @Version: 1.0
 */
export interface BlogItem {
  _id?: string;
  id: number | string;
  avatar?: object | string;
  time: string;
  tag?: string[];
  title: string;
  intro: string;
  text: string;
}
