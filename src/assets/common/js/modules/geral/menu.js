const Methods = {
    init() {
        Methods.getCollection();
    },

    getItem($skulist) {
        const $numWish = 1;
        const $shelfIDHeader = "44f537fa-5757-464a-8221-b8d5eaecd62d";

        $.ajax(`/buscapagina?fq=productId:${$skulist}&PS=${$numWish}&sl=${$shelfIDHeader}&cc=100&sm=0&PageNumber=${$numWish}`, {
            async: !1
        }).done(function($response) {
            $(`.j-link__items--sub-product[data-cluster-id="${$skulist}"]`).html($response);
        }).fail(function(err) {
            console.log(err);
        });

    },

    getCollection() {
        const $menuShelf = document.querySelectorAll('.j-link__items--sub-product');

        $menuShelf.forEach($item => {
            let $skuId = $item.dataset.clusterId;
            Methods.getItem($skuId);
        });
    }
};

export default {
    init: Methods.init,
}