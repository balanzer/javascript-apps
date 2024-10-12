const gulp = require("gulp");
const paths = require("../paths");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");

gulp.task("compile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(paths.output));
});

gulp.task("browserify", function () {
  return browserify({
    basedir: ".",
    debug: true,
    entries: [paths.entery_ts],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.release));
});

gulp.task("bundle", gulp.series("browserify"), function () {});
