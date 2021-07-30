import dotenv from 'dotenv';
import path from 'path';

export const dotEnvPath = path.resolve(
  process.cwd(),
  `.env${process.env.NODE_ENV === 'production' ? '.production' : ''}`,
);

dotenv.config({
  path: dotEnvPath,
});

export const dotEnv = {
  PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
  REPORT: Boolean(process.env.REPORT),
} as const;
