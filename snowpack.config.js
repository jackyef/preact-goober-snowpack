module.exports = {
  extends: '@snowpack/app-scripts-preact',
  scripts: {},
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: require('./webpack.config.extend'),
        sourceMap: true,
      },
    ],
  ],
};
