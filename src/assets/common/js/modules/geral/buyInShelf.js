import AddToCart from './addToCart';

const Methods = {
    init() {
        Methods.buyInShelf();
        Methods.closePopUp();
    },

    buyInShelf() {
        var $shelf = document.querySelectorAll('.j-shelf__item');

        $shelf.forEach( $item => {
            let $btns   = $item.querySelectorAll('.btn');
            let $input  = $item.querySelector('.qtd');
            let $cta    = $item.querySelector('.j-shelf__item-buy--cta');

            $btns.forEach( btn => {
                btn.addEventListener('click', ev => {

                    if( btn.classList.contains('btn-mais') ) {
                        $input.value++;
                    } else if( btn.classList.contains('btn-menos') ) {
                        if( $input.value > 1 ) {
                            $input.value--;
                        }
                    }

                });
            });
            try{
                $cta.addEventListener('click', ev => {
                    ev.preventDefault();
                    let $index  = $item.dataset.productId;
                    let $link   = $cta.getAttribute('href');
                    AddToCart.init( $index, $input.value, $link );
                });
            }catch(error){
                console.log(error)
            }
        });
    },
    closePopUp() {
        $(document).on('click', '.y-close', function(){
            $('.popup-overlay, .popup-compra').remove();
        });
    }
};

export default {
    init: Methods.init
}