import Geral from './modules/geral';
import ScrollingMenu from '../../common/js/modules/geral/scrollingMenu';
import BuyInShelf from '../../common/js/modules/geral/buyInShelf';
import promoTag from '../../common/js/modules/geral/promoTag';
import cookieAlert from '../../common/js/modules/geral/cookieAlert';


const Methods = {
    init() {
        // Geral.init();
        ScrollingMenu();
        BuyInShelf.init();
        promoTag.init();
        cookieAlert.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
});