var gulp = require('gulp');
var config = require('../config');

gulp.task(
	'watch',
	gulp.parallel([ 'copy:watch', 'nunjucks:watch', 'list-pages:watch', 'webpack:watch', 'sass:watch' ])
);
