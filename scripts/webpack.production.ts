import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import { GenerateSW } from 'workbox-webpack-plugin';
import { dotEnv } from './utils/load-config';
import reviseWebpack from './utils/revise-webpack';
import base from './webpack.base';

const config: webpack.Configuration = {
  mode: 'production',
  bail: true,
  output: {
    clean: true,
    // TODO: If we changed the order of imports, contenthash is different
    filename: 'assets/js/[name].[contenthash:8].js',
    // NOTE: for non-initial chunk
    chunkFilename: 'assets/js/[name].[chunkhash:8].chunk.js',
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: false } }],
      },
    ],
  },
  optimization: {
    // NOTE: use this two for debugging
    // chunkIds: 'named',
    // moduleIds: 'named',
    /**
     * @see https://github.com/webpack/webpack/blob/master/examples/common-chunk-and-vendor-chunk/webpack.config.js
     */
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
          enforce: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
    },
    mergeDuplicateChunks: true,
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // turn off flags with small gains to speed up minification
            arrows: false,
            collapse_vars: false, // 0.3kb
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,

            // a few flags with noticeable gains/speed ratio
            // numbers based on out of the box vendor bundle
            booleans: true, // 0.7kb
            if_return: true, // 0.4kb
            sequences: true, // 0.7kb
            unused: true, // 2.3kb

            // required features to drop conditional branches
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            safari10: true,
          },
        },
        parallel: true,
        extractComments: false,
      }) as unknown as webpack.WebpackPluginInstance,
      new CssMinimizerPlugin() as unknown as webpack.WebpackPluginInstance,
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    }) as unknown as webpack.WebpackPluginInstance,
    new HtmlWebpackPlugin({
      template: './static/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }) as unknown as webpack.WebpackPluginInstance,
    dotEnv.REPORT && (new BundleAnalyzerPlugin() as unknown as webpack.WebpackPluginInstance),
    false &&
      new GenerateSW({
        inlineWorkboxRuntime: true,
        runtimeCaching: [
          {
            handler: 'CacheFirst',
            /**
             * @see https://developers.google.com/web/tools/workbox/modules/workbox-routing
             */
            urlPattern: new RegExp('https://unpkg\\.com/.*'),
          },
        ],
      }),
  ].filter((v): v is webpack.WebpackPluginInstance => Boolean(v)),
};

const finalConfig = merge(base, config);

reviseWebpack(finalConfig);

export default finalConfig;
