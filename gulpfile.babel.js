'use strict';

// ==========================================================================
// Dependencies & SETTINGS
// ==========================================================================

import gulp from 'gulp';
import babel from 'gulp-babel';
import twig from 'gulp-twig';
import sass from 'gulp-sass';
import rename from 'gulp-rename';

import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

const path = require('path');

const SETTINGS = {
    path: {
        src: './src',
        views: './views',
        dist: './dist'
    }
};

gulp.task('sass', () => {
    /**
     * Собираем файлы из исходников в обычном и минифицированном варианте
     */
    gulp.src(SETTINGS.path.src + '/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest(SETTINGS.path.dist))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(SETTINGS.path.dist));

    /**
     * Копируем исходники в dist, чтобы дать возможность скачать их
     */
    gulp.src(SETTINGS.path.src + '/**/*.scss')
        .pipe(gulp.dest(SETTINGS.path.dist));
});

gulp.task('twig', () => {
    gulp.src(SETTINGS.path.views + '/*.twig')
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.dist));

});

gulp.task('scripts', () => {

    /**
     * Собираем файлы из исходников в обычном и минифицированном варианте
     */
    gulp.src(SETTINGS.path.src + '/**/*.js')
        .pipe(babel({
            presets: [["env" , {
                "target": {
                    "browsers": ["> % 1"]
                }
            }]]
        }))
        .pipe(gulp.dest(SETTINGS.path.dist))
        .pipe(babel({
            minified: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(SETTINGS.path.dist));

    /**
     * Копируем исходники в dist, чтобы дать возможность скачать их
     */
    gulp.src(SETTINGS.path.src + '/**/*.js')
        .pipe(rename({suffix: '.source'}))
        .pipe(gulp.dest(SETTINGS.path.dist));
});

gulp.task('build', () => {
    runSequence(
        'twig',
        'scripts',
        'sass'
    );
});

gulp.task('watch', () => {

    runSequence(
        'build',
    );

    gulp.watch(SETTINGS.path.views + '/**/*.twig', ['twig']);
    gulp.watch(SETTINGS.path.src + '/**/*.scss', ['sass']);
    gulp.watch(SETTINGS.path.src + '/**/*.js', ['scripts']);
});


