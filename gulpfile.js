'use strict';
 
var gulp = require('gulp');
var dest = 'js/';

var sass = require('gulp-sass');
var install = require("gulp-install");
var livereload = require('gulp-livereload');
// var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 
var sourcemaps = require('gulp-sourcemaps');
// var pump = require('pump');
// var plugins = require("gulp-load-plugins")({
// 	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
// 	replaceString: /\bgulp[\-.]/
// });



// gulp.src(['bower.json', 'package.json'])
//   .pipe(install());
// gulp.task('blog', function () {
// 	gulp.src('blog/assets/css/sass/**/*.scss')
// 	.pipe(sourcemaps.init())
// 	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest('blog/assets/css'))
// 	.pipe(livereload())
 
//  });


gulp.task('sass', function () {
	gulp.src('assets/css/sass/stylesheets/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css/stylesheets'))
    .pipe(livereload());
});

//var jsFiles = ['js/*'];

gulp.task('js', function() {

	var jsFiles = ['js/*'];

	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('js/'));

});
 
gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('assets/css/sass/**/*.scss', ['sass']);
}); 
