var gulp = require('gulp');
var rjs = require('requirejs');

var buildConfig = {
  appDir: '.',
  baseUrl: 'js',
  dir: '../assets',
  skipDirOptimize: true,
  mainConfigFile: ['./require-config.js'],
  modules: [
    {
      name: 'indexpage',
      exclude: ['normalize'],
      insertRequire: ["indexpage"]
    }
  ],
  paths: {
    jquery: "empty:"
  },
  optimizeCss: "standard",
  removeCombined: true,
  fileExclusionRegExp: /^(node_modules|gulpfile.js)|(\.json$)/,
  writeBuildTxt: false,
  // generate sourceMap for debugging
  generateSourceMaps: true,
  preserveLicenseComments: false
};

gulp.task('build', function(cb){
  rjs.optimize(buildConfig, function(buildResponse){
    console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('dev', function() {
  var watcher1 = gulp.watch(['./css/*.css'], ['build']);
  var watcher2 = gulp.watch(['./js/**/*.js'], ['build']);
  watcher1.on('change', function(event) {
    console.log('CSS file ' + event.path + ' was ' + event.type +
      ', running build tasks...');
  });
  watcher2.on('change', function(event) {
    console.log('JS file ' + event.path + ' was ' + event.type +
      ', running build tasks...');
  });
});

gulp.task('default', ['build']);