const gulp = require("gulp");
const paths = require("./compile_process/paths");
const registry = require("gulp-hub");

const hub = new registry(["./compile_process/tasks/*.js"]);
gulp.registry(hub);

gulp.task(
  "build",
  gulp.series("clean", "bundle", "create-offer"),
  function () {}
);

gulp.task("build-watchify", gulp.series("bundle-watchify"), function () {});
