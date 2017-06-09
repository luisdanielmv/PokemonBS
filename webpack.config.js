const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const precss = require('precss');
// const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: {
    javascript: './app.jsx'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[hash].bundle.js',
    sourceMapFilename: '[hash].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|js?)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              includePaths: [path.join(__dirname, '/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/')]
            }
          }
        ]
      }, 
      {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      }  
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl.ejs'
    })
  ],
};
