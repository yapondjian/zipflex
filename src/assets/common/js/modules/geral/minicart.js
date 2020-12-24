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

        return `R$ ${int},${decimal}`;
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
        // const body = document.querySelector('body');
        const btnOpen = document.querySelector('.js--open-minicart');
        const minicart = document.querySelector('.y-minicart__content');
        const minicartBox = document.querySelector('.y-minicart');
        const menu = document.querySelector('.y-header__menu');
        
        btnOpen.addEventListener('click', () => {
                // body.classList.add('no--scroll');
                minicart.classList.toggle('is--active');
                minicartBox.classList.toggle('is--active');
                menu.classList.remove('is--active');
        });
    },
    
    close() {
        // const body = document.querySelector('body');
        const btnClose = document.querySelector('.js--close-minicart');
        const minicart = document.querySelector('.y-minicart__content');
        const minicartBox = document.querySelector('.y-minicart');
        
        
        btnClose.addEventListener('click', () => {
            // body.classList.remove('no--scroll');
            minicart.classList.remove('is--active');
            minicartBox.classList.remove('is--active');
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
    
                                <a class='y-minicart__btn' href="/checkout/#/checkout">Finalizar compra</a>
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
                                <img src="${item.imageUrl.replace(`90-41/`,`165-98/`)}" alt="${item.name}" />
                            </a>
                        </div>

                        <div class="y-minicart-item">
                            <a href="${item.detailUrl}" class="y-minicart-item__name">
                                ${item.name}
                            </a>
                                
                            <div class="y-minicart-item__bottom">
                                
                                <div class="y-minicart-qty">
                                    <span>Qnt - ${item.quantity}</span>
                                </div>
                                <div class='y-minicart-price'>
                                    <p><span>Por</span>${formattedPrice}</p>
                                </div>
                            </div>
                        </div>

                        <button class='y-minicart-remove__item'>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.996" viewBox="0 0 15 14.996"><g transform="translate(0 -0.07)"><g transform="translate(0 0.07)"><g transform="translate(0 0)"><path d="M12.807,2.263a7.5,7.5,0,1,0,0,10.609A7.511,7.511,0,0,0,12.807,2.263Zm-.822,9.787a6.34,6.34,0,1,1,0-8.966A6.347,6.347,0,0,1,11.985,12.05Z" transform="translate(0 -0.07)" fill="#f07f3c"/></g></g><g transform="translate(4.9 4.896)"><path d="M172.342,169.091l-1.645-1.643,1.645-1.643a.581.581,0,1,0-.822-.822l-1.646,1.644-1.646-1.644a.581.581,0,1,0-.822.822l1.645,1.643-1.645,1.643a.581.581,0,0,0,.822.822l1.646-1.644,1.646,1.644a.581.581,0,1,0,.822-.822Z" transform="translate(-167.236 -164.813)" fill="#f07f3c"/></g></g></svg>
                            </span>
                        </button>
                    </li>
                `;
            });

            wrapper += `
                        </ul>
                            <div class="y-minicart__total">
                                <a class='y-minicart__cart' href="/checkout/#/cart">Finalizar Compra</a>
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