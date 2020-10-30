const Methods = {
    init() {
        Methods.show();
    },

    verify(){
        const cookie = localStorage.getItem('acceptCookie');

        if(cookie != null){
            return false;
        }else{
            return true;
        }
    },

    show() {
        const cookieEl = document.querySelector('.j-cookieAlert');
        const buttonEl = cookieEl.querySelector('button');

        if(Methods.verify()){
            cookieEl.style.display = "flex";
        }

        buttonEl.addEventListener('click',()=>{
            Methods.hide();
        });
    },

    hide() {
        const cookieEl = document.querySelector('.j-cookieAlert');
        cookieEl.style.display = "none";

        localStorage.setItem('acceptCookie', 'true');
    }
};

export default {
    init: Methods.init
}