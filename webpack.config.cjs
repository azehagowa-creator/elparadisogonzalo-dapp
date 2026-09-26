const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "production",

  entry: "./index.html",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  module: {
    rules: []
  }
};
