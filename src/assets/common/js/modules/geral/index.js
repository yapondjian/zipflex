import Minicart from "../../../../common/js/modules/geral/minicart";
import Menu from "./menu";
import Newsletter from "./newsletter";


const Methods = {
	init() {
		Minicart.init();
		Menu.init();
		Newsletter.init();
		Methods.sliderBrands();
	},

    sliderBrands() {
        $('.y-marcas__list').slick({
            arrows: true,
            dots: false,
            slidesToShow: 5
        })
    }
};

export default {
	init: Methods.init
};