import BackToTop from './backToTop';
import Minicart from './minicart'
import Menu from "./menu";
import Newsletter from "./newsletter";


const Methods = {
	init() {
		BackToTop.init();
		Minicart.init();
		Menu.init();
		// Newsletter.init();
		Methods.shelfPrice();
	},

	shelfPrice() {
		$(`.js--shelf-item`).each(function(){
			var valor = $.trim( $(this).find(`.y-shelf__item--price-new`).text() );
				valor = valor.replace(`R$ `, ``);
				valor = valor.replace(`.`, ``);
				valor = valor.replace(`,`, `.`);
				valor = parseFloat( valor );
			
			var desconto = (valor - (valor/10)).toFixed(2);
				desconto = desconto.toString();
				desconto = desconto.replace(`.`,`,`);

			$(this).find(`.y-shelf__item--avista`).append(`<strong>R$ ${desconto}</strong>`);
		})
	}
};

export default {
	init: Methods.init
};