var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var reactify = require('reactify');
var watchify = require('watchify');
var browserify = require('browserify');
var browserSync  = require('browser-sync');

// input file
var bundler = watchify(browserify('./src/scripts/init.js', watchify.args));


// React JSX Transform
bundler.transform(reactify);

// Babel transform
bundler.transform(babelify);

// on updates recompile
bundler.on('update', bundle);

function bundle() {

	gutil.log('Compiling JS');

	return bundler.bundle()
		.on('error', function(err) {
			gutil.log('ERROR: ' + err.message);
			//browserSync.notify('Browserify Error');
			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/scripts'));
		/*.pipe(browserSync.reload({
			stream: true,
			once: true
		}));*/
}


// bundle task
gulp.task('bundle', function() {
	return bundle();
});
