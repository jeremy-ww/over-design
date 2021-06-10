import { requireFromProjectCWD, pathResolve } from './path-resolve';
import webpack from 'webpack';
import fs from 'fs';

const CONFIG_NAME = 'webpack-overd.ts';

export default (finalConfig: webpack.Configuration) => {
  if (fs.existsSync(pathResolve(CONFIG_NAME))) {
    requireFromProjectCWD(CONFIG_NAME).default(finalConfig);
  }
};
