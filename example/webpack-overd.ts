import { ESBuildMinifyPlugin } from 'esbuild-loader';
import path from 'path';
import type { Configuration, RuleSetRule, RuleSetUseItem } from 'webpack';

export default function overd(config: Configuration) {
  const jsRuleTest = /\.(js|jsx|mjs|ts|tsx)$/.toString();
  const jsRule = (config?.module?.rules as RuleSetRule[])?.find(
    ({ test }) => test?.toString() === jsRuleTest,
  );
  if (jsRule?.use) {
    (jsRule.use as RuleSetUseItem[]).push({
      loader: '@linaria/webpack-loader',
      options: { sourceMap: true },
    });
  }
  if (config.output && config.mode === 'production') {
    config.output.publicPath = '/over-design/';
  }
}
