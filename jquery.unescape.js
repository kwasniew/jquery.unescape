(function ($) {
    $.fn.unescape = function () {
        $(this).each(function() {
           var temp = $('<div />');
           $(this).html(temp.html($(this).html()).text()); 
        });         
        return this;
    }
})(jQuery);