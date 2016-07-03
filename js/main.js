$( document ).ready(function() {

    $(this).scrollTop(0);

    // Fade elements on scroll
    $(window).scroll(function(){
        $(".hero-fixed").css("opacity", 1 - $(window).scrollTop() / 300);
        $(".hero-relative").css("opacity", 1 - $(window).scrollTop() / 300);
        $(".hero-fixed-2").css("opacity", 1 - $(window).scrollTop() / 300);
        $(".description p").css("opacity", 0 + ( $(window).scrollTop() / 500) );
    });

    // Change background color on scroll
    $(document).scroll(function() {
       var alpha = Math.min(0.7 + 0.4 * $(this).scrollTop() / 210, 0.9);
       var channel = Math.round(alpha * 255);
       $("html").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
   });

});
