var path = require("path");

var sourceRoot = "src/";
var buildRoot = "./output/";
var bundleRoot = buildRoot + "output-bundle/";

module.exports = {
  root: sourceRoot,
  sourceTsConfig: "tsconfig.json",
  source: sourceRoot + "**/*.ts",
  output: buildRoot,
  release: bundleRoot,
};
