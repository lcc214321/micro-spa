const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../lib/test.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../package'),
    publicPath: '/',
    library: 'testModule',
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimize: true,
    minimizer: []
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "../src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'less-loader',
        ],
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
})

