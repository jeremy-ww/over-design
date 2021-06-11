<h1 align="center">Overd</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/overd"><img src="https://flat.badgen.net/npm/v/overd" alt="Version" /></a>
</p>

<img src="./docs/screenshot.png" />

### Introduction

A configurable building tools based on webpack@5.

### Quick Start

```bash
# install overd it's self.
$ yarn add overd -D
```

```bash
# install all devDependencies that overd needs
$ yarn add \
  @babel/core@7.14.3 \
  @babel/plugin-proposal-class-properties@7.13.0 \
  @babel/plugin-proposal-decorators@7.14.2 \
  @babel/plugin-syntax-dynamic-import@7.8.3 \
  @babel/plugin-transform-runtime@7.14.3 \
  @babel/preset-env@7.14.4 \
  @babel/preset-react@7.13.13 \
  @babel/preset-typescript@7.13.0 \
  @emotion/babel-plugin@11.3.0 \
  @intervolga/optimize-cssnano-plugin@1.0.6 \
  @pmmmwh/react-refresh-webpack-plugin@0.4.3 \
  @types/copy-webpack-plugin@8.0.0 \
  @types/dotenv-webpack@7.0.2 \
  @types/duplicate-package-checker-webpack-plugin@2.1.1 \
  @types/html-webpack-tags-plugin@2.0.16 \
  @types/mini-css-extract-plugin@1.4.3 \
  @types/node@15.9.0 \
  @types/query-string@6.3.0 \
  @types/react@17.0.9 \
  @types/react-dev-utils@9.0.6 \
  @types/react-dom@17.0.6 \
  @types/react-redux@7.1.16 \
  @types/react-router@5.1.14 \
  @types/react-router-dom@5.1.7 \
  @types/redux-logger@3.0.8 \
  @types/redux-mock-store@1.0.2 \
  @types/script-ext-html-webpack-plugin@2.1.2 \
  @types/terser-webpack-plugin@5.0.3 \
  @types/webpack@5.28.0 \
  @types/webpack-bundle-analyzer@4.4.0 \
  @types/webpack-dev-server@3.11.4 \
  @types/workbox-webpack-plugin@5.1.6 \
  @types/workbox-window@4.3.3 \
  @typescript-eslint/eslint-plugin@4.26.0 \
  @typescript-eslint/parser@4.26.0 \
  babel-loader@8.2.2 \
  babel-plugin-import@1.13.3 \
  babel-plugin-istanbul@6.0.0 \
  babel-plugin-module-resolver@4.1.0 \
  chalk@4.1.1 \
  copy-webpack-plugin@9.0.0 \
  css-loader@5.2.6 \
  css-minimizer-webpack-plugin@3.0.1 \
  dotenv-webpack@7.0.2 \
  duplicate-package-checker-webpack-plugin@3.0.0 \
  esbuild-loader@2.13.1 \
  eslint@7.27.0 \
  eslint-config-prettier@8.3.0 \
  eslint-loader@4.0.2 \
  eslint-plugin-react@7.24.0 \
  eslint-plugin-react-hooks@4.2.0 \
  html-webpack-plugin@5.3.1 \
  mini-css-extract-plugin@1.6.0 \
  nodemon@2.0.7 \
  prettier@2.3.0 \
  react@17.0.2 \
  react-dev-utils@11.0.4 \
  react-dom@17.0.2 \
  react-refresh@0.10.0 \
  react-router-dom@5.2.0 \
  script-ext-html-webpack-plugin@2.1.5 \
  style-loader@2.0.0 \
  terser-webpack-plugin@5.1.3 \
  thread-loader@3.0.4 \
  ts-node@10.0.0 \
  tsconfig-paths@3.9.0 \
  type-fest@1.2.0 \
  typescript@4.3.2 \
  webpack@5.38.1 \
  webpack-bundle-analyzer@4.4.2 \
  webpack-cli@4.7.0 \
  webpack-dev-server@3.11.2 \
  webpack-manifest-plugin@3.1.1 \
  webpack-merge@5.7.3 \
  workbox-webpack-plugin@6.1.5 -D
```

[Why should I need to install devDependencies myself ?](#why-should-i-need-to-install-devdependencies-myself)

### Why should I need to install devDependencies myself?

In today's pipeline, we are using so many code quality check tools including `checkmarx`, `sonar`, `whitesource`.
Those tools checks our dependencies constantly, and make our pipeline failed once there is one potential security vulnerabilities existed.
The problem is that building tools may not fix the security problem as soon as possible. There for, we are more willing to have user to install
all the devDependencies by themself instead of using `yarn resolutions` for the two purpose:

1. Avoiding duplicated package like typescript, user may install it already.
2. Make dependencies straightforward.

### What's the difference between create-react-app?

TODO

### Features

| Feature              | Status |
| -------------------- | ------ |
| Persistent cache     | ✅     |
| React Refresh        | ✅     |
| Thread-loader        | ✅     |
| Less support         | ✅     |
| Configurable webpack | ✅     |
| Lazy compilation     | Todo   |
| Yarn pnp             | Todo   |

### FAQ

#### Override default config

Put a **webpack-overd.ts** under your project's space, then you revise the webpack config easily.

```ts
export default function (config: import('webpack').Configuration) {
  if (config.mode === 'development') {
    config.experiments = {
      lazyCompilation: true
    };
  }
  console.log(config);
}
```

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Army-U
