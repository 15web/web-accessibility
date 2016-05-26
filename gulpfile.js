'use strict';

const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const gp = require('gulp-load-plugins')();
const webpack = require('webpack');
const gutil = require('gulp-util'); // gp.gutil не работает в вебпаке
const browserSync = require('browser-sync').create();

var production = gp.util.env.production || false;


var settings = {
    path: {
        example: './examples/sp',
        default: './src',
        build: './dist'
    }
};

// examples-sp only

gulp.task('html', function () {
    gulp.src(settings.path.example + '/twig/*.twig')
        .pipe(gp.cached('html'))
        .pipe(gp.twig().on('error', console.log))
        .pipe(gulp.dest(settings.path.example))
});

gulp.task("sp", function () {
    return gulp.src(settings.path.example + '/assets/styles/full.scss')
        .pipe(gp.cached('sp'))
        .pipe(gp.sass().on('error', gp.sass.logError))
        .pipe(gulp.dest(settings.path.example + '/assets/styles/css'));
});

gulp.task('scripts', function () {
    return gulp.src(settings.path.build + '/accessibility.js')
        .pipe(gp.cached('scripts'))
        .pipe(gp.uglify())
        .pipe(gp.rename('accessibility.min.js'))
        .pipe(gulp.dest(settings.path.build));
});

gulp.task('styles', function () {
    return gulp.src(settings.path.build + '/accessibility.css')
        .pipe(gp.cached('styles'))
        .pipe(gp.csscomb())
        .pipe(gulp.dest(settings.path.build))
        .pipe(gp.cssnano())
        .pipe(gp.rename('accessibility.min.css'))
        .pipe(gulp.dest(settings.path.build));
});

gulp.task("webpack", function (callback) {

    var firstBuild = true;
    var configFile = require('./webpack.config.js');
    webpack(configFile, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log(stats.toString({
            colors: true, 
            hash: false,
            chunks: false,
            children: false

        }));

        if (firstBuild) {
            callback();
            firstBuild = false;
        }

    });
});

gulp.task('dev', gulpsync.sync([['webpack', 'html', 'sp'], ['server']]), function () {
    gulp.watch(settings.path.example + '/twig/**/*.twig', ['html']);
    gulp.watch(settings.path.example + '/assets/styles/**/*.scss', ['sp']);
});

if (production) {
    gulp.task('default', gulpsync.sync(['dev', 'scripts', 'styles']));
}
else {
    gulp.task('default', ['dev']);
}


gulp.task('server', function () {
    browserSync.init({
        server: './',
        open: false,
        startPath: settings.path.example + "/index.html"
    });
    gulp.watch(settings.path.build + '/**/*').on('change', browserSync.reload);
    gulp.watch(settings.path.example + '/*.html').on('change', browserSync.reload);
});
