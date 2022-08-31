'use strict';

// トップヒーロースクリプトの実行
// ローダースクリプトの実行
import { TopHero } from './modules/top/hero';
import { Loader } from './modules/loader';
(() => {
  const topHero = new TopHero();
  const isExistTopHero = topHero.init();
  const loader = new Loader(() => {
    if (isExistTopHero) {
      topHero.startAnim();
    }
  });
  loader.init();
})();

// ヘッダースクリプトの実行
import { Header } from './modules/header';
(() => {
  const header = new Header();
  header.init();
})();

// トップへ戻るスクリプトの実行
import { GoTop } from './modules/go-top';
(() => {
  const goTop = new GoTop();
  goTop.init();
})();
