const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|png|gif|bmp)$/, use: 'url-loader?limit=1024'},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
}

