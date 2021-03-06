//-- REQUIRE STATEMENTS --//

const { watch, series, parallel, src, dest } = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');

// SCSS requires
const sass = require('gulp-sass');
const uglifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// JS requires
const typescript = require('gulp-typescript');
const uglifyJS = require('gulp-uglify');

// HTML requires
//const injectPartials = require('gulp-inject-partials');
const fileInclude = require('gulp-file-include');
const uglifyHTML = require('gulp-cshtml-minify');
const replace = require('gulp-replace');


//-- PUBLIC VARIABLES --//
const production = false;
const devRoot = 'http://localhost/bluebirdrecs/dist/';
const productionRoot = 'http://localhost/bluebirdrecs/dist/';
//const productionRoot = 'https://bluebirdrecs.com/';

const jsLibs = [
    'src/js/libs/jquery-3.4.1.min.js'
];
const js = [
    'src/js/core.ts', 'src/js/template.ts', 'src/js/nav.ts', 
    'src/js/home.ts', 'src/js/grid.ts'
];


//-- GULP TASKS --//
// Clean functions
function cleanAll() { return del('dist/**/*'); }
function cleanHTML() { return del('dist/*.html'); }
function cleanCSS() { return del('dist/style.css'); }
function cleanJS() { return del('dist/main.js'); }
function cleanJSLibs() { return del('dist/libs.js'); }
function cleanIMG() { return del('dist/img/**/*'); }
function cleanHTACCESS() { return del('dist/.htaccess'); }

// Process user-defined files
function processCSS() {
    return src(['src/scss/*.scss', '!src/scss/_*.scss'])
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(gulpif(production, uglifyCSS()))
        .pipe(dest('dist/'));
}

function processJS() {
    return src(js)
        .pipe(concat('main.ts'))
        .pipe(typescript({
            noImplicitAny: true,
            allowJs: true,
            outFile: 'main.js',
            target: 'ES3', // ES3, ES5 or ES6
        }))
        .pipe(gulpif(production, uglifyJS()))
        .pipe(dest('dist/'));
}

function processHTML() {
    return src('src/views/*.html')
        .pipe(fileInclude({
            basepath: './src/partials/'
        }))
        /*.pipe(injectPartials({
            start: '<partial path="{{path}}">',
            end: '</partial>',
            removeTags: true,
            prefix: '../partials/',
            quiet: true
        }))*/
        .pipe(gulpif(production, replace('{root}', productionRoot), replace('{root}', devRoot)))
        .pipe(gulpif(production, uglifyHTML({ 
            urlSchemes: false,
            optionalClosingTags: false
        })))
        .pipe(dest('dist/'));
}

function processHTACCESS() {
    return src(['src/.htaccess'])
        .pipe(gulpif(production, replace('{root}', productionRoot), replace('{root}', devRoot)))
        .pipe(dest('dist/'));
}

// TODO: compress copy and resize imgs
function processIMG() {
    return src('src/img/*.{png,jpg}')
        .pipe(dest('dist/img'));
}

// Process libraries
function libsJS() {
    return src(jsLibs)
        .pipe(concat('libs.js'))
        .pipe(dest('dist/'));
}

// Watch function
function watchFiles() {
    watch('src/{views,partials}/*.html', series(cleanHTML, processHTML));
    watch('src/js/*.{js,ts}', series(cleanJS, processJS));
    watch('src/js/libs/*.js', series(cleanJSLibs, libsJS));
    watch('src/scss/*.scss', series(cleanCSS, processCSS));
    watch('src/img/*.{png,jpg}', series(cleanIMG, processIMG));
    watch('src/.htaccess', series(cleanHTACCESS, processHTACCESS));
}


//-- TASK EXPORTS --//
exports.default = series(cleanAll, parallel(processHTACCESS, libsJS, processCSS, processHTML, processJS, processIMG), watchFiles);

exports.build = series(cleanAll, parallel(processHTACCESS, libsJS, processCSS, processHTML, processJS, processIMG));

exports.watch = watchFiles;
