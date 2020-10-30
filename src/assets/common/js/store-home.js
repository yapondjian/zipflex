import Main from './modules/home';

const Methods = {
    init() {
        Main.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})