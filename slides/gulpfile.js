var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        livereload: true,
        port: 8585
    });
});

gulp.task('watch', function () {
    gulp.watch(['**/*.html', '**/*.css'], ['reload']);
});

gulp.task('reload', function () {
    gulp.src(['**/*.html', '**/*.css'])
        .pipe(connect.reload());
});

gulp.task('serve', ['connect', 'watch']);