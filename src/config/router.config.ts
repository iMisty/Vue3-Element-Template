/*
 * @Author: Miya
 * @Date: 2020-09-21 18:17:43
 * @LastEditTime: 2020-11-24 17:05:23
 * @LastEditors: Miya
 * @Description: 导航栏配置
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\LandingPage\src\config\router.config.ts
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
    text: 'Home',
    link: '/'
  },
  {
    icon: '',
    text: 'Work',
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
    text: 'Blog',
    link: '/blog'
  },
  {
    icon: '',
    text: 'About',
    link: '/about'
  },
  {
    icon: '',
    text: 'Contact',
    link: '/contact'
  },
  {
    icon: '',
    text: 'Admin',
    link: '/admin'
  },
  {
    icon: '',
    text: 'Login',
    link: '/login'
  }
];
