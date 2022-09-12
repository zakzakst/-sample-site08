'use strict';

import { gsap } from 'gsap';

export class Loader {
  constructor(callback) {
    this.el = document.getElementById('js-loader');
    this.callback = callback;
  }

  /**
   * 初期化
   */
  init() {
    if (!this.el) return;
    this.onLoadWindow();
  }

  /**
   * ローダーを閉じる
   */
  closeLoader() {
    const self = this;
    const tl = gsap.timeline();
    this.clearWindow();
    tl.to(this.el, {
      autoAlpha: 0,
    }).set(this.el, {
      display: 'none',
      onComplete: () => {
        self.callback();
      },
    });
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow() {
    document.documentElement.style.overflow = null;
  }

  /**
   * ページロード時の挙動
   */
  onLoadWindow() {
    window.onload = () => {
      setTimeout(() => {
        this.closeLoader();
      }, 400);
    };
  }
}
