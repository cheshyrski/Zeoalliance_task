/**
 * Load required components
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var vinylPaths = require('vinyl-paths');
var del = require('del');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');
var ngAnnotate = require('gulp-ng-annotate');
var minifyHtml = require('gulp-htmlmin');
var ngHtml2Js = require('gulp-ng-html2js');
var merge2 = require('merge2');
var runSequence = require('run-sequence');
var moduleImporter = require('sass-module-importer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

//
// ******* Tasks *******
//

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Zeo_task"
};

gulp.task('webserver', function() {
    browserSync(config);
});

/**
 * Clean build directory
 */
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(vinylPaths(del));
});

/**
 * Build vendor.css (include all vendor css files)
 */
gulp.task('vendor.css', function() {
    return gulp.src([
            'bower_components/normalize-css/normalize.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

/**
 * Build vendor.js (include all vendor js files)
 */
gulp.task('vendor.js', function() {
    return gulp.src([
            'bower_components/angular/angular.js',
            'bower_components/angular-sanitize/angular-sanitize.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

/**
 * Build app.css (include all project css files)
 */
gulp.task('styles.css', function() {
    return gulp.src([
            'src/scss/styles.scss',
            'src/scss/**/*.scss'
        ])
        .pipe(sass({ importer: moduleImporter() }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({ stream: true }));
});

/**
 * Build app.js (include all project js files and templates)
 */
gulp.task('app.js', function() {
    var js = gulp.src([
            'src/js/app.js',
            'src/js/**/*.js',
            'src/common/**/*.service.js',
            'src/common/**/*.controller.js'
        ])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({ stream: true }));
});

/**
 * Build index.html for ordinary use
 */
gulp.task('index.html', function() {
    return gulp.src('src/index.html')
        .pipe(minifyHtml({
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({ stream: true }));
});

gulp.task('images', function() {
    gulp.src('src/images/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', function() {
    watch(['src/index.html'], function(event, cb) {
        gulp.start('index.html');
    });
    watch([
        'src/scss/styles.scss',
        'src/scss/**/*.scss'
    ], function(event, cb) {
        gulp.start('styles.css');
    });
    watch([
        'src/js/app.js',
        'src/js/**/*.js',
        'src/common/**/*.controller.js',
        'src/common/**/*.service.js',
    ], function(event, cb) {
        gulp.start('app.js');
    });
    watch(['src/images/**/*.*'], function(event, cb) {
        gulp.start('images');
    });
    watch(['src/fonts/**/*.*'], function(event, cb) {
        gulp.start('fonts');
    });
});

//
// ******* Task chains *******
//

/**
 * Default task
 */

gulp.task('default', function(next) {
    runSequence('clean', ['vendor.css', 'vendor.js'], ['styles.css', 'app.js'], 'images', 'fonts', 'index.html', 'webserver', 'watch', next);
});
