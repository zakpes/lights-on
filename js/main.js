(function ($) {

    $(".switch-on").click(function () {
        $(".overlay").hide();
        $(".switch-toggle").addClass("switched-on");
    });

    $(".switch-off").click(function () {
        $(".overlay").show();
        $(".switch-toggle").removeClass("switched-on");
    });

})(jQuery);
