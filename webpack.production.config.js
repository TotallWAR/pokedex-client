var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
require('babel-polyfill')

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'
  }),
  exclude: ['node_modules']
})

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx',
    './public/styles/index.scss'
  ],
  output: {
    publicPath: './assets',
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].js',
    library: 'classie',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      files: {
        css: ['index.css'],
        js: ['bundle.js']
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.ProvidePlugin({
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether'
    })
  ]
}
