/**
 * Created by Adrian on 12.03.2018.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('server',function () {
   browserSync({
       server: './',
   });

    gulp.watch('./index.html',['reload','sass']);
    gulp.watch('./css/*.scss',['sass','reload']);
});

gulp.task('reload',['sass'],function () {
    browserSync.reload();
});

gulp.task('sass',function () {
    return (gulp.src('./css/*.scss'))
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
