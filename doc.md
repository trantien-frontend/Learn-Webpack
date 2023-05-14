# MiniCssExtractPlugin:

- Xung đột khi sử dụng chung với style-loader
- Sử dụng chung với html-webpack-plugin : for automatic generation link tags or create index.html file with link tag.

# Caching - hasname - file:

- Caching : Client gửi file ==> caching tại proxy ( phân biệt theo name file ) xem có bản sao còn mới của đối tượng chưa có thì lấy bản sao gửi client không có thì chuyển yêu cầu tới server.
- change file hasname ==> not caching

# source map:

- Giúp debug chính xác trong file
- enviroment: development : nên có source map
-     //    : production : không nên có source map

Node :

- window: start package json : "SET NODE_ENV=development&webpack server"
- ubuntu: start package json : "NODE_ENV=development&webpack server"

# babel:

- `@babel/core` : là lõi babel
- `@babel/preset-env` là bộ preset thiết lập sẵn cho từng đối tượng môi trường
- `@babel-loader` dùng tích hợp babel vào webpack

Không cho phép chạy vào nodemodule :

```js
{
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ];
  }
}
```

ngoại trừ các libary trong not :

```js
{
    test: /\.(?:js|mjs|cjs)$/,
    exclude: {
      and: [/node_modules/], // Exclude libraries in node_modules ...
      not: [
        // Except for a few of them that needs to be transpiled because they use modern syntax
        /unfetch/,
        /d3-array|d3-scale/,
        /@hapi[\\/]joi-date/,
      ]
    },
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: "ie 11" }]
        ]
      }
    }
}
```

- Sử dụng : browserslistrc để sp target cho IE 11
- ES7 : Object.value not sp IE 11 khi sử dụng browserslistrc ===> core-js : thư viện sp cú pháp : chứa code dự phòng cho các tính năng mới chưa support

```js
// - case 1
{
    debug: true,
    useBuiltIns: "usage", // Dùng cái này thì đơn giản nhất, không cần import core-js vào code
    corejs: "3.30.2", // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
}

// - case 2
{
    debug: true,
    useBuiltIns: "entry",// import core-js vào code
    corejs: "3.30.2", // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
}

```

- xem cách core-js built bằng mode development
