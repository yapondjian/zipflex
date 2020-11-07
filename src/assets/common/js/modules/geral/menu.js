const Methods = {
    init() {
        Methods.openMenu();
        Methods.search();
    },

    openMenu() {
        $('.js--menu, .y-header__menu .y-close').live('click', function(){
            $('body').toggleClass('no--scroll');
            $('.y-header__menu').toggleClass('is--active')
        })
    },

    search() {
        $('.js--search, .js--search-content .y-close').live('click', function(){
            $('body').toggleClass('no--scroll');
            $('.js--search-content').toggleClass('is--active');
        })
    }
};

export default {
    init: Methods.init,
}