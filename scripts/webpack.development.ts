import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import chalk from 'chalk';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import clearConsole from 'react-dev-utils/clearConsole';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import webpack from 'webpack';
import type devServer from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import { GenerateSW } from 'workbox-webpack-plugin';
import { dotEnv } from './utils/load-config';
import { requireFromProjectCWD } from './utils/path-resolve';
// just in case you run into any typescript error when configuring `devServer`
import reviseWebpack from './utils/revise-webpack';
import base from './webpack.base';

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

function printInstructions(urls: { localUrlForTerminal: string; lanUrlForTerminal?: string }) {
  console.log();
  console.log(
    chalk.bold(
      chalk.green(
        `You can now view ${requireFromProjectCWD('./package.json').name} in the browser.`,
      ),
    ),
  );
  console.log();

  console.log(`  ${chalk.bold('Local:')}            ${urls.localUrlForTerminal}`);
  console.log(`  ${chalk.bold('On Your Network:')}  ${urls.lanUrlForTerminal}`);
  console.log();
}

class ClearWebpackDevServerMessagePlugin {
  apply(compiler: webpack.Compiler) {
    compiler.hooks.done.tapAsync('ClearWebpackDevServerMessagePlugin', async (params, callback) => {
      clearConsole();
      await callback();
      printInstructions(prepareUrls('http', '0.0.0.0', compiler.options.devServer?.port));
    });
  }
}

const config: webpack.Configuration & { devServer: devServer.Configuration } = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { sourceMap: false } }],
      },
    ],
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  experiments: {
    lazyCompilation: true,
  },
  devServer: {
    hot: true,
    port: dotEnv.PORT,
    compress: true,
    disableHostCheck: true,
    transportMode: 'ws',
    injectClient: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    // NOTE: use this for debugging
    // stats: 'verbose',
    overlay: {
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new ClearWebpackDevServerMessagePlugin(),
    new HtmlWebpackPlugin({
      title: requireFromProjectCWD('./package.json').name,
      template: './static/index.html',
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    false && new GenerateSW(),
  ].filter((v): v is webpack.WebpackPluginInstance => Boolean(v)),
};

const finalConfig = merge(base, config);

reviseWebpack(finalConfig);

export default finalConfig;
