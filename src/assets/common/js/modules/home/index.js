const Methods = {
    init() {
        Methods.bannerMain();
        Methods.sliderShelf();
        Methods.sliderStore();
    },

    bannerMain() {

        $(".y-banner__main").slick({
            arrows: false,
            dots: true
        });
    },

    sliderShelf() {
        $('.helperComplement').remove();

        $(".y-shelf > ul").slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 5
        });
    },

    sliderStore() {
        $('.y-home__store--list-item').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
        });
    }
};

export default {
    init: Methods.init
};