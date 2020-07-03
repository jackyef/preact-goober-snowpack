module.exports = {
  extends: '@snowpack/app-scripts-preact',
  scripts: {},
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: require('./webpack.config.extend'),
        sourceMap: true,
        outputPattern: {
          js: 'main.[contenthash:10].js',
          css: 'main.[contenthash:10].css',
          assets: '[name].[contenthash:10].[ext]',
        }
      },
    ],
  ],

  // keys used for synchronization with the server bundle config
  __internal: {
    outputPattern: {
      js: 'main.[contenthash:10].js',
      css: 'main.[contenthash:10].css',
      assets: '[name].[contenthash:10].[ext]',
    }
  }
};
