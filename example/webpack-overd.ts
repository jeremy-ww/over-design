import type { Configuration, RuleSetRule, RuleSetUseItem } from 'webpack';
import * as connectHistoryApiFallback from 'connect-history-api-fallback';

type Mutable<T> = { -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P] };

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
  if (config.output) {
    config.output.publicPath = '/over-design/';
  }
  if (config.devServer && config.devServer.historyApiFallback) {
    (config.devServer.historyApiFallback as Mutable<connectHistoryApiFallback.Options>).index =
      '/over-design/index.html';
  }
}
