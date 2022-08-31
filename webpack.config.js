const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const environment = process.env.NODE_ENV || 'development';
const environment = 'production';

module.exports = {
  entry: {
    script: './src/js/script.js',
    // top: './src/js/top.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: `${__dirname}/dist/js`,
    // path: `${__dirname}/wordpress-theme/js`,
    filename: '[name].js',
  },
  mode: environment,
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          compress: {
            // drop_console: environment === 'production' ? true : false,
            // drop_console: true,
            drop_console: false,
          },
        },
      }),
    ],
  },
};
