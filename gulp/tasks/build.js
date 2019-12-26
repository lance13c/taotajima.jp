var gulp = require('gulp');
var config = require('../config');

gulp.task('set:prod', function(done) {
	config.setEnv('production');
	config.logEnv();

	done();
});

gulp.task('set:dev', function(done) {
	config.setEnv('development');
	config.logEnv();

	done();
});

gulp.task(
	'build',
	gulp.series([ 'set:prod', 'clean', 'sass', 'nunjucks', 'webpack', 'copy', 'list-pages' ], (cb) => {
		cb();
	})
);

gulp.task(
	'build:dev',
	gulp.series([ 'set:dev', 'clean', 'sass', 'nunjucks', 'webpack', 'copy', 'list-pages' ], (cb) => {
		cb();
	})
);
