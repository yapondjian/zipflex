const Methods = {
    init() {
        Methods.oqueProcura();
        Methods.brands();
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