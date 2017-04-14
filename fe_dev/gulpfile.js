var gulp = require('gulp');
var rjs = require('requirejs');
var buildConfig = require('./buildconfig');

gulp.task('build', function(cb){
  rjs.optimize(buildConfig, function(buildResponse){
    console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('default', ['build']);
