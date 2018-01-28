'use strict'
var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var importer = require('node-sass-importer')

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '3001'

// loaders.push({
//   test: /\.scss$/,
//   loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
//   exclude: ['node_modules']
// });

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    './src/index.jsx' // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './public',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        'HOST': JSON.stringify(HOST),
        'PORT': JSON.stringify(PORT)
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      files: {
        css: ['[name].css'],
        js: ['bundle.js']
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          importer: importer
        },
        context: __dirname
      }
    })
    // new webpack.ProvidePlugin({
    //   tether: 'tether',
    //   Tether: 'tether',
    //   'window.Tether': 'tether',
    // }),
    // new webpack.ProvidePlugin({
    //   Popper: ['popper.js', 'default'],
    //   // In case you imported plugins individually, you must also require them here:
    //   Util: 'exports-loader?Util!bootstrap/js/dist/util',
    //   Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
    //   Grid: 'exports-loader?Grid!bootstrap/js/dist/Grid',
    // }),
  ]
}
