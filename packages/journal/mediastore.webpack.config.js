const TerserPlugin = require("terser-webpack-plugin");
var HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
var path = require("path");

var config = {
  entry: {
    app: "./src/MediaStoreIndex.ts"
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "media-store.js",
    publicPath: "./lib",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          output: {
            ascii_only: true
          }
        }
      })
    ]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }]
  },
  plugins: [new HardSourceWebpackPlugin()]
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "eval";
  }
  return config;
};
