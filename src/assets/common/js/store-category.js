import Category from './modules/category';

const Methods = {
    init() {
        Category.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})