/**
 * Created by André Fatia on 10-07-2015.
 */
'use strict';
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var gulpUtil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('lodash');
var browserSync = require('browser-sync').create();

// browserify options
var customOpts = {
    entries: ['./app/App.js'],
    debug: true
};
var opts = _.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// transform babeljs
b.transform(babelify);

gulp.task('js', bundle);
gulp.task('sass', sass);
b.on('log', gulpUtil.log);

/**
 * Compile sass files to css
 * @returns {*}
 */
function sass() {
    return gulp
        .src('./app/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
}

/**
 * Generate bundle.js from required javascript files
 * @returns {*}
 */
function bundle() {
    return b.bundle()
        .on('error', gulpUtil.log.bind(gulpUtil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
}

/**
 *  Default task, run browsersync and watch for files changes
 */
gulp.task('default', ['js', 'sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch('./app/**/*.js', ['js']);
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./public/index.html').on('change', browserSync.reload);
});