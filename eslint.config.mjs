/*
 * ESLint flat config (ESLint v9+).
 * Replaces the legacy .eslintrc.cjs + airbnb-base setup with the modern
 * typescript-eslint + eslint-plugin-vue stack. Formatting is delegated to
 * Prettier (eslint-config-prettier disables conflicting stylistic rules).
 */
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      '.github',
      'public',
      'src/assets/**',
      '**/*.less',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-console': 'off',
      'no-debugger': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // This template builds components with Vue JSX in .tsx files and uses
      // single-word route-view names (Login, Dashboard, ...) by convention.
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/component-definition-name-casing': 'off',
    },
  },
  prettier,
);
