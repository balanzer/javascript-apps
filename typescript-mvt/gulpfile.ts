import { dest, watch } from "gulp";
import * as ts from "gulp-typescript";

const project = ts.createProject("tsconfig.json");

export function compile(): NodeJS.ReadWriteStream {
  return project.src().pipe(project()).pipe(dest("build"));
}

export function monitor(): NodeJS.EventEmitter {
  return watch("src/**/*.ts", compile);
}

var gulp = require("gulp");
var clean = require("gulp-clean");


gulp.task("clean-scripts", function () {
  return gulp.src("build", { read: false }).pipe(clean());
});
