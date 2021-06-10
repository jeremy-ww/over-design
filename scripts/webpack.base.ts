import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
import excludeNodeModulesForAllOS from './utils/exclude-node-module';
import { requireFromProjectCWD, pathResolve } from './utils/path-resolve';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config();

const config: webpack.Configuration = {
  entry: './src/index',
  output: {
    path: pathResolve('./build'),
    filename: 'assets/js/[name].js',
    publicPath: '/',
    crossOriginLoading: 'anonymous',
    // NOTE: for non-initial chunk
    chunkFilename: 'assets/js/[name].chunk.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  externals: [
    {
      '@eureka/ui-managers': '__EurekaManagers__.default'
    }
  ],
  module: {
    // noParse: '',
    strictExportPresence: true,
    generator: {
      asset: {
        filename: 'assets/static/[hash][ext][query]'
      }
    },
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: excludeNodeModulesForAllOS(['@eureka', '@ui5']),
        // exclude: function (modulePath) {
        //   return (
        //     /node_modules/.test(modulePath) &&
        //     !/node_modules(\/|\\)@eureka/.test(modulePath) &&
        //     !/node_modules(\/|\\)@ui5/.test(modulePath)
        //   );
        // },
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
            options: {}
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          },
          to: '.'
        }
      ]
    }),
    new webpack.EnvironmentPlugin({
      // it seems that cypress-webpack will do this for us
      // NODE_ENV: 'test',
      REACT_APP_NAME: requireFromProjectCWD('./package.json').name
    }),
    // @ts-ignore
    new DuplicatePackageCheckerPlugin({
      exclude(instance: { name: string }) {
        return ['webpack', 'querystring'].includes(instance.name);
      }
    }),
    new Dotenv(),
    // @ts-ignore
    new ScriptExtHtmlWebpackPlugin({
      custom: {
        test: /\.js$/,
        attribute: 'crossorigin',
        value: 'anonymous'
      }
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      generate: (seed: any, files: any) => {
        const manifestFiles = files.reduce(function (manifest: any, file: any) {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        return {
          files: manifestFiles
        };
      }
    })
  ]
};

export default config;
