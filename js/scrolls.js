$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('section.desc').offset().top }, 'slow');
        return false;
    });
});

$(function() {
    $('.scroll-down2').click (function() {
        $('html, body').animate({scrollTop: $('section.compet').offset().top }, 'slow');
        return false;
    });
});