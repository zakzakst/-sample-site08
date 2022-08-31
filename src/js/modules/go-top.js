'use strict';

export class GoTop {
  constructor() {
    this.el = document.getElementById('js-go-top');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.onClickEl();
  }

  /**
   * トップへ戻る
   */
  goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * クリック時の挙動を設定
   */
  onClickEl() {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      this.goTop();
    });
  }
}
