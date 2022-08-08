/*
 * @Author: Miya
 * @Date: 2022-08-08 23:02:50
 * @LastEditTime: 2022-08-08 23:10:46
 * @LastEditors: Miya
 * @Description: Multi Language for Login Page
 * @FilePath: \Vue3-Element-Template\src\language\modules\Login.ts
 */

const Login = {
  zh: {
    login: '登录',
    register: '注册',
    loginForm: '注册表单',
    username: '用户名',
    password: '密码',
    loginDescription: '请输入用户名及密码以便登录',
  },
  en: {
    login: 'Login',
    register: 'Register',
    loginForm: 'Login Form',
    username: 'Username',
    password: 'Password',
    loginDescription: 'Please enter your details',
  },
  jp: {
    login: 'ログイン',
    register: '新規登録',
    loginForm: 'ログインフォーム',
    username: 'アカウント名',
    password: 'パスワード',
    loginDescription: 'アカウント名とパスワードを入力してください',
  },
};

const zhLogin = {
  ...Login.zh,
};

const enLogin = {
  ...Login.en,
};

const jpLogin = {
  ...Login.jp,
};

export { zhLogin, enLogin, jpLogin };
