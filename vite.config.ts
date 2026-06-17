/*
 * @Description: Vite Config
 * @Version: 3.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Miya
 */
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import tailwindcss from '@tailwindcss/vite';
import { compression } from 'vite-plugin-compression2';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    tailwindcss(),
    compression({
      threshold: 10240,
      algorithms: ['gzip'],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    VueI18nPlugin({
      // No `include`: locale messages are assembled at runtime in
      // src/language/index.ts rather than precompiled resource files.
      // Keep the full build so runtime locale objects (e.g. Element Plus
      // locales) are compiled on the fly, preserving the previous behaviour.
      runtimeOnly: false,
    }),
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
    minify: 'terser',
    terserOptions: {
      /**
       *  Remove Console and Debugger on Production Mode
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
       *  Global Less Variable
       */
      less: {
        additionalData: '@import "@/style/variable.less";',
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 12458,
    open: true,
    proxy: {
      '/api': {
        // target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
});
