const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  mode: "development",

  entry: "./src/app.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader"
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3001,
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      library: { type: "var", name: "app1" },
      exposes: {
        "./User": "./src/user"
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
  ],
};
