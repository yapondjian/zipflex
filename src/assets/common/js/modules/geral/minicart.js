const Methods = {
	init() {
        $(document).ajaxStop( () => {
            Methods.setInfos();
            Methods.open();
            Methods.close();
            Methods.removeItemMinicart();
            Methods.updateQtdMinicart();
        });
    },
    
    _convertCurrency(number) {
        const int = number.toString().substr(0, number.toString().length - 2)
        const decimal = number.toString().substr(number.toString().length - 2, number.toString().length);

        return `$ ${int},${decimal}`;
    },

    _removeItem(index) {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
          let itemIndex = 0
          let item = orderForm.items[itemIndex];
          let itemsToRemove = [
            {
              "index": index,
              "quantity": 0,
            }
          ]
          return vtexjs.checkout.removeItems(itemsToRemove);
        })
    },

    _updateQty(index, qtd) {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
          let updateItem = {
            index: index,
            quantity: qtd
          };

          return vtexjs.checkout.updateItems([updateItem], null, false);
        })
    },

    open() {
        const body = document.querySelector('body');
        const btnOpen = document.querySelector('.js--open-minicart');
        const minicart = document.querySelector('.y-minicart__content');
        
        btnOpen.addEventListener('click', () => {
            if( !minicart.classList.contains('is--active') ) {
                body.classList.add('no--scroll');
                minicart.classList.add('is--active');
            }
        });
    },
    
    close() {
        const body = document.querySelector('body');
        const btnClose = document.querySelector('.js--close-minicart');
        const minicart = document.querySelector('.y-minicart__content');
        
        
        btnClose.addEventListener('click', () => {
            body.classList.remove('no--scroll');
            minicart.classList.remove('is--active');
        });
    },

    setInfos() {
        const items = vtexjs.checkout.orderForm.items;
        const minicart = document.querySelector('.y-minicart__content-js');
        const totalPrice = Methods._convertCurrency(vtexjs.checkout.orderForm.value);
        let wrapper;

        if ( items.length < 1 ) {
            wrapper = `
                        <div class="y-minicart-empty">
                            <p>
                                Seu carrinho está vazio
                            </p>
                            <div class="y-minicart-total">
                                <p>
                                    <span>Total</span>
                                    <strong class='js--minicart-total'> - </strong>
                                </p>
    
                                <a class='y-minicart-btn' href="/checkout/#/checkout">Finalizar compra</a>
                            </div>
                        </div>
                    `;	
        } else {
            wrapper = `
                <div class="y-minicart-items">
                    <ul class='y-minicart-items__list'>
            `;
            
            items.forEach( (item, index) => {  
                let formattedPrice = Methods._convertCurrency(item.price);
                wrapper += `
                    <li data-index="${index}" data-product-id="${item.productId}">
                        <div class="y-minicart-img">
                            <a href="${item.detailUrl}">
                                <img src="${item.imageUrl}" alt="${item.name}" />
                            </a>
                        </div>
                        <div class="y-minicart-item">
                            <a href="${item.detailUrl}" class="y-minicart-item__name">
                                ${item.name}
                            </a>
                            <button class='y-minicart-remove__item'>
                                X
                            </button>
                            
                            <div class="y-minicart-item__bottom">
                                <div class='y-minicart-price'>
                                    <p>${formattedPrice}</p>
                                </div>
                                <div class="y-minicart-qty">
                                    <form class="y-minicart__form">
                                        <button class='y-minicart__form-btn js--minicart-minus'>
                                            -
                                        </button>
                                        <input type="number" value="${item.quantity}" class='y-minicart__form-ipt js--minicart-qty' />
                                        <button class='y-minicart__form-btn js--minicart-plus'>
                                            +
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
            });

            wrapper += `
                        </ul>
                            <div class="y-minicart-total">
                                <p>
                                    <span>Subtotal</span>
                                    <strong class='js--minicart-total'> ${totalPrice} </strong>
                                </p>
    
                                <a class='y-minicart-btn' href="/checkout/#/checkout">Iniciar compra</a>
                                <a class='y-minicart-cart' href="/checkout/#/cart">Ver carrito</a>
                            </div>
                        </div>
                    `;

        }

        minicart.innerHTML = '';
        minicart.innerHTML += wrapper;
    },

    removeItemMinicart() {
        const btnRemove = document.querySelectorAll('.y-minicart-remove__item');

        btnRemove.forEach( item => {
            item.addEventListener('click', () => {
                let index = item.closest('li').dataset.index;
                
                Methods._removeItem(index);
            });
        });
    },

    updateQtdMinicart() {
        const form = document.querySelectorAll('.y-minicart__form');

        form.forEach(item => {
            let btns = item.querySelectorAll('button');
            let input = item.querySelector('input');
            let index = item.closest('li').dataset.index;

            btns.forEach(btn => {
                btn.addEventListener('click', ev => {
                    ev.preventDefault();

                    if (btn.classList.contains('js--minicart-minus')) {
                        if (input.value > 1) {
                            input.value = input.value - 1;

                            Methods._updateQty(index, input.value);
                        }
                    } else {
                        input.value++;
                        Methods._updateQty(index, input.value);
                    }
                });
            });

        });
    }
};

export default {
	init: Methods.init,
}