export default function (config: import('webpack').Configuration) {
  if (config.mode === 'development') {
    config.experiments = {
      lazyCompilation: true
    };
  }
  console.log(config);
}
