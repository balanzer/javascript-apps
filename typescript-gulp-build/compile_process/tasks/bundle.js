const gulp = require("gulp");
const paths = require("../paths");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const browserify = require("browserify");
const minify = require("gulp-minify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");

/**
gulp.task("compile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(paths.output));
}); */

gulp.task("minify-css", function () {
  return gulp.src(paths.style).pipe(cleanCSS()).pipe(gulp.dest(paths.release));
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
    .pipe(sourcemaps.init({ loadMaps: false }))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(minify())
    .pipe(gulp.dest(paths.release));
});

gulp.task("bundle", gulp.series("minify-css", "browserify"), function () {});
