/*
 * @Author: Miya
 * @Date: 2020-11-05 16:43:49
 * @LastEditTime: 2021-02-20 15:57:00
 * @LastEditors: Miya
 * @Description: Footer Interface
 * @FilePath: \LandingPage\src\model\FooterItem.ts
 * @Version: 1.0
 */
export interface FooterItem {
  __v?: number;
  _id?: string;
  logo?: {
    img: string | object;
    text: {
      pri: string;
      sec: string;
    };
  };
  contact?: ContactItem[];
  copyright?: {
    startYear: number;
    author: string;
    website: string;
  };
}

interface ContactItem {
  name: string;
  icon: string | object;
  href: string;
}
