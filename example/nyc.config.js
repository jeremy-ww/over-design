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
    'src/features/activity-planning/create-edit/model/',
    'src/features/activity-planning/create-edit/redux/',
    'src/features/activity-planning/list-view/models/',
  ],
  include: ['src'],
  /**
   * @see https://github.com/cypress-io/code-coverage/issues/216#issuecomment-635952099
   */
  reporter: process.env.CI ? ['html', 'lcov'] : ['html'],
};
