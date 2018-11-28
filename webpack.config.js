let path = require('path');
const webpack = require("webpack");
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'public/javascripts');
var DIST_PATH = path.resolve(ROOT_PATH, 'public/dist');
//let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',//设置生成模式
  entry:{
    'login':  path.resolve(APP_PATH + '/login.js'),
    'register':  path.resolve(APP_PATH + '/register.js'),
    'index':  path.resolve(APP_PATH + '/index.js'),
    'forget':  path.resolve(APP_PATH + '/forget.js'),
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
  },
  devServer: {
  	contentBase: path.resolve(__dirname, 'public/dist'),
    inline: true, //实时刷新
    port: 3000,
  },
  module:{
  	rules:[
  	{
      test: /\.js$/, // babel 转换为兼容性的 js
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader',
        query: {
          presets:['latest','stage-0'],  // 加入stage-0 尝试使用es7，
        }
      }
    },{
  		test:/\.css$/,
  		use: [ 'style-loader', 'css-loader' ]
  	}
  	]
  },
/*  plugins: [
    new htmlWebpackPlugin({
      title: 'index',
      template: path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks:['index']
    })
  ],*/
  externals : {
    'jquery' : 'window.jQuery'
  }
}