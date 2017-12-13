'use strict';

// ==========================================================================
// Dependencies & SETTINGS
// ==========================================================================

import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
// import cached from 'gulp-cached';
import twig from 'gulp-twig';
import plumber from 'gulp-plumber';
// import watch from 'gulp-watch';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
// import csscomb from 'gulp-csscomb';
// import cssnano from 'gulp-cssnano';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

const DEBUG = !process.argv.includes('--release');

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const SETTINGS = {
    path: {
        src: './src',
        docs: './docs',
        views: './views',
        example: {
            sp: './docs/examples/sp'
        },
        default: './src',
        dist: './dist'
    }
};

// ==========================================================================
// Examples
// ==========================================================================

/*gulp.task('docs:twig', () => {

    gulp.src(SETTINGS.path.docs + '/twig/!*.twig')
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.docs));

});*/

/*gulp.task('sp:twig', function () {

    gulp.src(SETTINGS.path.example.sp + '/twig/!*.twig')
    // .pipe(cached('html'))
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.example.sp))

});*/

/*gulp.task("sp:sass", function () {
    gulp.src(SETTINGS.path.example.sp + '/assets/styles/full.scss')
        .pipe(cached('sp'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(SETTINGS.path.example.sp + '/assets/styles/css'));
});*/

// ==========================================================================
// Scripts
// ==========================================================================

/*gulp.task('scripts', function () {
    return gulp.src(SETTINGS.path.dist + '/accessibility.js')
        .pipe(cached('scripts'))
        .pipe(uglify())
        .pipe(rename('accessibility.min.js'))
        .pipe(gulp.dest(SETTINGS.path.dist));
});*/

// ==========================================================================
// Styles
// ==========================================================================

/*gulp.task('styles', function () {
    return gulp.src(SETTINGS.path.dist + '/accessibility.css')
        .pipe(cached('styles'))
        .pipe(csscomb())
        .pipe(gulp.dest(SETTINGS.path.dist))
        .pipe(cssnano())
        .pipe(rename('accessibility.min.css'))
        .pipe(gulp.dest(SETTINGS.path.dist));
});*/

// ==========================================================================
// Webpack
// ==========================================================================
/*
gulp.task("webpack", function (callback) {

    var firstBuildReady = true;

    webpack({
        entry: {
            "accessibility": './src/accessibility'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].js",
            library: '[name]'
        },
        watch: DEBUG,
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ["lodash"],
                            presets: ['env', 'es2015', 'stage-1']
                        }
                    }
                },
                {
                    test: /\.scss/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader?name=images/[hash].[ext]'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader?name=fonts/[hash].[ext]'
                    ]
                }
            ]
        },
        plugins: [].concat(
            new CleanWebpackPlugin(['dist']),
            new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin("[name].css"),
            // new UglifyJSPlugin(),
            // new OptimizeCssAssetsPlugin()
        ),
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
});*/

// ==========================================================================
// BUILD
// ==========================================================================

/*gulp.task('default', function () {

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

});*/

// ==========================================================================
// BUILD DOCS
// ==========================================================================
/*
gulp.task('docs', function () {

    browserSync.create().init({
        server: './',
        open: false,
        notify: false,
        startPath: SETTINGS.path.docs + "/default.html"
    });

    gulp.watch(SETTINGS.path.docs + '/twig/!**!/!*.twig', ['docs:twig']);

    gulp.watch(SETTINGS.path.example.sp + '/twig/!**!/!*.twig', ['sp:twig']);
    gulp.watch(SETTINGS.path.example.sp + '/assets/styles/!**!/!*.scss', ['sp:sass']);

    gulp.watch(SETTINGS.path.dist + '/!**!/!*').on('change', browserSync.reload);
    //reload только для собранных файлов - css,html,js
    gulp.watch(SETTINGS.path.docs + '/!**!/!*.js').on('change', browserSync.reload);
    gulp.watch(SETTINGS.path.docs + '/!**!/!*.css').on('change', browserSync.reload);
    gulp.watch(SETTINGS.path.docs + '/!**!/!*.html').on('change', browserSync.reload);

});*/




gulp.task('sass', () => {
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

    gulp.src(SETTINGS.path.src + '/**/*.scss')
        .pipe(rename({suffix: '.source'}))
        .pipe(gulp.dest(SETTINGS.path.dist));
});

gulp.task('twig', () => {
    gulp.src(SETTINGS.path.views + '/*.twig')
        .pipe(twig().on('error', console.log))
        .pipe(gulp.dest(SETTINGS.path.dist));

});

gulp.task('scripts', () => {

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

    gulp.watch('views/**/*.twig', ['twig']);
});


