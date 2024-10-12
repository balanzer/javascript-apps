var path = require("path");

var sourceRoot = "src/scripts";
var styleRoot = "src/styles";
var buildRoot = "./dist/";
var bundleRoot = buildRoot;

module.exports = {
  root: sourceRoot,
  sourceTsConfig: "tsconfig.json",
  source: sourceRoot + "**/*.ts",
  output: buildRoot,
  release: bundleRoot,
};
