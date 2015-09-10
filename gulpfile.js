var gulp = require('gulp'),
	util = require('gulp-util'),
	concat = require('gulp-concat')

var srcs = {
	js: [
		"Music Factory Teacher/resources/src/js/init.js",
        "Music Factory Teacher/resources/src/js/@(providers|factories|services|controllers|filters|directives)/**/*.js",
	],
	deps: [
		"Music Factory Teacher/resources/lib/angular-route/angular-route.min.js"
	]
}

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

gulp.task('default', ['js', 'deps']);

gulp.task('watch', function() {
	gulp.watch('Music Factory Teacher/resources/src/js/**/*.js', ['js', 'deps']);
});