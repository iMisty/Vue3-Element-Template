/*
 * @Description: ESLint Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 10:42:07
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-06 10:44:45
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
