import Geral from './modules/geral/index';

const Methods = {
    init() {
        Geral.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
});