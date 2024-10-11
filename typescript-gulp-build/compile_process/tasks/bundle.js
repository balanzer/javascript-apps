const gulp = require("gulp");
const paths = require("../paths");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");

var terser = require("gulp-terser");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

gulp.task("compile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(paths.output));
});

gulp.task("browserify", function () {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/index.ts"],
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
