const Methods = {
    init() {
        Methods.bannerMain();
        Methods.sliderShelf();
        Methods.brands();
        Methods.oqueProcura();
    },

    bannerMain() {
        $(".y-banner__main").slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    },

    sliderShelf() {
        $('.helperComplement').remove();

        $(".y-home__shelfs ul").slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                }
            ]
        });
    },

    oqueProcura() {
        $('.y-find__slick').slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0 30px'
                    }
                }
            ]
        });
    },

    brands() {
        $(".y-brand__slick").slick({
            arrows: true,
            dots: true,
            infinite: false,
            slidesToShow: 6
        })
    }
};

export default {
    init: Methods.init
};