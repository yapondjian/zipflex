const Methods = {
    init() {
        Methods.backToTop();
    },

    backToTop: function() {
        $("#y-top").live("click", function() {
            $("html, body").animate({
                scrollTop: $("body").offset().top
            }, 500)
        })
    }
};

export default {
    init: Methods.init
}