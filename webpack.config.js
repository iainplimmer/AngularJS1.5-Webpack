var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'resources/app');

module.exports = {
  entry: APP_DIR + '/application.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.js?/,
        loader: 'babel',
        exclude: /node_modules/,
        include : APP_DIR,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  }
};