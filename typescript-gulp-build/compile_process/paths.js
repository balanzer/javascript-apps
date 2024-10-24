const path = require("path");

const entryFileName = "index.ts";
const sourceRoot = "src/scripts/";
const styleRoot = "src/styles/";
const scriptMain = sourceRoot + entryFileName;
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
  script_out: bundleRoot + "bundle-min.js",
  style_out: bundleRoot + "style.css",
  offer_out: bundleRoot + "offer.txt",
};
