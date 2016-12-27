'use strict';

const gulp = require('gulp');
const lint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', function(){
  gulp.src(['**/*.js', '!node_module'])
  .pipe(lint.format())
  .pipe('eslint.failAfterError');
});

gulp.task('test', function(){
  gulp.src('**/test.js, !node_module' , {read: false})
 .pipe(mocha({reporter: 'spec'}));
});

gulp.task('dev', function(){
  gulp.watch(['**/*.js', '!node_module'], ['lint', 'test']);
});
gulp.task('default', ['dev']);
