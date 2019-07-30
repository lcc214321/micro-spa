const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          // 图片导出路径
          outputPath: 'images/'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },
  // 在配置中添加插件
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../public/module-lib'),
        to: path.join(__dirname, '../dist/module-lib'),
      }
    ])
  ]
}
