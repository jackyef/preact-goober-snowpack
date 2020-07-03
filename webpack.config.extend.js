const fs = require('fs-extra');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const manifestPath = path.resolve(__dirname, './.build-manifest');
fs.ensureDirSync(manifestPath);

/**
 * 
 * @param {WebpackConfig} config Base webpack config from @snowpack/plugin-webpack 
 */
module.exports = (config) => ({
  ...config,
  /**
   * Add custom webpack configurations here
   */
  plugins: [
    ...config.plugins,
    new AssetsPlugin({ path: manifestPath, filename: 'assets.json' }),
  ]
});