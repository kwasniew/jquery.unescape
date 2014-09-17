(function ($) {
    $.fn.unescape = function () {
        var temp = $('<div />');
        return $(this).html(temp.html($(this).html()).text());
    }
})(jQuery);