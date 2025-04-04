const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // src/index.js -> não é uma boa pois o file de um sistema pode ser diferente
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module:{
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  devServer: {
    port:8080
  }
}