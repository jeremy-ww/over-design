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
        modules: false,
        corejs: 3,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
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
    development: {
      plugins: ['react-refresh/babel'],
    },
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
