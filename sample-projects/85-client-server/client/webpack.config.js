const path = require('path');

module.exports = {
  context: __dirname,
  entry: './ts/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: __dirname,
      watch: true
    },
    port: 8080,
    open: true,
    hot: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};
