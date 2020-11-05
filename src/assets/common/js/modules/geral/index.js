import Atendimento from './atendimento';
import Minicart from './minicart'
import Menu from "./menu";
import Newsletter from "./newsletter";


const Methods = {
	init() {
		Atendimento.init();
		// Minicart.init();
		Menu.init();
		// Newsletter.init();
	}
};

export default {
	init: Methods.init
};