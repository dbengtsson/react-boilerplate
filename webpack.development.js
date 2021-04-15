const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    historyApiFallback: true, // provides catch-all to return index.html
    compress: true,
    hot: true,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
});
