const path = require("path");

const sourceRoot = "src/scripts/";
const styleRoot = "src/styles/";
const scriptMain = sourceRoot + "index.ts";
const buildRoot = "./dist/";
const bundleRoot = buildRoot;

module.exports = {
  root: sourceRoot,
  entery_ts: scriptMain,
  style: styleRoot + "**/*.css",
  sourceTsConfig: "tsconfig.json",
  source: sourceRoot + "**/*.ts",
  output: buildRoot,
  release: bundleRoot,
};
