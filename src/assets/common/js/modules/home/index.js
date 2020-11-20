const Methods = {
    init() {
        Methods.bannerMain();
        Methods.depoimentos();
        
        if( window.innerWidth <= 767 ) {
            Methods.beneficios();
            Methods.bannerTopo();
        } else {
            Methods.destaque();
        }
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

    bannerTopo() {
        $(".y-half").slick({
            arrows: false,
            dots: true
        });
    },

    beneficios() {
        $(".y-benefits__content").slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 1
        });
    },
    
    destaque() {
        $('.helperComplement').remove();
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

    depoimentos() {
        $(".y-depoimentos__list").slick({
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 767,
                    settings : {
                        slidesToShow: 1
                    }
                }
            ]
        })
    }
};

export default {
    init: Methods.init
};