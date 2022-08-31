/**
 * モジュール読み込み
 */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const htmlhint = require('gulp-htmlhint');
const htmlbeautify = require('gulp-html-beautify');
const minifyInline = require('gulp-minify-inline');
const minifyInlineJSON = require('gulp-minify-inline-json');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

/**
 * 変数設定
 */
const files = ['src/nunjucks/pages/**/*.njk', '!src/nunjucks/pages/**/_*.njk'];
const dist = './dist';
const root = 'src/nunjucks/';
const environment = process.env.NODE_ENV || 'development';
// const environment = 'production';
const htmlbeautifyConf = {
  indent_size: 2,
  preserve_newlines: false,
};
const htmlminConf = {
  collapseWhitespace: true,
  removeComments: true,
};
const CONSTANTS = require('../src/nunjucks/constants.js');

/**
 * 関数
 */
const NUNJUCKS_BUILD = () => {
  return src(files)
    .pipe(plumber())
    .pipe(
      nunjucksRender({
        path: [root],
        data: CONSTANTS,
      })
    )
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(htmlbeautify(htmlbeautifyConf))
    .pipe(minifyInline())
    .pipe(minifyInlineJSON())
    .pipe(gulpIf(environment === 'production', htmlmin(htmlminConf)))
    .pipe(rename({ extname: '.html' }))
    .pipe(dest(dist));
};

module.exports = { NUNJUCKS_BUILD };
