import path from 'path';

export const pathResolve = (subPath: string) => path.resolve(subPath);

export const requireFromProjectCWD = (subPath: string) => require(pathResolve(subPath))
