const Methods = {
    init() {
        Methods.images();
        Methods.medidas();
        Methods.products();

        $('.y-product__variations ul .skuList span input').on('change', function(){
            $(".y-images--slider").slick('unslick');
            setTimeout(function(){
                Methods.images();
            }, 236);
        });
    },

    images() {
        $(".y-images--slider").slick({
            arrows: true,
            dots: false,
            slidesToShow: 1
        });
    },

    medidas() {
        $(".y-product__medidas--slick").slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '160px',
            infinite: true
        });
    },

    products() {
        $("li[id*='helperComplement']").remove();
        $(".y-shelf > ul").slick({
            arrows: true,
            dots: false,
            slidesToShow: 3
        });
    }
};
  
export default {
    init: Methods.init
};