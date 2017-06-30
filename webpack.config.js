var path = require("path");
module.exports = {
  entry: {
    app: ["./node/src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};