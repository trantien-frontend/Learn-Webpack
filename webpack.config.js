const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

console.log("__dirName", __dirname);
console.log("resolve", path.resolve());
console.log("resolve_dirName", path.resolve(__dirname, "dist"));

module.exports = {
  mode: "production",

  entry: {
    app: path.resolve("src/index.js"), //entry có thể là đường dẫn tương đối
  },

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

//note: Những path có thể sử dụng đường dẫn tương đối thì có thể sử dụng tuyệt đối
