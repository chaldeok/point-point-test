const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const terser = require('gulp-terser')
const concat = require('gulp-concat');
const mode = require('gulp-mode')();
const paths = require('../paths');

const jsFiles = ['./././app/js/selects.js', './././app/js/temperature.js'] // очередность подключения файлов

const scripts = () => {
  return gulp.src(jsFiles)
    .pipe(plumber())
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(concat('scripts.js'))
    .pipe(mode.production(terser()))
    .pipe(gulp.dest(paths.dist.js));
};

module.exports = scripts;
