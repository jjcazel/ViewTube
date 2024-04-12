const path = require("path");
const webpack = require("webpack"); // Import webpack to use its built-in plugins
const plugins = [];
if (process.env.NODE_ENV !== "production") {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = {
  mode: "production",
  context: __dirname,
  entry: ["./frontend/view_tube.jsx"],
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            // Changed "query" to "options" as per latest syntax
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  plugins: plugins,
  devServer: {
    hot: true, // Enable HMR on the server
    contentBase: path.resolve(__dirname, "app", "assets", "javascripts"),
    publicPath: "/", // Match the output `publicPath`
    port: 3000, // Match the port to your configuration
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true,
  },
};
