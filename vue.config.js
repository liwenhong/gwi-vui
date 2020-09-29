const utils = require('./build/utils.js')
const { join } = require('path')
const { externalMap } = require('./config/index')
module.exports = {
  lintOnSave: !utils.isProduct,
  runtimeCompiler: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(join(process.cwd(), 'src'))
      .end()
      // 关闭利用空余带宽加载文件 提升首页速度
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
    config.when(utils.isProduct, (config) => {
      // 开启图片压缩
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          bypassOnDebug: true
        })
        .end()
    })
  },
  configureWebpack: (config) => {
    if (utils.isProduct) {
      config.externals = externalMap
    }
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {}
  }
}