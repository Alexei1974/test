$(function () {

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
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
        $(this)
            .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    function tooleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
            })
        })
    };
    tooleSlide('.catalog-item__link');
    tooleSlide('.catalog-item__bask');

});
