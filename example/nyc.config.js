/* eslint-env node */
module.exports = {
  all: true,
  exclude: [
    'src/__tests__/',
    'src/fragments/',
    'src/images/',
    'src/styles/',
    '**/*.d.ts',
    '**/*.less',
  ],
  include: ['src'],
  /**
   * @see https://github.com/cypress-io/code-coverage/issues/216#issuecomment-635952099
   */
  reporter: process.env.CI ? ['html', 'lcov'] : ['html', 'text'],
};
