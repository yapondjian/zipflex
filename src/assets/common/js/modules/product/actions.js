const Methods = {
    init() {
        Methods.btnQuantity();
        Methods.changeLabel();

        ShippingValue();
    },

    btnQuantity() {
        const $btnComprarProduto = $('.y-product__buy .buy-button');
        if( $btnComprarProduto.length ) {

            $btnComprarProduto.click( function() {
                let $this = $(this);
                let url   = $this.attr('href');
                if( url.indexOf('qty=1') > 0 ) {
                    $this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.y-qtd .box-qtd .qtd').val() ) ) );
                }
            });

            let $recebeQtyForm = $('.y-qtd');
            if( $recebeQtyForm.length ) {
                $recebeQtyForm.prepend(
                    '<p>Quantidade</p>' +
                    '<div class="box-qtd">' +
                    '   <input type="text" class="qtd" value="1" />' +
                    '	<button class="btn btn-mais">+</button>' +
                    '	<button class="btn btn-menos">-</button>' +
                    '</div>'
                );
                $(document).on('keypress' , '.y-qtd .box-qtd .qtd', function(e) {
                    let tecla = ( window.event ) ? event.keyCode : e.which;   
                    if( ( tecla > 47 && tecla < 58 ) ) {
                        return true;
                    }else{
                        if ( tecla == 8 || tecla == 0 ) {
                            return true;
                        }else{
                            return false;
                        }
                    }
                });
                $(document).on('keyup' , '.y-qtd .box-qtd .qtd', function(e) {
                    $('.y-qtd .box-qtd .qtd').val( $(this).val() );
                });
                $(document).on('blur' , '.y-qtd .box-qtd .qtd', function(e) {
                    let $this = $(this);
                    if( $this.val() === '' || parseInt( $this.val() ) < 1 ) {
                        $('.y-qtd .box-qtd .qtd').val(1);
                    }else{
                        $('.y-qtd .box-qtd .qtd').val( $this.val() );
                    }
                });
                $(document).on('click', '.y-qtd .box-qtd .btn', function() {
                    let $this = $(this);
                    let $qtd  = $('.y-qtd .box-qtd .qtd');
                    let valor = parseInt( $qtd.val() );
                    if( $this.hasClass('btn-mais') ) {
                        $qtd.val( valor + 1 );
                    } else if( $this.hasClass('btn-menos') ) {
                        if( valor > 1 ) {
                            $qtd.val( valor - 1 );
                        }
                    }
                });
            }
        }
    },

    changeLabel() {
        $('.y-product__variations ul .specification').text('Escolha o tamanho');

        $('.y-product__variations ul .skuList span label').each(function(){
            var txt = $(this).text();
                txt = txt.split(":");
            $(this).text( txt[0] );
        })
    }
};

export default {
    init: Methods.init
}