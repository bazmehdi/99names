'use strict';

// dependencies

var gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
const terser = require('terser');
const composer = require('gulp-uglify/composer');
const uglify = composer(terser, console);
var rename = require('gulp-rename');
var changed = require('gulp-changed');


///////////////
// - SCSS/CSS
///////////////

var SCSS_SRC = ['./src/App.scss','./src/components/**/*.scss'];
var SCSS_DEST = './dist/css';

// Compile SCSS
gulp.task('compile_scss', function(cb){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
    cb()

});
        
// Detect changes in SCSS
gulp.task('watch_scss', function(cb){
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
    cb()
});

/* WIP

///////////////
// - JS
///////////////

var JS_SRC = ['./server.js','./src/*.js','./src/components/*.js','./src/components/FOLDER_NAME/*.js'];
var JS_DEST = './dist/js';

// Compile JS
gulp.task('compile_js', function(cb){

    gulp.src(JS_SRC)
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(uglify().on('error', function(e){ console.log(e); }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(JS_DEST))
    .pipe(gulp.dest(JS_DEST));
    cb()

});
        
// Detect changes in JS
gulp.task('watch_js', function(cb){
    gulp.watch(JS_SRC, gulp.series('compile_js'));
    cb()
});

*/
        
// Run tasks
gulp.task('default', gulp.series('watch_scss'/*,'watch_js'*/));