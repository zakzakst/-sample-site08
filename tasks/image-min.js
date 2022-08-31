/**
 * モジュール読み込み
 */
const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

/**
 * 変数設定
 */
const files = './src/img/**/*.{jpg,jpeg,png,gif,svg}';
const dist = './dist/img';
const imageminPlugin = [
  mozjpeg({
    quality: 80,
  }),
  pngquant({
    quality: [0.65, 0.8],
    speed: 1,
  }),
  imagemin.svgo(),
  imagemin.gifsicle(),
];

/**
 * 関数
 */
const IMAGE_MIN = () => {
  return src(files)
    .pipe(changed(dist))
    .pipe(imagemin(imageminPlugin))
    .pipe(dest(dist));
};

module.exports = { IMAGE_MIN };
