const Methods = {
    scrollingMenu() {
        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();

            if (st > 200) {
                $('body').addClass('moving');
                if (st > lastScrollTop) {
                    $('body').addClass('moving--down');
                } else {
                    $('body').removeClass('moving--down');
                }
                lastScrollTop = st;
            } else {
                $('body').removeClass('moving');
            }
        });
    }
};

export default Methods.scrollingMenu;