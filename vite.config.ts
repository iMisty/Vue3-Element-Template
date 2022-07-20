/*
 * @Description: Vite Config
 * @Version: 2.1
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-21 00:20:17
 */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import Gzip from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Gzip({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    vueJSX(),
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'assets'),
      components: path.resolve(__dirname, 'components'),
      config: path.resolve(__dirname, 'config'),
      store: path.resolve(__dirname, 'store'),
      utils: path.resolve(__dirname, 'utils'),
    },
  },
  build: {
    terserOptions: {
      /**
       *
       *  Remove Console and Debugger on Production Mode
       *
       */
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    modules: {
      generateScopedName: 'miya__[name]__[hash:base64:4]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      /**
       *
       *  Global Less Variable
       *
       */
      less: {
        additionalData: '@import "@/style/variable.less";',
        javascriptEnabled: true,
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 12450,
    open: true,
    https: false,
    proxy: {
      '/api': {
        // target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
