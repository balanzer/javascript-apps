const gulp = require("gulp");
const paths = require("../paths");
const clean = require("gulp-clean");

gulp.task("clean", function () {
  return gulp
    .src(paths.output, { allowEmpty: true, read: false })
    .pipe(clean({ force: true }));
});
