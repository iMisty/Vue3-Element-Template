/*
 * @Author: Miya
 * @Date: 2020-10-12 17:00:33
 * @LastEditTime: 2020-10-12 18:11:59
 * @LastEditors: Miya
 * @Description: Blog Model
 * @FilePath: \LandingPage\src\model\BlogItem.ts
 * @Version: 1.0
 */
export interface BlogItem {
  id: number | string;
  avatar?: object | string;
  time: string;
  tag?: string[];
  title: string;
  intro: string;
  text: string;
}
