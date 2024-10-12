var path = require("path");

var sourceRoot = "src/scripts/";
var styleRoot = "src/styles/";
var scriptMain = sourceRoot + "index.ts";
var buildRoot = "./dist/";
var bundleRoot = buildRoot;

module.exports = {
  root: sourceRoot,
  entery_ts: scriptMain,
  style: styleRoot + "**/*.css",
  sourceTsConfig: "tsconfig.json",
  source: sourceRoot + "**/*.ts",
  output: buildRoot,
  release: bundleRoot,
};
