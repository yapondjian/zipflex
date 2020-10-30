const Methods = {
    init() {
        Methods.searchTerm();
        Methods.sliders();
    },

    searchTerm() {
        let term = window.location.search.split(`?ft=`)[1];
        document.querySelector(`.js--term`).innerText = term;
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