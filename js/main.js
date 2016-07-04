$( document ).ready(function() {

    // Scroll to top on refresh
    $(this).scrollTop(0);

    // Print out scroll values
    console.log($(window).scrollTop());

    // Fade elements on scroll
    $(window).scroll(function(){
        $(".hero-fixed").css("opacity", 1 - $(window).scrollTop() / 300);
        $(".hero-relative").css("opacity", 1 - $(window).scrollTop() / 300);
        $(".description p").css("opacity", 0 + ( $(window).scrollTop() / 500) );
        $(".bg-fader").css("opacity", 1 - ( $(window).scrollTop() / 300) );
    });
});
