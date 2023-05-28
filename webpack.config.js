const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/pages/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 8080,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          }, 'postcss-loader']
      },
      {
        test: /\.(svg|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[nash][ext]',
        }
      },
            {
        test: /\.(woff2|woff)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[nash][ext]',
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      template: "./src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};
