const gulp = require("gulp");
const paths = require("../paths");

const fs = require("fs");

function readContents(fileName) {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

function generateOfferFile() {
  const styleContent = readContents(paths.style_out);
  const scriptContent = readContents(paths.script_out);
  try {
    //fs.unlinkSync(paths.offer_out);
    //console.log(paths.offer_out + " deleted successfully.");
    console.log("building " + paths.offer_out);
    fs.appendFileSync(paths.offer_out, "<style>\n");
    fs.appendFileSync(paths.offer_out, styleContent);
    fs.appendFileSync(paths.offer_out, "\n</style>\n\n\n");

    fs.appendFileSync(paths.offer_out, "\n<script>\n");
    fs.appendFileSync(paths.offer_out, scriptContent);
    fs.appendFileSync(paths.offer_out, "\n</script>");

    console.log(paths.offer_out + " offer file ready");
  } catch (err) {
    console.error(err);
  }
}

gulp.task("create-offer", function (cb) {
  generateOfferFile();
  cb();
});
