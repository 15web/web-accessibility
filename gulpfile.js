'use strict';

const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();

// examples-sp only

gulp.task('html', function () {
    gulp.src('./examples/sp/twig/*.twig')
        .pipe(gp.cached('html'))
        .pipe(gp.twig())
        .pipe(gulp.dest('./examples/sp/'))
});

gulp.task("sp", function () {
    return gulp.src('./examples/sp/assets/styles/full.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./examples/sp/assets/styles/css'));
});

gulp.task('default', ['html','sp', 'server'], function () {

    gulp.watch('./examples/sp/twig/**/*.twig', ['html']);
    gulp.watch('./examples/sp/assets/styles/**/*.scss', ['sp']);

});

gulp.task('server', function () {
    browserSync.init({
        server: './',
        open: true,
        startPath: "/examples/sp/index.html"
    });

    gulp.watch('./examples/sp/**/*.*').on('change', browserSync.reload);
});