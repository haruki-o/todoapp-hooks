const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/RootContainer.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname,'dist'),
    host: "0.0.0.0",
    port: 3000,
    publicPath: '/html/'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
        filename: 'bundle.html'
      }
    )
  ]
}