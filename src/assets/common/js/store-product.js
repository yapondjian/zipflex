import Main from './modules/product';

const Methods = {
    init() {
        Main.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})