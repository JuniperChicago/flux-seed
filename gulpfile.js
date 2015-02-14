var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');



/**
 * [[Description]]
 */
gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')
		.pipe(sass({
			includePaths: ['bower_components/foundation/scss']
		}))
		.pipe(gulp.dest('dist/css'));
});


/**
 * [[Description]]
 */
gulp.task('browserify', function() {
	gulp.src('src/js/main.js')
		.pipe(browserify({
			transform: ['reactify']
		}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

/**
 * [[Description]]
 */
gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));

});


/**
 * [[Description]]
 */
gulp.task('default', ['browserify', 'copy', 'sass', 'watch']);

/**
 * [[Description]]
 */
gulp.task('watch', function() {
	gulp.watch('src/js/**/*.*', ['browserify', 'copy']);
	gulp.watch('src/scss/*.*', ['sass']);
	gulp.watch('src/index.html', ['copy']);


});