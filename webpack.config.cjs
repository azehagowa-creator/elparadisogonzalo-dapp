const path = require("path");

module.exports = {
  mode: "production",

  entry: "./index.html",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "raw-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
