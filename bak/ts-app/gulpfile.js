const {src, dest} = require("gulp");
const concat = require("gulp-concat");
const scss = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;
const minify = require("gulp-babel-minify");

function createStyles() {
    return src("./src/scss/**/*.scss")
        .pipe(scss({outputStyle: "compressed"}).on("error", scss.logError))
        .pipe(dest("./dist/css"));
}

function createScripts() {
    return src("./build/**/*.js").pipe(minify({
        mangle: {
            keepClassName: false
        }
    }))
        .pipe(concat("index.min.js"))
        //.pipe(uglify())
        .pipe(dest("./dist/js/"));
}

exports.createStyles = createStyles;
exports.createScripts = createScripts;