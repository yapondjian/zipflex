const Methods = {
	init() {
        Methods.verify();
	},
    
    verify() {
        var cookieEl = $('.j-cookieAlert');
        var cookie = localStorage.getItem('acceptCookie');

        if(cookie != null){
            return false;
        }else{
            $(cookieEl).css('display', 'flex');
            $('.j-cookieAlert button').on('click', function(){
                $(cookieEl).hide();
                localStorage.setItem('acceptCookie', 'true');
            });
        }
    }
};

export default {
	init: Methods.init,
}