/*
 * @Author: Miya
 * @Date: 2020-11-05 16:48:35
 * @LastEditTime: 2020-11-05 17:37:31
 * @LastEditors: Miya
 * @Description: About interface
 * @FilePath: \LandingPage\src\model\AboutItem.ts
 * @Version: 1.0
 */
export interface AboutItem {
  __v?: number;
  _id?: string;
  background?: string;
  introduct: {
    image?: string;
    title?: string;
    content?: string;
  };
  concept?: string;
}
