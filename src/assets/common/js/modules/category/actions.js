const Methods = {
	init() {
        Methods.openFilter();
        Methods.closeFilter();
        Methods.openOrder();
        Methods.closeOrder();

        if( $('body').hasClass('y-search') ) {
            Methods.setTitle();
            Methods.toggleLinks();
        } else {
            Methods.smartResearch();
            Methods.toggleField();
        }
    },

    smartResearch() {
        $(".search-multiple-navigator input[type='checkbox']").vtexSmartResearch();
    },

    toggleField() {
        $('.y-category__filter fieldset h5').live('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('is--closed');
        })
    },

    toggleLinks() {
        $('.y-category__filter h3').live('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('is--closed');
        })
    },

    setTitle() {
        $('.y-category__name').html(`Você buscou por: <h2>${vtxctx.searchTerm}</h2>`);
        $('.y-breadcrumb ul').append('<li><a href="#">Resultado de Busca</a></li>')
    },

    openFilter() {
        const btnFilter = document.querySelector('.js--open-filter');
        const contentFilter = document.querySelector('.js--filter-content');
        const body = document.querySelector('body');
        
        btnFilter.addEventListener('click', () => {
            contentFilter.classList.add('is--active');
            body.classList.add('no--scroll');
        });
    },
    
    closeFilter() {
        const btnFilter = document.querySelector('.js--filter-content .y-close');
        const contentFilter = document.querySelector('.js--filter-content');
        const body = document.querySelector('body');

        btnFilter.addEventListener('click', () => {
            contentFilter.classList.remove('is--active');
            body.classList.remove('no--scroll');
        });
    },

    openOrder() {
        const btnOrder = document.querySelector('.js--open-order');
        const contentOrder = document.querySelector('.js--order-content');
        const body = document.querySelector('body');
        
        btnOrder.addEventListener('click', () => {
            contentOrder.classList.add('is--active');
            body.classList.add('no--scroll');
        });
    },
    
    closeOrder() {
        const btnOrder = document.querySelector('.js--order-content .y-close');
        const contentOrder = document.querySelector('.js--order-content');
        const body = document.querySelector('body');

        btnOrder.addEventListener('click', () => {
            contentOrder.classList.remove('is--active');
            body.classList.remove('no--scroll');
        });
    }
};

export default {
	init: Methods.init,
}