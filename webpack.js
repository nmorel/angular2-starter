const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = config => {
  const publicPath = '/';
  const filename = 'scripts/[name].[chunkhash].js';
  const cssFilename = 'styles/[name].[contenthash].css';
  const imageFilename = 'images/[name].[hash].[ext]';

  const result = {
    entry: {
      app: './src/index.js'
    },
    devtool: config.prod ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015'],
            plugins: ['angular2-annotations', 'transform-class-properties', 'transform-decorators-legacy', 'transform-flow-strip-types']
          }
        },
        {
          test: /\.(png|jpg|ico|svg|eot|ttf|woff)$/,
          exclude: [/node_modules/],
          loader: 'file?name=' + imageFilename
        },
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          loader: ExtractTextPlugin.extract('css?modules!autoprefixer?browsers=last 2 versions!sass')
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: filename,
      publicPath: publicPath
    },
    plugins: [
      new ExtractTextPlugin(cssFilename),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    resolve: {
      modulesDirectories: ['.', './node_modules']
    },
    devServer: {
      publicPath: publicPath,
      progress: true,
      colors: true,
      contentBase: './src/',
      inline: false,
      hot: false
    }
  };

  if (config.prod) {
    result.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return result;
};
