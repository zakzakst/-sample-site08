/**
 * モジュール読み込み
 */
const { task, watch, series } = require('gulp');

/**
 * タスクモジュール読み込み
 */
const { NUNJUCKS_BUILD } = require('./tasks/nunjucks-build');
const { SASS_BUILD } = require('./tasks/sass-build');
const { WEBPACK } = require('./tasks/webpack');
const { IMAGE_MIN } = require('./tasks/image-min');
const { BROWSER_START, BROWSER_RELOAD } = require('./tasks/browser-sync');

/**
 * タスク定義
 */
task('watchFiles', (done) => {
  watch('./src/nunjucks/**/*.njk', series(NUNJUCKS_BUILD, BROWSER_RELOAD));
  watch('./src/sass/**/*.scss', series(SASS_BUILD, BROWSER_RELOAD));
  watch('./src/js/**/*.js', series(WEBPACK, BROWSER_RELOAD));
  done();
});
task('default', series(BROWSER_START, 'watchFiles'));
task('build', series(NUNJUCKS_BUILD, SASS_BUILD, WEBPACK));
task('nunjucksBuild', series(NUNJUCKS_BUILD));
task('sassBuild', series(SASS_BUILD));
task('webpack', series(WEBPACK));
task('imageMin', series(IMAGE_MIN));
