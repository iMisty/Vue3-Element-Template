/*
 * @Author: Miya
 * @Date: 2022-08-20 01:33:55
 * @LastEditTime: 2022-09-17 00:54:58
 * @LastEditors: Miya
 * @Description: VuePress Sidebar Config
 * @FilePath: \Vue3-Element-Template\docs\.vitepress\settings\sidebar.ts
 */

const configSidebar = [
  {
    text: 'Introduction 介绍',
    items: [
      {
        text: 'Index 首页',
        link: '/intro',
      },
      {
        text: 'ChangeLog 修改日志',
        link: '/changelog',
      },
    ],
  },
  {
    text: 'Component 组件',
    items: [{ text: 'Intro 目录', link: '/component/intro' }],
  },
  {
    text: 'Config 配置项',
    items: [{ text: 'Intro 目录', link: '/config/intro' }],
  },
  {
    text: 'Page 页面',
    items: [{ text: 'Intro 目录', link: '/page/intro' }],
  },
  {
    text: 'Util 工具类',
    items: [{ text: 'Intro 目录', link: '/util/intro' }],
  },
];

export default configSidebar;
