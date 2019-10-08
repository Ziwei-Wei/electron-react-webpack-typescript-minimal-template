const webpack = require("webpack");

module.exports = [
  {
    entry: "./src/index.tsx",
    target: "web",
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "./assets",
      filename: "bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: "./dist",
      hot: true
    }
  },
  {
    entry: "./src/main.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    output: {
      path: __dirname + "/dist",
      filename: "main.js"
    }
  }
];
