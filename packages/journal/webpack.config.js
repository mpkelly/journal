const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
var HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
var path = require("path");

var config = {
  entry: {
    app: "./src/Index.tsx",
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "[name].js",
    publicPath: "./lib",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      react: path.resolve("node_modules/react"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          output: {
            ascii_only: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }],
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/bundle*.*js"],
    }),
    //new HardSourceWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
      umd: "react",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
      umd: "react-dom",
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    process.env.NODE_ENV = "development";
    config.devtool = "eval";
  }
  return config;
};
