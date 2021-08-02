import dotenv from 'dotenv';
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
} as const;
