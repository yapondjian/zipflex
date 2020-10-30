const Methods = {
	init() {
        Methods.sliderDepartament();
    },
    
    sliderDepartament() {
        $('.helperComplement').remove();
        
        $(`.y-home__shelfs .y-shelf ul`).slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 5
        });
    }
};

export default {
	init: Methods.init,
}