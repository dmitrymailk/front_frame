const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    // see more https://webpack.js.org/guides/development/#using-webpack-dev-middleware
    publicPath: "/",
  },
  // see more https://webpack.js.org/guides/development/#using-source-maps
  devtool: "inline-source-map",
  mode: "development",
  // see more https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "front frame",
    }),
  ],
  // see more https://webpack.js.org/guides/development/#using-webpack-dev-server
  devServer: {
    contentBase: "./dist",
    host: 5000,
  },
  module: {
    rules: [
      // see more https://webpack.js.org/guides/asset-management/#loading-css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // see more https://webpack.js.org/guides/asset-management/#loading-images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
