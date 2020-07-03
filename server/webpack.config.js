const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.tsx'),
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          context: __dirname,
          configFile: 'tsconfig.json'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'production'
};