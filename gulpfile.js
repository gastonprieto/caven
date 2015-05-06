'use strict';

require('babel/register');

var gulp = require('gulp');
var sequence = require('run-sequence');

var tasks = require('require-dir')('gulp_tasks');

gulp.task('mocha', tasks.mocha);
gulp.task('jshint', tasks.jshint);

gulp.task('test', function (done) {
  sequence('jshint', 'mocha', done);
});