var gulp = require('gulp'),
//加载gulp-load-plugins插件，并马上运行它
plugins = require('gulp-load-plugins')(),
connect = require('gulp-connect');


gulp.task('connect', function() {
    plugins.connect.server({
        port: 8321,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('src/**/index.styl')
        .pipe(plugins.stylus())
        .pipe(gulp.dest('static'))
        .pipe(connect.reload());
});

gulp.task('image', function () {
    gulp.src('src/images/*.{jpg,png,gif,ico}')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('static/images'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['index.html'], ['html']);
    gulp.watch(['src/css/*'], ['css']);
    gulp.watch(['src/images/*'], ['image']);
});

// gulp.task('default', ['connect','watch']);
gulp.task('default', gulp.series('connect', 'watch', function() {
  // Do something
}));
