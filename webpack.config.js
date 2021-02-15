const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx']
          },
        }
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname,'dist'),
    host: "0.0.0.0",
    port: 3000,
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