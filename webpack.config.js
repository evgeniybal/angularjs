const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({ test: /\.js(\?.*)?$/i })]
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: 'html-loader' },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      { template: 'index.html' },
      new WebpackAutoInject({
        // options
        // example:
        components: {
          AutoIncreaseVersion: false
        }
      })
    )
  ]
};
