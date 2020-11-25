const Methods = {
    init() {
        Methods.openMenu();
        Methods.search();
    },

    openMenu() {
        $('.js--menu').live('click', function(){
            $('.y-header__menu').toggleClass('is--active');
        });

        $('.y-header__menu-list li:first-child').live('click', function(){
            $(this).toggleClass('is--active');
        });
    },

    search() {
        $('.js--search, .js--search-content .y-close').live('click', function(){
            $('body').toggleClass('no--scroll');
            $('.js--search-content').toggleClass('is--active');
        });
    }
};

export default {
    init: Methods.init,
}