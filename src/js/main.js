$(function(){

    $('.carausel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'linear',
        prevArrow: '<button type="button" class="carausel-arrow slick-prev-carausel"><img src="images/slider/chevron_right.png" alt=""></button>',
        nextArrow: '<button type="button" class="carausel-arrow slick-next-carausel"><img src="images/slider/chevron_left.png" alt=""></img></button>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                   arrows:false,
                   dots:true
                }
            },
        ]
    });
});
