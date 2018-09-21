const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MarkdownLoader = require("../lib/markdownLoader");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.tsx"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: { loader: "ts-loader" }
      },
      {
        test: /.md$/,
        use: [
          { loader: "ts-loader", options: { appendTsxSuffixTo: [/\.md$/] } },
          { loader: require.resolve("../lib/markdownLoader") }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')
  })]
};
