import { requireFromProjectCWD, pathResolve } from './path-resolve';
import webpack from 'webpack';
import fs from 'fs';

const CONFIG_NAME = 'webpack-revise.js';

export default (finalConfig: webpack.Configuration) => {
  if (fs.existsSync(pathResolve(CONFIG_NAME))) {
    requireFromProjectCWD(CONFIG_NAME)(finalConfig);
  }
};
