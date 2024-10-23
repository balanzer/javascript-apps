import { dest, watch, series } from "gulp";
import * as ts from "gulp-typescript";
const gulp = require("gulp");
const clean = require("gulp-clean");

const project = ts.createProject("tsconfig.json");

export function compile(): NodeJS.ReadWriteStream {
  //clean folder
  gulp.src("build", { read: false, allowEmpty: true }).pipe(clean());
  //build scripts
  return project.src().pipe(project()).pipe(dest("build"));
}

export function monitor(): NodeJS.EventEmitter {
  return watch("src/**/*.ts", compile);
}
/*
gulp.task("clean", function () {
  return gulp.src("build", { read: false, allowEmpty: true }).pipe(clean());
});*/

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");

gulp.task("browserify", function () {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/index.ts"],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
});

export default series(compile);
