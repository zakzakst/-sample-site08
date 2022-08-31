'use strict';

export class Header {
  constructor() {
    this.buttonEl = document.getElementById('js-header-button');
    this.menuEl = document.getElementById('js-header-menu');
    this.isOpen = false;
    this.fixedContentEls = document.getElementsByClassName('js-fix-content');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.buttonEl) return;
    this.onClickButton();
  }

  /**
   * メニューを開く
   */
  openMenu() {
    this.fixWindow();
    this.buttonEl.classList.add('is-open');
    this.menuEl.classList.add('is-open');
    this.isOpen = true;
  }

  /**
   * メニューを閉じる
   */
  closeMenu() {
    this.clearWindow();
    this.buttonEl.classList.remove('is-open');
    this.menuEl.classList.remove('is-open');
    this.isOpen = false;
  }

  /**
   * メニューを開閉する
   */
  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * ウインドウを固定
   */
  fixWindow() {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    this.fixFixedContent(scrollBarWidth);
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow() {
    document.body.style.paddingRight = null;
    this.clearFixedContent();
    document.documentElement.style.overflow = null;
  }

  /**
   * ウインドウ位置を固定している要素のずれ調整
   */
  fixFixedContent(scrollBarWidth) {
    [...this.fixedContentEls].forEach((el) => {
      const target = el;
      target.style.paddingRight = `${scrollBarWidth}px`;
    });
  }

  /**
   * ウインドウ位置を固定している要素のずれ調整を戻す
   */
  clearFixedContent() {
    [...this.fixedContentEls].forEach((el) => {
      const target = el;
      target.style.paddingRight = null;
    });
  }

  /**
   * クリック時の挙動を設定
   */
  onClickButton() {
    this.buttonEl.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
  }
}
