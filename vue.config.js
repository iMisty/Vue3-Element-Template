/*
 * @Author: Miya
 * @Date: 2020-10-22 14:46:13
 * @LastEditTime: 2020-11-24 17:56:59
 * @LastEditors: Miya
 * @Description: Vue Config
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\LandingPage\vue.config.js
 * @Version: 1.0
 */
module.exports = {
  // 打包输出目录
  publicPath: './',
  // 构建输出目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'static',
  // CSS配置
  // 查阅： https://cli.vuejs.org/zh/guide/css.html#%E5%BC%95%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90
  css: {
    // 提取至单独的CSS文件
    extract: true
  },
  configureWebpack: {
    resolve: {
      // alias: {
      //   // 别名
      //   vue$: "vue/dist/vue.esm.js",
      // }
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    }
  },
  // 代理服务器配置
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://v2.dressweb.cn/',
        target: 'http://localhost:12345',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};