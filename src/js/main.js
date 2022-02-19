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

    //============== modal=========================
    $('[data-modal=consultion]').on('click', function () {
        $('.overlay, #consultion').fadeIn('slow');
        $('body').addClass('no-scroll')
    });
    $('.modal__close').on('click', function () {
        $('.overlay,#consultion, #order, #tranks').fadeOut('slow');
        $('body').removeClass('no-scroll')
    });

    $('.catalog-item__btn').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
            $('body').addClass('no-scroll');
        });
    });

    // ========= form validate==========
    function validForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: 'required',
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Укажите ваше имя",
                    minlength: jQuery.validator.format(
                        "Ваше  имя  должно  быть  не  менее  2х символов"
                    ),
                },
                email: {
                    required:
                        "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
                    email:
                        "Ваш адрес электронной почты должен быть в формате name@domain.com",
                },
                phone: {
                    required: "Введите ваш номер телефона.",

                },
            },
        });
    };

    validForms('#consultation-form');
    validForms('#consultion form');
    validForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});
