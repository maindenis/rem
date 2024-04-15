var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: $("#slick_Prev"),
            nextArrow: $("#slick_Next")
        });
    }

    if( $(".slider_2").length > 0 ) {
        $('.slider_2').on('init', function(event, slick){
            slideCount = slick.slideCount;
            barWidth = parseInt(100 / slideCount);
            $(".line").css({
                width: barWidth + "%"
            });
        });
        $('.slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            slideCount = slick.slideCount - 1;
            barWidth = parseInt(100 / slideCount);
            if(nextSlide == 0) {
                $(".line").css({
                    width: barWidth + "%"
                });
            } else {
                $(".line").css({
                    width: barWidth * nextSlide + "%"
                }); 
            }
        });
        $(".slider_2").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 1000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    if( $(".slider_3").length > 0 ) {
        $('.slider_3').on('init', function(event, slick){
            $(".sl_3_control:eq("+slick.loadIndex+")").addClass("active");
        });
        $('.slider_3').on('afterChange', function(event, slick, currentSlide, nextSlide){
          $(".sl_3_control").removeClass("active");
          $(".sl_3_control:eq("+currentSlide+")").addClass("active");
        });
        $(".slider_3").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    $(".sl_3_control").on("click", function(e) {
        e.preventDefault();
        index = $(this).index(".sl_3_control");
        $(".slider_3 .slick-dots li:eq("+index+") button").trigger("click");
        $(".sl_3_control").removeClass("active");
        $(this).addClass("active");
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});