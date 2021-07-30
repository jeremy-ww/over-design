import path from 'path';

/**
 * @see https://github.com/webpack/webpack/issues/2031#issuecomment-317589620
 */
export default function excludeNodeModulesForAllOS(modules: string[]) {
  const pathSep = path.sep === '\\' ? '\\\\' : path.sep;
  const moduleRegExps = modules.map(function (modName) {
    return new RegExp('node_modules' + pathSep + modName);
  });

  return function (modulePath: string) {
    if (/node_modules/.test(modulePath)) {
      for (let i = 0; i < moduleRegExps.length; i++)
        if (moduleRegExps[i].test(modulePath)) {
          return false;
        }
      return true;
    }
    return false;
  };
}
