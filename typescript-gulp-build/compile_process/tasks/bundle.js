const gulp = require("gulp");
const paths = require("../paths");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const browserify = require("browserify");
const minify = require("gulp-minify");
const source = require("vinyl-source-stream");
var watchify = require("watchify");
var tsify = require("tsify");
var fancy_log = require("fancy-log");
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

var watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: [paths.entery_ts],
    cache: {},
    packageCache: {},
  }).plugin(tsify)
);

gulp.task("browserify", function () {
  return browserify({
    basedir: ".",
    debug: true,
    entries: [paths.entery_ts],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify, { noImplicitAny: false })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: false }))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(minify())
    .pipe(gulp.dest(paths.release));
});

/** wathcify flow */
function bundleWatchify() {
  return watchedBrowserify
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: false }))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(minify())
    .pipe(gulp.dest(paths.release));
}

watchedBrowserify.on("update", bundleWatchify);
watchedBrowserify.on("log", fancy_log);

/** wathcify flow */

gulp.task("bundle", gulp.series("minify-css", "browserify"), function () {});

gulp.task("bundle-watchify", function (cb) {
  bundleWatchify();
  cb();
});
