var gulp = require('gulp'),
//加载gulp-load-plugins插件，并马上运行它
plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
    plugins.connect.server({
        root: 'D:/www/front_frame',
        livereload: true
    });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(plugins.connect.reload());
});

gulp.task('css', function () {
  gulp.src('src/**/index.styl')
    .pipe(plugins.stylus())
    .pipe(gulp.dest('static'))
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['index.html'], ['html']);
  gulp.watch(['src/css/*'], ['css']);
});

gulp.task('default', ['connect','watch']);

