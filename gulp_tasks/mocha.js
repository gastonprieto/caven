'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var del = require('del');
var istanbul = require('gulp-istanbul');

function onFinish () {
  return gulp.src('test/**/*.test.js')
    .pipe(mocha({ reporter : 'spec' }))
    .pipe(istanbul.writeReports())
    .on('error', process.exit.bind(process, 1));
}

module.exports = function () {
  process.env.NODE_ENV = 'test';
  return del('coverage', function () {
    gulp.src('lib/**/*.js')
      .pipe(istanbul())
      .on('finish', onFinish);
  });
};