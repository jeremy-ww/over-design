import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import webpack from 'webpack';
import { dotEnv, dotEnvPath } from './utils/load-config';
import { pathResolve, requireFromProjectCWD } from './utils/path-resolve';

const config = {
  entry: './src/index',
  output: {
    path: pathResolve('./dist'),
    filename: 'assets/js/[name].js',
    publicPath: dotEnv.PUBLIC_PATH,
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
          // We can't use esbuild-loader cuz its cannot integrate with React-Refresh.
          'thread-loader',
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
  // @ts-ignore
  plugins: [
    // @ts-ignore
    new webpack.EnvironmentPlugin({
      // it seems that cypress-webpack will do this for us
      // NODE_ENV: 'test',
      APP_NAME: requireFromProjectCWD('./package.json').name,
    }),
    // @ts-ignore
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
    // @ts-ignore
    new DuplicatePackageCheckerPlugin({
      exclude(instance: { name: string }) {
        return ['webpack', 'querystring'].includes(instance.name);
      },
    }),
    // @ts-ignore
    new ScriptExtHtmlWebpackPlugin({
      custom: {
        test: /\.js$/,
        attribute: 'crossorigin',
        value: 'anonymous',
      },
    }),
    // @ts-ignore
    new Dotenv({
      path: dotEnvPath,
    }),
  ],
} as webpack.Configuration;

export default config;
