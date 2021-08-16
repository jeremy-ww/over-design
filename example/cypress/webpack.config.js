// @ts-check
const webpack = require('webpack');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const excludeNodeModulesForAllOS = require('./misc/exclude-node-module');

dotenv.config();

// https://github.com/cypress-io/cypress/issues/15864#issuecomment-832378600

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      'react-redux': 'react-redux/dist/react-redux.js',
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: excludeNodeModulesForAllOS(['react-redux', 'react-router-dom']),
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // https://docs.cypress.io/guides/references/changelog#7-6-0
      // https://github.com/cypress-io/cypress/issues/15447
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/static/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/static/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      // it seems that cypress-webpack NODE_ENV: 'test' will do this for us.
      // but we need it to be development temporarily for @eureka/ui-components.
      // NODE_ENV: 'development',
    }),
    new Dotenv(),
  ],
};

module.exports = config;
