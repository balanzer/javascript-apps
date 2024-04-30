const {src, dest} = require("gulp");
const concat = require("gulp-concat");
const scss = require("gulp-sass")(require("sass"));

function createStyles() {
    return src("./src/scss/**/*.scss")
        .pipe(scss({outputStyle: "compressed"}).on("error", scss.logError))
        .pipe(dest("./dist/css"));
}

exports.createStyles = createStyles;