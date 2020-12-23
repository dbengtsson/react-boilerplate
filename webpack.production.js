const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common.js");
// Adjust these later. 244 KiB is default
module.exports = merge(baseConfig, {
  mode: "production",
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
});
