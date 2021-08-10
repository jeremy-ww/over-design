<h1 align="center">Overd</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/overd"><img src="https://flat.badgen.net/npm/v/overd" alt="Version" /></a>
  <a href="https://packagephobia.com/result?p=overd"><img src="https://flat.badgen.net/packagephobia/install/overd" alt="Dependencies" /></a>
  <a href="https://david-dm.org/army-u/over-design"><img src="https://flat.badgen.net/david/dev/army-u/over-design" alt="Dependencies" /></a>
</p>

<img src="./docs/screenshot.png" />

### Introduction

A configurable building tools based on webpack@5.

### Quick Start

```bash
$ yarn add overd -D
```

```
$ prepare your own babel.config.js
```

### What's the difference between create-react-app?

- Overd don't provide babel configuration
- Overd don't provide eslint configuration
- Revise webpack config easily without eject

### Features

| Feature              | Status |
| -------------------- | ------ |
| Persistent cache     | ✅     |
| React Refresh        | ✅     |
| Thread-loader        | ✅     |
| Configurable webpack | ✅     |
| Lazy compilation     | ✅     |
| Auto restart         | ✅     |
| Yarn pnp             | Todo   |

### FAQ

#### Override default config

Put a **webpack-overd.ts** under your project's workspace, then you can revise the webpack config easily with the help of automatic reload.

```ts
import type { Configuration } from 'webpack';

export default function (config: Configuration) {
  if (config.mode === 'development') {
    config.experiments = {
      lazyCompilation: false, // disable lazyCompilation
    };
  }
  console.log(config);
}
```

#### Dotenv configuration

Dotenv configuration is a more cheap way to revise common webpack configuration than by **webpack-overd.ts** files, you can use below fields.

| Key         | Default Value | Description                           |
| ----------- | ------------- | ------------------------------------- |
| PUBLIC_PATH | /             | publicPath for webpack.               |
| PORT        | 3000          | port for webpack dev server           |
| REPORT      | false         | enable webpack-bundle-analyzer plugin |

#### Clear webpack cache

By default, we used webpack persistent cache to improve the building performance. If you find that your modification is not working, you can try to use `rm -rf node_modules/.cache` command and restart the server to remove stale cache.

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Army-U
