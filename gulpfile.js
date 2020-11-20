const packageJSON = require('./package.json');

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const browserSync = require('browser-sync').create();

const paths = {
    common: {
        styles: {
            src: "./src/assets/common/scss/*.scss",
            dest: "./dist/assets/common/css",
            srcWatch: "./src/assets/common/scss/**/*.scss"
        },
        scripts: {
            src: "./src/assets/common/js/*.js",
            dest: "./dist/assets/common/js",
            srcWatch: "./src/assets/common/js/**/*.js"
        }
    },
};

function clean(){
    return del(['dist'])
}

function stylesCommon() {
    return gulp.src(paths.common.styles.src)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(paths.common.styles.dest))
}

function scriptsCommon(){
    return gulp.src(paths.common.scripts.src)
    .pipe(babel())
    .pipe(browserify({
        transform: ['babelify'],
      }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.common.scripts.dest))
}

function vtexLocal() {
    browserSync.init({
        open: 'external',
        https: true,
        ui: false,
        files: [
            './dist/assets/common/js/*.js',
            './dist/assets/common/css/*.css'
        ],
        host: `${packageJSON.name}.vtexlocal.com.br`,
        startpath: '/admin/login/',
        proxy: `https://${packageJSON.name}.vtexcommercestable.com.br`,
        serveStatic: [
            {
                route: ['/arquivos','/files'],
                dir: [
                    './dist/assets/common/js',
                    './dist/assets/common/css'
                ],
            },
        ],
    })
}

function watch(){
    gulp.watch(paths.common.styles.srcWatch, stylesCommon);
    gulp.watch(paths.common.scripts.srcWatch, scriptsCommon);
    
    vtexLocal();
}

const build = gulp.series(clean, gulp.parallel(stylesCommon, scriptsCommon));

exports.clean = clean;

exports.stylesCommon = stylesCommon;
exports.scriptsCommon = scriptsCommon;

exports.watch = watch;

exports.build = build;

exports.default = build;