const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Static server
 function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};




function serveSass() {
  return src("src/sass/*.sass")
    .pipe(sass())
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
};

function minify() {
  src('src/**/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist'));
};

exports.min = minify;
exports.serve = bs;
