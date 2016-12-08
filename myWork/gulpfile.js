'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

// test
gulp.task('test', function() {
  gulp.src('./test/**/*.js', { read: false })
  .pipe(mocha({ reporter: 'spec' }));
});

// eslint
gulp.task('lint', function() {
  // return gulp.src(['**/*.js', '!node_modules/**'])
  gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// dev
gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**', ['test', 'lint']]);
});

gulp.task('default', ['dev']);
