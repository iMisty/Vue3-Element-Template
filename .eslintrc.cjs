/*
 * @Description: ESLint Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 10:42:07
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-17 02:37:18
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    semi: [2, 'always'],
    'no-new': [0],
    'no-debugger': [0],
    'no-console': [0],
    'no-return-assign': ['error', 'except-parens'],
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
