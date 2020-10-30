const Methods = {
    init() {
        Methods.sliders();
    },

    sliders() {
        $('.helperComplement').remove();

        $(".y-shelf > ul").slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 5
        });
    }
};

export default {
    init: Methods.init
};