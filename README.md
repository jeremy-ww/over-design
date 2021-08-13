<h1 align="center">Overd</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/overd"><img src="https://flat.badgen.net/npm/v/overd" alt="Version" /></a>
  <a href="https://packagephobia.com/result?p=overd"><img src="https://flat.badgen.net/packagephobia/install/overd" alt="Dependencies" /></a>
  <a href="https://david-dm.org/army-u/over-design"><img src="https://flat.badgen.net/david/dep/army-u/over-design" alt="Dependencies" /></a>
</p>

<img src="./docs/screenshot.png" />

### Introduction

A configurable building tool that based on webpack@5.

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

Put a **webpack-overd.ts** under your project's workspace, and then you can revise the webpack config easily with the help of automatic reload.

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

Dotenv configuration is a more cheap way to revise common webpack configuration than by **webpack-overd.ts** files.

`overd` support multiple configuration files:

- .env.defaults
- .env
- .env.development
- .env.test
- .env.production

And you can use the below fields:

| Key         | Default Value | Description                                                                                                                                                                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PUBLIC_PATH | /             | Set publicPath for webpack.                                                                                                                                                                                           |
| PORT        | 3000          | Port for webpack dev server.                                                                                                                                                                                          |
| REPORT      | false         | Enable webpack-bundle-analyzer plugin.                                                                                                                                                                                |
| UNIQUE_NAME | undefined     | Same as webpack out uniqueName, and it's used for [ReactRefresh](https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#running-multiple-instances-of-react-refresh-simultaneously) |

#### Clear webpack cache

By default, we used webpack persistent cache to improve the building performance. If you find that your modification is not working, you can try to use `rm -rf node_modules/.cache` command and restart the server to remove the stale cache.

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Army-U
