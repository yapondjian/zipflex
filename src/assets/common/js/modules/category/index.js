import ScrollToTop from './actions';
import InfinityScroll from './infinityScroll';

const Methods = {
  init() {
    ScrollToTop.init();
    InfinityScroll.init();
  }
};

export default {
  init: Methods.init
};
