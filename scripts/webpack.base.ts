import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import { requireFromProjectCWD, pathResolve } from './utils/path-resolve';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config();

const config: webpack.Configuration = {
  entry: './src/index',
  output: {
    path: pathResolve('./dist'),
    filename: 'assets/js/[name].js',
    publicPath: '/',
    crossOriginLoading: 'anonymous',
    // NOTE: for non-initial chunk
    chunkFilename: 'assets/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    // noParse: '',
    strictExportPresence: true,
    generator: {
      asset: {
        filename: 'assets/static/[hash][ext][query]',
      },
    },
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          // TODO: I don't know how to integrate esbuild with hot reload.
          // {
          //   use: "esbuild-loader",
          //   options: {
          //     loader: "tsx",
          //     target: "es2015",
          //     tsconfigRaw: require("../tsconfig.json"),
          //   },
          // },
          {
            loader: 'babel-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'static',
          globOptions: {
            ignore: ['**/index.html'],
          },
          to: '.',
        },
      ],
    }),
    new webpack.EnvironmentPlugin({
      // it seems that cypress-webpack will do this for us
      // NODE_ENV: 'test',
      APP_NAME: requireFromProjectCWD('./package.json').name,
    }),
    // @ts-ignore
    new DuplicatePackageCheckerPlugin({
      exclude(instance: { name: string }) {
        return ['webpack', 'querystring'].includes(instance.name);
      },
    }),
    new Dotenv(),
    // @ts-ignore
    new ScriptExtHtmlWebpackPlugin({
      custom: {
        test: /\.js$/,
        attribute: 'crossorigin',
        value: 'anonymous',
      },
    }),
  ],
};

export default config;
