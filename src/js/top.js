'use strict';

// FAQスクリプトの実行
import { TopFaq } from './modules/top/faq';
(() => {
  const topFaq = new TopFaq();
  topFaq.init();
})();

// スクロールアニメーションスクリプトの実行
import { ScrollAnim } from './modules/top/scroll-anim';
(() => {
  const scrollAnim = new ScrollAnim();
  scrollAnim.init();
})();
