import path from 'path';
import type { Configuration, RuleSetRule, RuleSetUseItem } from 'webpack';

export default function overd(config: Configuration) {
  const jsRuleTest = /\.(js|jsx|mjs|ts|tsx)$/.toString();
  const jsRule = (config?.module?.rules as RuleSetRule[])?.find(
    ({ test }) => test?.toString() === jsRuleTest,
  );
  if (jsRule?.use) {
    jsRule.use = [
      {
        loader: 'swc-loader',
      },
      {
        loader: '@linaria/webpack-loader',
        options: { sourceMap: true },
      },
    ];
  }
  if (config.output) {
    config.output.publicPath = '/over-design/';
  }

  if (config.resolve) {
    config.resolve.alias = {
      src: path.resolve(__dirname, 'src'),
      misc: path.resolve(__dirname, 'cypress/misc/'),
    };
  }
}
