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

Put a **webpack-overd.ts** under your project's space, then you revise the webpack config easily.

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

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Army-U
