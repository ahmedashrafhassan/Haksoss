$(document).ready(function(){

    // Zoom Images On Hover
    $(function(){
        $('.zoom').izoomify({
            magnify: 2,
            touch : false
        });
    });

    // Image Popup
    $(".parent-container").magnificPopup({
        delegate : 'a',
        type : 'image',
        closeOnContentClick : true,
        closeOnBgClick : true,
        showCloseBtn : true,
        enableEscapeKey : true,
        fixedContentPos : true
    });

    // Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 20,
        touchDrag: true,
        autoWidth:false,
        responsive: {
            0:{
                items:2,
                nav:true
            },
            600: {
                items: 4,
                nav:false
            },
            1000: {
                items: 7,
                nav: true,
                loop : false
            }
        }
    });

    // Mobile menu
    // Close Menu On Link Click
    if ($("html,body").width() < 767) {
        $(".collapse .navbar-nav .nav-item").each(function(){
            $(".collapse .navbar-nav .nav-item").click(function(){
                $(".navbar-collapse").removeClass("show");
            });
        });
    }

    // Scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $(".fa-chevron-up").fadeIn(500);
        } else {
            $(".fa-chevron-up").fadeOut(500);
        }
    });

    $(".fa-chevron-up").click(function(){
        $("html,body").animate({
            scrollTop : 0
        }, 500);
    });

    // Press on navbar links to go to sections
    $(".navbar .collapse ul li a").click(function(e){
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top - 100}, 100);
    });
});