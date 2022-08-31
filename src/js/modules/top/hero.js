'use strict';

export class TopHero {
  constructor() {
    this.heroEl = document.getElementById('js-top-hero');
    this.mvItemEls = document.getElementsByClassName('top-hero__mv-item');
    this.mvImgClassName = 'top-hero__mv-img';
    this.mvCurrent = 0;
    this.mvCount = this.mvItemEls.length;
    this.mvInterval = 5000;
    this.mvDuration = 4500;
  }

  /**
   * 初期化
   */
  init() {
    // 要素が存在しない場合、処理を終了
    if (!this.heroEl) return false;
    this.mvInit();
    return true;
  }

  /**
   * アニメーション開始
   */
  startAnim() {
    this.heroEl.classList.add('is-animated');
    setTimeout(() => {
      this.mvAnim();
    }, 1000);
  }

  /**
   * メインビジュアル初期化
   */
  mvInit() {
    [...this.mvItemEls].forEach((el) => {
      // 背景画像設定タグの取得
      const imgEl = el.getElementsByClassName(this.mvImgClassName)[0];
      // 背景画像パスの取得
      // @ts-ignore
      const imgSrc = imgEl.dataset.imgSrc;
      // スタイルの設定
      imgEl.setAttribute('style', `background-image: url(${imgSrc})`);
    });
    // 最初の画像を表示
    this.mvItemEls[this.mvCurrent].classList.add('is-active');
  }

  /**
   * メインビジュアルアニメーション
   */
  mvAnim() {
    // 次の表示画像番号を取得
    const nextNum =
      this.mvCurrent === this.mvCount - 1 ? 0 : this.mvCurrent + 1;
    // 現在の画像を取得
    const currentItem = this.mvItemEls[this.mvCurrent];
    // 次の画像を取得
    const nextItem = this.mvItemEls[nextNum];
    // 現在の画像を非表示にする
    currentItem.classList.add('is-leave');
    // 次の画像を表示する
    nextItem.classList.add('is-active', 'is-enter');
    // 現在の表示画像番号を更新
    this.mvCurrent = nextNum;
    // アニメーションが完了したら不要なクラス名を削除
    setTimeout(() => {
      currentItem.classList.remove('is-active', 'is-leave');
      nextItem.classList.remove('is-enter');
    }, this.mvDuration);
    // 指定時間後に次の画像を表示
    setTimeout(() => {
      this.mvAnim();
    }, this.mvInterval);
  }
}
