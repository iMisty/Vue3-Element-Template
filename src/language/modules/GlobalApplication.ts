/*
 * @Description: Multi Language for Application
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-08 15:48:58
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 16:49:48
 */
const textApplication = {
  zh: { login: '登录', logout: '登出', profile: '用户信息', setting: '设置' },
  en: {
    login: 'Login',
    logout: 'Logout',
    profile: 'Profile',
    setting: 'Setting',
  },
  jp: {
    login: 'ログイン',
    logout: 'ログアウト',
    profile: 'プロフィール',
    setting: '設定',
  },
};

const descriptionApplication = {
  zh: {
    desLogout: '退出登录并返回登录页',
    desProfile: '查看或修改当前账户信息',
    desSetting: '系统设置',
  },
  en: {
    desLogout: 'Logout and Return to Login Page',
    desProfile: 'View and Change This Account Profile',
    desSetting: 'System Setting',
  },
  jp: {
    desLogout: 'ログインを終了してログインページに戻る',
    desProfile: 'アカウント情報の表示または変更',
    desSetting: 'システム設定',
  },
};

const zhGlobalApplication = {
  ...textApplication.zh,
  ...descriptionApplication.zh,
};

const enGlobalApplication = {
  ...textApplication.en,
  ...descriptionApplication.en,
};

const jpGlobalApplication = {
  ...textApplication.jp,
  ...descriptionApplication.jp,
};

export { zhGlobalApplication, enGlobalApplication, jpGlobalApplication };
