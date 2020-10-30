import AddToCart from './addToCart';

const Methods = {
    init() {
        Methods.createTags();
    },

    createTags() {
        const products = document.querySelectorAll('.j-shelf__item');
        products.forEach(item=>{
            try{
                let oldPrice = item.querySelector('.j-shelf__item-old-price').innerHTML.split('R$')[1];
                let newPrice = item.querySelector('.j-shelf__item-new-price').innerHTML.split('R$')[1];
                
                if(oldPrice != undefined){
                    oldPrice = parseFloat(oldPrice.replace(',','.'));
                    newPrice = parseFloat(newPrice.replace(',','.'));

                    let discount = Math.round((oldPrice - newPrice) / (oldPrice/100));
                    item.innerHTML += `<span class="j-shelf_discount">${discount}% off</span>`;
                }
            }catch(error){
                console.log(error)
            }
            
        })
    }
};

export default {
    init: Methods.init
}