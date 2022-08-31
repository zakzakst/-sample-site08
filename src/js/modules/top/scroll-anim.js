import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnim {
  constructor() {
    this.els = document.getElementsByClassName('js-scroll-anim');
  }

  /**
   * 初期化
   */
  init() {
    if (!this.els.length) return;
    [...this.els].forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        onEnter: (self) => {
          el.classList.add('is-animated');
          self.kill();
        },
      });
    });
  }
}
