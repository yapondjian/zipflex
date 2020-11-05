const Methods = {
    init() {
        Methods.atendimento();
    },

    atendimento() {
        $('.y-atendimento__close').live('click', function(){
            $(this).addClass('is--hide');
            $('.y-atendimento__box').addClass('is--hide');
            $('.y-atendimento__whatsapp').removeClass('is--hide');
            
            localStorage.setItem('y-atendimento','closed');
        });
        
        if( localStorage.getItem('y-atendimento') !== null && localStorage.getItem('y-atendimento') == "closed" ) {
            $('.y-atendimento__close').addClass('is--hide');
            $('.y-atendimento__box').addClass('is--hide');
            $('.y-atendimento__whatsapp').removeClass('is--hide');
        }
    }
};

export default {
    init: Methods.init
}