const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: '',
  },
  output: {
    path: '/dist',
    filename: '[name].js',
    publicPath: '/',
  },
  module: {

  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};