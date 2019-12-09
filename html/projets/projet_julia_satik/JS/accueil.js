$(window).scroll(function(){
    //Find out how far we've scolled
    var scroll = $(window).scrollTop();

    //If that is more that 500px fade box in
    if(scroll > 400){
        $('.box').addClass('fade');

    }else{
        $('.box').removeClass('fade');

    }
    //If that is less that 500px fade box out

});
