const Methods = {
    init() {
        Methods.btnQuantity();
        Methods.movePrice();
        Methods.showAvailableQuantity();
        Methods.UpdateItemsBuyTogether();
        Methods.ActionBuyTogether();

        setTimeout(function() {
            Methods.changeTextRating();
        }, 2000);
    },

    btnQuantity() {
        const $btnComprarProduto = $('.y-product__buy .buy-button');
        if( $btnComprarProduto.length ) {

            $btnComprarProduto.click( function() {
                let $this = $(this);
                let url   = $this.attr('href');
                if( url.indexOf('qty=1') > 0 ) {
                    $this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.y-product__buy .box-qtd .qtd').val() ) ) );
                }
            });

            let $recebeQtyForm = $('.y-qty');
            if( $recebeQtyForm.length ) {
                $recebeQtyForm.prepend(
                    '<div class="box-qtd">' +
                    '   <input type="text" class="qtd" value="1" />' +
                    '	<button class="btn btn-mais">+</button>' +
                    '	<button class="btn btn-menos">-</button>' +
                    '</div>'
                );
                $(document).on('keypress' , '.y-product__buy .box-qtd .qtd', function(e) {
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
                $(document).on('keyup' , '.y-product__buy .box-qtd .qtd', function(e) {
                    $('.y-product__buy .box-qtd .qtd').val( $(this).val() );
                });
                $(document).on('blur' , '.y-product__buy .box-qtd .qtd', function(e) {
                    let $this = $(this);
                    if( $this.val() === '' || parseInt( $this.val() ) < 1 ) {
                        $('.y-product__buy .box-qtd .qtd').val(1);
                    }else{
                        $('.y-product__buy .box-qtd .qtd').val( $this.val() );
                    }
                });
                $(document).on('click', '.y-product__buy .box-qtd .btn', function() {
                    let $this = $(this);
                    let $qtd  = $('.y-product__buy .box-qtd .qtd');
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

    movePrice() {
        const priceCash = document.querySelector(`.preco-a-vista`);
        const priceEconomy = document.querySelector(`.economia-de`);
        const btnAnotherBanc = document.querySelector(`.y-product__price-otro`);

        if( priceCash && priceEconomy && btnAnotherBanc ) {
            priceCash.appendChild(priceEconomy);
            priceCash.appendChild(btnAnotherBanc);
        }
    },

    showAvailableQuantity() {
        if( skuJson && skuJson.skus.length && skuJson.skus[0].availablequantity < 10 ) {
            const skuQty = skuJson.skus[0].availablequantity;
            document.querySelector(`.y-stock`).innerText = `¡Quedan ${skuQty} unidades!`;
        }
    },

    changeTextRating() {
        $(`ul.rating > li > span:last-child`).each(function(){
            let txt = $(this).text().replace(` Voto`, ``);
            
            if( txt.indexOf(`nenhum`) != -1 ) {
                txt = txt.replace(`nenhum voto`, `0`);
            }

            $(this).text( txt );
        });
    },

    UpdateItemsBuyTogether() {
        $(`.y-together__checkbox`).on(`click`, function(){
            $(this).toggleClass(`is--checked`);
            let buyTogether = $(`.js--together`).attr(`data-buy`);

            if( $(`.is--checked`).length ) {
                buyTogether = '';

                $(`.is--checked`).each(function() {
                    let prodId = $(this).attr(`data-product-id`);
    
                    vtexjs.catalog.getProductWithVariations(prodId).done(function(productRes){
                        buyTogether += `&sku=${productRes.skus[0].sku}&qty=1&seller=${productRes.skus[0].sellerId}`;
                        $(`.js--together`).attr(`data-buy`, buyTogether);
                    });
                });
            } else {
                $(`.js--together`).removeAttr(`data-buy`);
            }
        });
    },

    ActionBuyTogether() {
        $(`.js--together`).on(`click`, function(){
            let dataBuy = $(this).attr(`data-buy`);
            if( dataBuy == undefined ) {
                alert(`Seleccione un producto que desea comprar junto con ${skuJson.name}`);
            } else {
                let buyLeadProduct = $(`.y-product__buy .buy-button`).attr(`href`);
                window.location.href = buyLeadProduct + dataBuy;
            }
        })
    }
};

export default {
    init: Methods.init
}