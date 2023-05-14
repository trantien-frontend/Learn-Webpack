const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

console.log("__dirName", __dirname);
console.log("resolve", path.resolve());
console.log("resolve_dirName", path.resolve(__dirname, "dist"));

module.exports = (env) => {
  const isDevelopment = Boolean(env.development);

  const plugins = isDevelopment
    ? [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),

        new HTMLWebpackPlugin({
          title: "Webpack App",
          filename: "index.html",
          template: "src/template.html",
        }),
      ]
    : [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),

        new HTMLWebpackPlugin({
          title: "Webpack App",
          filename: "index.html",
          template: "src/template.html",
        }),

        new BundleAnalyzerPlugin(),
      ];

  return {
    // mode: isDevelopment ? "development" : "production",
    mode: "development",

    entry: {
      app: path.resolve("src/index.js"), // entry có thể là đường dẫn tương đối
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      assetModuleFilename: "[file]",
      clean: true,
    },

    devtool: isDevelopment ? "source-map" : false,
    // module: {
    //   rules: [
    //     {
    //       test: /\.s[ac]ss|css$/,
    //       use: ["style-loader", "css-loader", "sass-loader"],
    //     },
    //   ],
    // },

    module: {
      rules: [
        //
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        //babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    debug: true,
                    useBuiltIns: "entry", // Dùng cái này thì đơn giản nhất, không cần import core-js vào code
                    corejs: "3.30.2", // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins,

    devServer: {
      static: {
        directory: "dist",
      },
      compress: true, // bật gzip cho tài nguyên
      port: 3000,
      open: true, // open khi terminal run
      hot: true, // bật reload nhanh Hot Module Replacement
      historyApiFallback: true, // set true when use SPA
    },
  };
};

//note: Những path có thể sử dụng đường dẫn tương đối thì có thể sử dụng tuyệt đối
