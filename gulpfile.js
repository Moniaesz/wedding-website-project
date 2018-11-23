const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {

    browserSync.init({
        server: 'src/'
    });
});

gulp.task('watch', function() {

    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch(['src/*.html', 'src/css/*.css', 'src/js/app.js'], browserSync.reload);
});

gulp.task('default', ['sass', 'serve', 'watch']);