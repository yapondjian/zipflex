const Methods = {
    init() {
        Methods.bannerMain();
        Methods.sliderShelf();
        Methods.oqueProcura();
    },

    bannerMain() {
        $(".y-banner__main").slick({
            arrows: false,
            dots: false
        });
    },

    sliderShelf() {
        $('.helperComplement').remove();

        $(".y-home__shelfs ul").slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4
        });
    },

    oqueProcura() {
        $('.y-find__slick').slick({
            slidesToShow: 3
        });
    }
};

export default {
    init: Methods.init
};