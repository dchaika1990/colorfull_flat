$(document).ready(function () {

    // Slider block testimonials
    $('.testimonials .slider').slick({
        arrows: false,
        dots: true
    });

    // Slider block Gallery
    $('.gallery .slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Gallery

    $('.gallery img').on('click', function () {
       var $src = $(this).attr('src');
       $('.modal').append('<img>');
       $('.modal img').attr('src', $src);
       $('.modal').addClass('show');
       $('.overlay').addClass('show');
    });

    $('.overlay').on('click', function (e) {
        $('this').removeClass('show');
        $('.overlay').removeClass('show');
        $('.modal img').remove();
    });

    // Accordion
    $('.accordion .inner__text').hide();
    $('.accordion').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var $text = $(this).find('.inner__text');
        var $i = $(this).find('i');
        console.log($text, $i);

        if ( $text.is(':hidden') ) {
            $('.accordion').each(function () {
                $(this).find('i').attr('class','material-icons-add_circle');
                $(this).find('.inner__text').slideUp();
                $(this).removeClass('open');
            });

            $(this).addClass('open');
            $text.slideDown();
            $i.attr('class','material-icons-remove_circle');
        } else {
            $(this).removeClass('open');
            $text.slideUp();
            $i.attr('class','material-icons-add_circle');
        }

    });

    // Parallax

    var $window = $(window);
    $('[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    //Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10 ) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    $('.link__open').on('click', function () {

        if ( $(this).find('.link__drop-down').hasClass('show') ){
            $(this).find('.link__drop-down').removeClass('show');
        } else {
            $('.link__open .link__drop-down').each(function () {
                $(this).removeClass('show')
            });

            $(this).find('.link__drop-down').addClass('show');
        }
    });

    // Scroll animate
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1100);
        }
        return false;
    });

    //Btn mobile show form
    $('.btn.mobile').on('click', function () {
       $('.home .home__form').addClass('show');
       $(this).hide();
    });

});