const Methods = {
    init() {
        Methods.openMenu();
        Methods.search();
    },

    openMenu() {
        $('.js--menu').live('click', function(){
            $('.y-header__menu').toggleClass('is--active');
            $('.y-minicart, .y-minicart__content').removeClass('is--active');
        });
        
        $('.y-header__menu-list li').live('click', function(){
            if( $(this).find('.y-header__submenu').length ) {
                $(this).toggleClass('is--active');
            }
        });
    },

    search() {
        $('.js--open-search, .js--search-content .y-close').live('click', function(){
            $('body').toggleClass('no--scroll');
            $('.js--search-content').toggleClass('is--active');
        });
    }
};

export default {
    init: Methods.init,
}