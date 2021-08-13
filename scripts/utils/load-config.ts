import dotenv from 'dotenv';
import 'dotenv-defaults/config';
import path from 'path';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const dotEnvPath = path.resolve(process.cwd(), `.env${IS_PRODUCTION ? '.production' : ''}`);

dotenv.config({
  path: dotEnvPath,
});

export const dotEnv = {
  IS_PRODUCTION,
  PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
  REPORT: Boolean(process.env.REPORT),
  // https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#running-multiple-instances-of-react-refresh-simultaneously
  UNIQUE_NAME: process.env.UNIQUE_NAME,
} as const;
