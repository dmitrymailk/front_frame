const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
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
