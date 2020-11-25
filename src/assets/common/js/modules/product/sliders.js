const Methods = {
    init() {
        Methods.medidas();
        Methods.products();
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