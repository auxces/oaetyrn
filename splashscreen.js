$(document).ready(function () {
    $('#play').css('opacity', '1')

    $("#play").click(function () {
        $("#splashscreen").fadeOut(600); // you could also use $(this).fadeOut('slow');
    });
});
