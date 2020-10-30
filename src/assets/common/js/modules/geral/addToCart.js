const Methods = {
    addToCart( $prodId, $qtd, $link ) {
        vtexjs.catalog.getProductWithVariations($prodId).done(function (product) {
            if ( product.skus.length <= 1 && product.available == true ) {

                var sc = product.salesChannel;
                var item = {
                    id: product.skus[0].sku,
                    quantity: $qtd,
                    seller: product.skus[0].sellerId
                };

                
                console.log(product);

                fbq('track', 'AddToCart', {
                    content_ids: product.skus[0].sku,
                    content_type: 'product',
                    value: product.skus[0].bestPriceFormated.replace('R$ ','').replace(',','.'),
                    content_name: product.skus[0].skuname,
                    currency: "BRL"
                });
                
                vtexjs.checkout.addToCart([item], null, sc).done(function (orderForm) {

                    if(innerWidth > 520){
                        $('body').append('<div class="popup-overlay y-close"></div>' +
                        '<div class="popup-compra y-close">' +
                        '<h3>Já adicionamos o produto a seu carrinho!</h3>' +
                        '<div class="popup-compra--imagem">' +
                            '<img src="' + product.skus[0].image + '" alt="' + product.name + '" />' +
                        '</div>' +
                        '<div class="popup-compra--info">' +
                            '<h4>' + product.name + '</h4>' +
                            '<span class="price">'+product.skus[0].bestPriceFormated+'</span>'+
                            '<div class="popup-compra--info__btn">' +
                                '<a href="#" class="y-close">Continuar comprando</a>' +
                                '<a href="/checkout/#/cart">Ir para o carrinho</a>' +
                            '</div>' +
                        '</div>' +
                        '</div>');
                    }else{
                        $('.js--open-minicart').trigger('click');
                    }
                });

            } else {
                if( $link !== "" ) {
                    window.location.href = $link;
                }
            }
        });
    }
};

export default {
    init: Methods.addToCart
}