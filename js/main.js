$( document ).ready(function() {

    // Define media screen width
    var mq750 = window.matchMedia( "(min-width: 750px)" );

    // Scroll to top on refresh
    $(this).scrollTop(0);

    // Print out scroll values
    console.log($(window).scrollTop());

    // Fade background and elements on scroll if screen is wider than 550px
    if (mq750.matches) {
        $(window).scroll(function(){
            $(".hero-fixed").css("opacity", 1 - $(window).scrollTop() / 300);
            $(".hero-relative").css("opacity", 1 - $(window).scrollTop() / 300);
            $(".description p").css("opacity", 0 + ( $(window).scrollTop() / 500) );
            $(".bg-fader").css("opacity", 1 - ( $(window).scrollTop() / 200) );
        });
    }
    // Only fade elements on scroll if screen is less than 550px
    else if (!mq750.matches) {
        $(window).scroll(function(){
            $(".hero-relative").css("opacity", 1 - $(window).scrollTop() / 300);
            $(".description p").css("opacity", 0 + ( $(window).scrollTop() / 500) );
        });
    }
});
