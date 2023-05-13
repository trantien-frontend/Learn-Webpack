# MiniCssExtractPlugin:

- Xung đột khi sử dụng chung với style-loader
- Sử dụng chung với html-webpack-plugin : for automatic generation link tags or create index.html file with link tag.

# Caching - hasname - file:

- Caching : Client gửi file ==> caching tại proxy ( phân biệt theo name file ) xem có bản sao còn mới của đối tượng chưa có thì lấy bản sao gửi client không có thì chuyển yêu cầu tới server.
- change file hasname ==> not caching
