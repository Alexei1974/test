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
        
    });
    $('.modal__close').on('click', function () {
        $('.overlay,#consultion, #order, #tranks').fadeOut('slow');
    
    });

    $('.catalog-item__btn').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
           
        });
    });

    // ========= form validate==========




    $("form").each(function () {
        $(this).validate({
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
            submitHandler: function (form) {
                $('#consultion, #order').fadeOut();
                $('.overlay, #tranks').fadeIn();
                  
            },

        });
    });
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    $('form').submit(function (e) {
        e.preventDefault();
        let $form = $(this);
        if (!$form.valid()) return false;
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()     
        }).done(function () {
            $(this).find("input").val("");         
             $('form').trigger('reset');
        });
        return false;
    });


    $(document).on("click", function (e) {
        // отслеживаем событие клика по веб-документу
        var block = $("form, [data-modal=consultion], .catalog-item__btn"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (
            !block.is(e.target) && // проверка условия если клик был не по нашему блоку
            block.has(e.target).length === 0
        ) {
            // проверка условия если клик не по его дочерним элементам
            $("form label.error").remove();
            $("form input.error").removeClass("error");
            $("form input").val("");
            $(".modal-popup").fadeOut();
            $(".overlay").fadeOut();
       
            $("form input.valid").removeClass("valid");
        }
    });

    // ========== pageup===============

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        } else{
            $('.pageup').fadeOut();
        }
    });
    
    $('.pageup').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
        return false;
    });

    new WOW().init();

});


