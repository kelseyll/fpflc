$( document ).ready(function() {

    console.log( "ready!" );

    $(window).scroll(function(){
        $(".hero-fixed").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});
