/*
 * @Author: Miya
 * @Date: 2020-10-12 17:00:33
 * @LastEditTime: 2020-11-02 17:44:46
 * @LastEditors: Miya
 * @Description: Blog Model
 * @FilePath: \LandingPage\src\model\BlogItem.ts
 * @Version: 1.0
 */
export interface BlogItem {
  _id: string;
  id: number | string;
  avatar?: object | string;
  tag?: string[];
  title: string;
  intro?: string;
  content?: string;
  time: string;
  __v?: number;
}
