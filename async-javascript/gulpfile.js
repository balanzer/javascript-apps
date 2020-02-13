const { series, parallel, src, dest, watch } = require("gulp");

const gulpTs = require("gulp-typescript");
const tsProject = gulpTs.createProject("tsconfig.json");

const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");
const del = require("del");

const browserSync = require("browser-sync").create();

var fileinclude = require("gulp-file-include");

const origin = "src";
const destination = "build";

function html(cb) {
	//console.log("doing html task");
	src(`${origin}/html/**/*.html`)
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file"
			})
		)
		.pipe(dest(`${destination}`));
	//console.log("html task completed");
	cb();
}

function css(cb) {
	//console.log("doing css task");
	src(`${origin}/css/**/*.css`).pipe(dest(`${destination}/css`));
	//console.log("css task completed");
	cb();
}

function js(cb) {
	//console.log("doing js task");
	src(`${origin}/js/**/*.js`).pipe(dest(`${destination}/js`));
	//console.log("js task completed");
	cb();
}

function clean(cb) {
	//console.log("doing clean task");
	del(destination);
	setTimeout(function() {
		//console.log("clean task completed");
		cb();
	}, 1000);
}

function ts(cb) {
	browserify({
		basedir: ".",
		debug: true,
		entries: [ `${origin}/ts/main.ts` ],
		cache: {},
		packageCache: {}
	})
		.plugin(tsify)
		.transform("babelify", {
			presets: [ "es2015" ],
			extensions: [ ".ts" ]
		})
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		//.pipe(uglify())
		.pipe(sourcemaps.write("./"))
		.pipe(dest(`${destination}`));
	cb();
}

function reload(cb) {
	setTimeout(function() {
		//console.log("reloading browser");
		browserSync.reload();
		cb();
	}, 200);
	cb();
}
function watcher(cb) {
	//console.log("doing watcher task");
	watch(`${origin}/html/*.html`).on("change", series(html, reload));
	watch(`${origin}/**/*.ts`).on("change", series(ts, reload));
	watch(`${origin}/**/*.js`).on("change", series(js, reload));
	cb();
}

function server(cb) {
	//console.log("doing server task");
	browserSync.init({
		open: false,
		server: {
			baseDir: `${destination}`
		}
	});
	//console.log("server loaded");
	cb();
}

exports.default = series(clean, js, css, ts, html, server, watcher);
