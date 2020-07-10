const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

const snowpackConfig = require('../snowpack.config');
const outputPath = path.resolve(__dirname, 'dist');
const projectRoot = path.resolve(__dirname, '../');
fs.removeSync(outputPath);

module.exports = {
  entry: path.resolve(__dirname, './index.tsx'),
  target: 'node',
  output: {
    filename: 'main.js',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          context: __dirname,
          configFile: 'tsconfig.json',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: snowpackConfig.__internal.outputPattern.assets, // this has to match `snowpack.config.json` assets pattern
          emitFile: false, // we don't need to emit file, snowpack will handle the bundling of assets
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      STATIC_ASSETS_PATH: JSON.stringify(path.resolve(projectRoot, 'build')),
      ASSETS_MANIFEST_PATH: JSON.stringify(
        path.resolve(projectRoot, '.build-manifest/assets.json'),
      ),
    }),
  ],
  // externals: ['canvas', 'jsdom'],
  externals: {
		canvas: "commonjs canvas" // Important (2)
	},
  mode: 'production',
};
