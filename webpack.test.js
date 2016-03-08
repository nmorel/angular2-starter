const path = require('path');
const webpack = require('webpack');

const imageFilename = 'images/[name].[hash].[ext]';

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        exclude: [/node_modules/],
        loader: 'ts'
      },
      {
        test: /\.(png|jpg|ico|svg|eot|ttf|woff)$/,
        exclude: [/node_modules/],
        loader: 'file?name=' + imageFilename
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: 'style!css?modules!autoprefixer?browsers=last 2 versions!sass'
      }
    ],
    noParse: [
      /angular2\/bundles\/.+/
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
