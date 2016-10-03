'use strict';

// ==========================================================================
// Dependencies & SETTINGS
// ==========================================================================

import gulp from 'gulp';
import gutil from 'gulp-util';
import cached from 'gulp-cached';
import twig from 'gulp-twig';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import csscomb from 'gulp-csscomb';
import cssnano from 'gulp-cssnano';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

const DEBUG = !process.argv.includes('--release');

const SETTINGS = {
    path: {
        docs: './docs',
        example: {
            sp: './docs/examples/sp'
        },
        default: './src',
        dist: './dist'
    }
};

const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 39',
    'Firefox >= 38',
    'Explorer >= 7',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 5'
];

// ==========================================================================
// Examples
// ==========================================================================

gulp.task('docs:twig', () => {

    gulp.src(SETTINGS.path.docs + '/twig/*.twig')
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.docs));

});

gulp.task('sp:twig', function () {

    gulp.src(SETTINGS.path.example.sp + '/twig/*.twig')
        // .pipe(cached('html'))
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.example.sp))

});

gulp.task("sp:sass", function () {
    gulp.src(SETTINGS.path.example.sp + '/assets/styles/full.scss')
        .pipe(cached('sp'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(SETTINGS.path.example.sp + '/assets/styles/css'));
});

// ==========================================================================
// Scripts
// ==========================================================================

gulp.task('scripts', function () {
    return gulp.src(SETTINGS.path.dist + '/accessibility.js')
        .pipe(cached('scripts'))
        .pipe(uglify())
        .pipe(rename('accessibility.min.js'))
        .pipe(gulp.dest(SETTINGS.path.dist));
});

// ==========================================================================
// Styles
// ==========================================================================

gulp.task('styles', function () {
    return gulp.src(SETTINGS.path.dist + '/accessibility.css')
        .pipe(cached('styles'))
        .pipe(csscomb())
        .pipe(gulp.dest(SETTINGS.path.dist))
        .pipe(cssnano())
        .pipe(rename('accessibility.min.css'))
        .pipe(gulp.dest(SETTINGS.path.dist));
});

// ==========================================================================
// Webpack
// ==========================================================================

gulp.task("webpack", function (callback) {

    var firstBuildReady = true;

    webpack({
        entry: {
            "accessibility": './src/accessibility'
        },
        output: {
            path: './dist/',
            filename: "[name].js",
            library: '[name]'
        },
        watch: DEBUG,
        devtool: 'source-map',
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
            }, {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                exclude: /node_modules/,
                loader:'url?limit=1024&name=images/[name]-[hash:6].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'url?limit=1024&name=fonts/[name].[ext]'
            }]
        },
        plugins: [
            new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin('accessibility.css')
        ],
        postcss: function () {
            return [
                require('autoprefixer'),
                require('postcss-inline-svg')
            ];
        }
    }, function (err, stats) {

        if (err) throw new gutil.PluginError("webpack", err);

        gutil.log(stats.toString({
            colors: true, 
            hash: true,
            chunks: false,
            children: false
        }));

        if (firstBuildReady) {
            callback();
            firstBuildReady = false;
        }

    });
});

// ==========================================================================
// BUILD
// ==========================================================================

gulp.task('default', function() {

    // Development
    if (DEBUG) {
        runSequence(
            'webpack',
            'docs'
        );
    }

    // Production
    if (!DEBUG) {
        runSequence(
            'webpack',
            'styles',
            'scripts'
        );
    }

});

// ==========================================================================
// BUILD DOCS
// ==========================================================================

gulp.task('docs', function() {

    browserSync.create().init({
        server: './',
        open: false,
        startPath: SETTINGS.path.docs + "/default.html"
    });

    gulp.watch(SETTINGS.path.docs + '/twig/**/*.twig', ['docs:twig']);

    gulp.watch(SETTINGS.path.example.sp + '/twig/**/*.twig', ['sp:twig']);
    gulp.watch(SETTINGS.path.example.sp + '/assets/styles/**/*.scss', ['sp:sass']);
    
    gulp.watch(SETTINGS.path.dist + '/**/*').on('change', browserSync.reload);
    //reload только для собранных файлов - css,html,js
    gulp.watch(SETTINGS.path.docs + '/**/*.js').on('change', browserSync.reload);
    gulp.watch(SETTINGS.path.docs + '/**/*.css').on('change', browserSync.reload);
    gulp.watch(SETTINGS.path.docs + '/**/*.html').on('change', browserSync.reload);

});
