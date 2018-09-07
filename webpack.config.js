const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'image-clipper.js',
    // library: 'imageClipper',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
      test: /\.less$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: "style-loader" // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
          options: {
            modules: true,
            localIndetName:"[name]__[local]___[hash:base64:5]"
          }
        },
        {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ],
  },

}
