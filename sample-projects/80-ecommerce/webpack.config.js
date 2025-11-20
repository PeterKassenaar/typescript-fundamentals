const path = require('path');

module.exports = {
  entry: './ts/index.ts',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: __dirname
    },
    watchFiles: ['ts/**/*', 'index.html'],
    port: 8080,
    open: true
  }
};
