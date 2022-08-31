'use strict';

export class TopFaq {
  constructor() {
    this.tabEls = document.getElementsByClassName('top-faq__tab-item');
    this.contentEls = document.getElementsByClassName('top-faq__content');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.tabEls.length) return;
    this.changeHandler();
    this.tabEls[0].click();
  }

  /**
   * タブ表示を変更する
   * @param tabEl アクティブ表示するタブ要素
   */
  changeTab(tabEl) {
    [...this.tabEls].forEach((el) => {
      el.classList.remove('is-active');
    });
    tabEl.classList.add('is-active');
  }

  /**
   * 表示コンテンツを変更する
   * @param index コンテンツ番号
   */
  changeContent(index) {
    // 表示コンテンツを変更
    [...this.contentEls].forEach((el) => {
      el.classList.remove('is-active');
    });
    this.contentEls[index].classList.add('is-active');
  }

  /**
   * コンテンツ変更イベントの設定
   */
  changeHandler() {
    [...this.tabEls].forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target;
        const targetIndex = target.dataset.targetIndex;
        this.changeTab(target);
        this.changeContent(Number(targetIndex));
      });
    });
  }
}
