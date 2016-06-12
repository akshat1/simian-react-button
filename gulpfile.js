'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

const Loc = {
  src: ['src/**/*.js', 'src/**/*.jsx'],
  out: 'lib'
};


gulp.task('compile', function () {
  return gulp.src(Loc.src)
    .pipe(babel())
    .pipe(gulp.dest(Loc.out));
});


gulp.task('default', ['compile']);