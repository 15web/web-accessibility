'use strict';

const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const webpack = require('webpack');
const gutil = require('gulp-util');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');

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

gulp.task('scripts', function () {
        return gulp.src('./dist/accessibility.js')
            .pipe(uglify())
            .pipe(rename('accessibility.min.js'))
            .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function () {
    return gulp.src('./dist/accessibility.css')
        .pipe(cssnano())
        .pipe(rename('accessibility.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task("webpack", function () {
    var configFile = './webpack.config.js';
    var configFileContent = require(configFile);
    var finalConfig = Object.assign({}, configFileContent);
    var webpackStatsConfig = {
        colors: true, hash: false, version: false, timings: false, assets: true, chunks: false,
        chunkModules: false, modules: false, children: false, cached: false, reasons: false,
        source: false, errorDetails: false, chunkOrigins: false
    };
    webpack(finalConfig, function (err,stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        var title = 'webpack' + ' compile #'+':\r\n';
        gutil.log(title, stats.toString(webpackStatsConfig));


    });
});

gulp.task('default', ['webpack', 'html', 'sp', 'server'], function () {
    gulp.watch('./examples/sp/twig/**/*.twig', ['html']);
    gulp.watch('./examples/sp/assets/styles/**/*.scss', ['sp']);
});

gulp.task('production', ['webpack', 'html', 'sp','styles','scripts','server'], function () {
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
