/*
 * @Author: Miya
 * @Date: 2020-09-22 16:49:55
 * @LastEditTime: 2020-10-13 11:23:16
 * @LastEditors: Miya
 * @Description: 首页使用配置
 * @FilePath: \LandingPage\src\config\index.config.ts
 * @Version: 1.0
 */
export const Index = {
  navbar: {
    logo: require('@/assets/logo.png')
  },
  header: {
    background: require('@/assets/bg.jpg')
  },
  concept: {
    title: 'Concept',
    text: `
風にそよぐ瑞々しい葉
色とりどりに咲く花々
美しく、やさしい、そして時にはたくましい
人は癒やされ、こころ満たされます

私たちは、プラチナプリズム
私たちは、デザインとウェブサイト作るスタジオです
しあわせな日々をお届けしたいと願っています`
  },
  work: {
    title: 'Works',
    works: [
      {
        title: 'Website',
        text: 'ウェブ制作',
        icon: require('@/assets/test.svg'),
        intro: 'Webサイト制作・システム開発'
      },
      {
        title: 'Design',
        text: 'UIデザイン',
        icon: require('@/assets/test.svg'),
        intro: 'UI、UE制作・管理'
      },
      {
        title: 'Program',
        text: 'プログラム制作',
        icon: require('@/assets/test.svg'),
        intro: 'プログラム開発・管理'
      }
    ]
  },
};
