'use strict';

const gulp    = require('gulp');
const babel   = require('gulp-babel');
const postCSS = require('gulp-postcss');

const Loc = {
  js: ['src/**/*.js', 'src/**/*.jsx'],
  css: 'src/**/*.css',
  out: 'lib'
};


gulp.task('js', function () {
  return gulp.src(Loc.js)
    .pipe(babel())
    .pipe(gulp.dest(Loc.out));
});


gulp.task('css', function() {
  var postCSSFunctions = Object.assign(
    {},
    require('simian-color-functions')
  );

  var plugins = [
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-functions')({
      functions: postCSSFunctions
    })
  ];

  return gulp.src([Loc.css, '!**/_*.css'])
    .pipe(postCSS(plugins))
    .pipe(gulp.dest(Loc.out));
});


gulp.task('default', ['js', 'css']);
