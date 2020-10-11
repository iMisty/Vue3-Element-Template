/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-11 23:33:21
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-12 00:53:04
 * @Description: About 配置字段
 * @FilePath: /Kagura-LandingPage/src/config/about.config.ts
 */
export const about = {
  introduct: {
    image: require('@/assets/undraw_Designer_mindset_re_2w1k.svg'),
    title: `
    私たちと一緒に
    働きませんか？`,
    text:
      'Webサイト制作・システム開発の両事業とも、弊社の企業理念である「期待を超える品質と感動を与える企業」を体現しており、技術力の高さには定評があるため業績は好調です。今後もより一層の顧客満足、サービス向上を目指して全員一丸となって取り組み、日々進化を続けていくため、新たにフレッシュなメンバーを募集しております。'
  },
  concept: `
    風にそよぐ瑞々しい葉
    色とりどりに咲く花々
    美しく、やさしい、そして時にはたくましい
    人は癒やされ、こころ満たされます
    
    私たちは、プラチナプリズム
    私たちは、デザインとウェブサイト作るスタジオです
    しあわせな日々をお届けしたいと願っています`,
  team: [
    {
      name: 'Test Team 1',
      avatar: require('@/assets/47161.png'),
      position: 'UI Design',
      contact: [
        { mail: '#', icon: 'envelope-o' },
        { github: '#', icon: 'github' },
        { telegram: '#', icon: 'telegram' }
      ]
    },
    {
      name: 'Test Team 2',
      avatar: require('@/assets/193289.png'),
      position: 'UI Design',
      contact: [
        { mail: '#', icon: 'envelope-o' },
        { github: '#', icon: 'github' },
        { telegram: '#', icon: 'telegram' }
      ]
    },
    {
      name: 'Test Team 3',
      avatar: require('@/assets/469885.png'),
      position: 'UI Design',
      contact: [
        { mail: '#', icon: 'envelope-o' },
        { github: '#', icon: 'github' },
        { telegram: '#', icon: 'telegram' }
      ]
    }
  ]
};
