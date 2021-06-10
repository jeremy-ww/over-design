/**
 * @param {import('webpack').Configuration} config
 */
module.exports = function (config) {
  if (config.mode === 'development') {
    config.experiments = {
      lazyCompilation: true
    };
  }
  console.log(config);
};
