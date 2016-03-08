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
      app: './src/index.ts'
    },
    devtool: config.prod ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
      loaders: [
        {
          test: /\.ts/,
          exclude: [/\.spec\.ts$/, /node_modules/],
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
          loader: ExtractTextPlugin.extract('css?modules!autoprefixer?browsers=last 2 versions!sass')
        }
      ],
      noParse: [
        /angular2\/bundles\/.+/
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
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(config.prod ? 'production' : 'development')
      })
    ],
    resolve: {
      extensions: ['', '.ts', '.js'],
      modulesDirectories: ['node_modules'],
      root: path.resolve('./src')
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
