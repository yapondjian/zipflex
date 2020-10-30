import Sliders from './sliders';
import Actions from './actions';

const Methods = {
    init() {
      Actions.init();
      Sliders.init();
    },
};
  
export default {
    init: Methods.init
};