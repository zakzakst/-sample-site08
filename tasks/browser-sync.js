/**
 * モジュール読み込み
 */
const browsersync = require('browser-sync').create();

/**
 * 変数設定
 */
const browsersyncConf = {
  server: {
    baseDir: './dist',
  },
  // startPath: 'contact.html',
};

/**
 * 関数
 */
const BROWSER_START = (done) => {
  browsersync.init(browsersyncConf);
  done();
};

const BROWSER_RELOAD = (done) => {
  browsersync.reload();
  done();
};

module.exports = { BROWSER_START, BROWSER_RELOAD };
