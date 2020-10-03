$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#main-slider').slick();

    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });
});