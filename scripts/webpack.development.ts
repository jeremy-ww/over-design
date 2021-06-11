import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import { requireFromProjectCWD, pathResolve } from './utils/path-resolve';
import clearConsole from 'react-dev-utils/clearConsole';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import chalk from 'chalk';

// just in case you run into any typescript error when configuring `devServer`
import reviseWebpack from './utils/revise-webpack';
import type devServer from 'webpack-dev-server';
import base from './webpack.base';

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

function printInstructions(urls: { localUrlForTerminal: string; lanUrlForTerminal?: string }) {
  console.log();
  console.log(
    chalk.bold(
      chalk.green(
        `You can now view ${requireFromProjectCWD('./package.json').name} in the browser.`
      )
    )
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

// e.g, 2105
const PORT = Number(process.env.PORT);

const config: webpack.Configuration & { devServer: devServer.Configuration } = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'less-loader', options: { sourceMap: false } }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { sourceMap: false } }]
      }
    ]
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  experiments: {
    lazyCompilation: true
  },
  devServer: {
    hot: true,
    port: PORT,
    compress: true,
    disableHostCheck: true,
    transportMode: 'ws',
    injectClient: true,
    historyApiFallback: {
      disableDotRule: true
    },
    // NOTE: use this for debugging
    // stats: 'verbose',
    overlay: {
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins: [
    new ClearWebpackDevServerMessagePlugin(),
    new HtmlWebpackPlugin({
      title: requireFromProjectCWD('./package.json').name,
      template: './static/index.html'
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: false
    }),
    false && new GenerateSW()
  ].filter((v): v is webpack.WebpackPluginInstance => Boolean(v))
};

const finalConfig = merge(base, config);

reviseWebpack(finalConfig);

export default finalConfig;
