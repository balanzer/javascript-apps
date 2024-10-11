var gulp = require("gulp");
var paths = require("../paths");
var clean = require("gulp-clean");

gulp.task("clean", function () {
  return gulp
    .src(paths.output, { allowEmpty: true, read: false })
    .pipe(clean({ force: true }));
});
