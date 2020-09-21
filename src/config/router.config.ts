/*
 * @Author: Miya
 * @Date: 2020-09-21 18:17:43
 * @LastEditTime: 2020-09-22 00:54:47
 * @LastEditors: Miya
 * @Description: 导航栏配置
 * @FilePath: /Kagura-LandingPage/src/config/router.config.ts
 * @Version: 1.0
 */
interface Route {
  icon?: string | object;
  text: string;
  link: string;
  child?: Route[];
}

export const Router: Route[] = [
  {
    icon: '',
    text: '首页',
    link: '/'
  },
  {
    icon: '',
    text: '项目',
    link: '/work',
    // child: [
    //   {
    //     icon: '',
    //     text: '项目1',
    //     link: '/1'
    //   },
    //   {
    //     icon: '',
    //     text: '项目2',
    //     link: '/2'
    //   },
    //   {
    //     icon: '',
    //     text: '项目3',
    //     link: '/3'
    //   }
    // ]
  },
  {
    icon: '',
    text: '关于',
    link: '/about'
  },
  {
    icon: '',
    text: '联系',
    link: '/content'
  },
  {
    icon: '',
    text: '后台',
    link: '/loading'
  }
];
