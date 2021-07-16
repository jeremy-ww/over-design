/* eslint-env node */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /**
         * @see https://github.com/cypress-io/cypress/tree/develop/npm/react/cypress/component/advanced/mocking-imports
         */
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    process.env.NODE_ENV === 'development' && 'react-refresh/babel',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          cypress: './cypress',
          src: './src',
          misc: './cypress/misc',
        },
      },
    ],
  ].filter(Boolean),
  env: {
    test: {
      plugins: [
        [
          '@babel/plugin-transform-modules-commonjs',
          {
            loose: true,
          },
        ],
        'istanbul',
      ],
    },
  },
};
