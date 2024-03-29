"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import concat from "gulp-concat"
import sourcemaps  from "gulp-sourcemaps";
import rigger from "gulp-rigger";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import browserSync from "browser-sync";

gulp.task('scripts:lib', ()=> {
  return gulp.src(paths.scriptsLib.src)
  .pipe(concat('libs.min.js'))
  .pipe(gulp.dest(paths.scriptsLib.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('scripts', ()=> {
  return gulp.src(paths.scripts.src)
  .pipe(sourcemaps.init())
  .pipe(rigger())
  .pipe(babel({presets: ["@babel/preset-env"]}))
  .pipe(uglify())
  .pipe(rename({suffix: ".min"}))
  .pipe(sourcemaps.write("./maps/"))
  .pipe(gulp.dest('./docs/js/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});
