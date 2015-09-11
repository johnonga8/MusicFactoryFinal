var gulp = require('gulp'),
	util = require('gulp-util'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

var srcs = {
	sass: [
		"Music Factory Teacher/resources/src/sass/**/*.scss"
	],
	js: [
		"Music Factory Teacher/resources/src/js/init.js",
        "Music Factory Teacher/resources/src/js/@(providers|factories|services|controllers|filters|directives)/**/*.js",
	],
	deps: [
		"Music Factory Teacher/resources/lib/jquery/dist/jquery.min.js",
		"Music Factory Teacher/resources/lib/angular/angular.min.js",
		"Music Factory Teacher/resources/lib/angular-route/angular-route.min.js",
		"Music Factory Teacher/resources/lib/lodash/lodash.min.js",
	]
}

gulp.task('sass', function () {
	gulp.src(srcs.sass)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(concat('musicfactory.css'))
		.pipe(gulp.dest('Music Factory Teacher/www/css'))
});

gulp.task('js', function () {
	gulp.src(srcs.js)
		.pipe(concat('musicfactory.js'))
		.pipe(gulp.dest('Music Factory Teacher/www/js'))
});

gulp.task('deps', function () {
	gulp.src(srcs.deps)
		.pipe(concat('musicfactory-deps.js'))
		.pipe(gulp.dest('Music Factory Teacher/www/js'))
});

gulp.task('default', ['js', 'deps', 'sass']);

gulp.task('watch', function() {
	gulp.watch(
		['Music Factory Teacher/resources/src/js/**/*.js','Music Factory Teacher/resources/src/sass/**/*.scss'],
		['js', 'deps', 'sass']
	);
});