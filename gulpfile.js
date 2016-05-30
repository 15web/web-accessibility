'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', function () {
    browserSync.init({
        server: './',
        open: false
    });
    gulp.watch('*.html').on('change', browserSync.reload);
});
