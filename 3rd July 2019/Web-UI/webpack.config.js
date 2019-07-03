const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webBundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 4000
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "dist/index.html", // Write the file to <public-path>/graphql/index.html
  })]
};