const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './build/index.js',
  mode: 'production',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({template: './index.html'})
  // ],
  module: {
    rules: [
     { 
      test: /\.txt$/, 
      use: 'raw-loader' 
      }
    ]
      
  },
};