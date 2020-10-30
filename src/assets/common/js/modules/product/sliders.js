const Methods = {
    init() {
        Methods.benefits();
        Methods.products();
        Methods.related();
    },

    benefits() {
        $(".y-benefits__content").slick({
            arrows: true,
            dots: false,
            slidesToShow: 2
        });
    },

    products() {
        $("li[id*='helperComplement']").remove();
        $(".y-product__shelf .y-shelf > ul").slick({
            arrows: true,
            dots: true,
            slidesToShow: 5
        });
    },

    related() {
        $(`.js--related > ul`).slick({
            arrows: true,
            dots: false,
            slidesToShow: 1
        })
    }
};
  
export default {
    init: Methods.init
};