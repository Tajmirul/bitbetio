$(document).ready(function () {

    //     /* magnificPopup img view */
    //     $('.popup-image').magnificPopup({
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });

    //     /* magnificPopup video view */
    //     $('.popup-video').magnificPopup({
    //         type: 'iframe'
    //     });

    //for menu active class
    //     $('.portfolio-menu button').on('click', function (event) {
    //         $(this).siblings('.active').removeClass('active');
    //         $(this).addClass('active');
    //         event.preventDefault();
    //     });

    // WOW active
    //     new WOW().init();

    // slick slider for banner 
    // $('.banner-slider').slick({
    //     prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
    //     nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
    // dots: true,
    //     autoplay: true
    // });

    // my code ----------------------------------------------------------------------
    // $.each($('[data-bg-img]'), (index, item) => {
    //     $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    // })
    // preloader
    //     $(".preloader").animate({
    //         top: -2000000
    //     }, 1500);

    // sticky menu ber and go to top button
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        var topMain = 400;

        // go to top button
        if (scrolled > topMain) {
            $('.navbar').addClass('sticky');
            $('.navbar__proxy').addClass('active');
        } else {
            $('.navbar').removeClass('sticky')
            $('.navbar__proxy').removeClass('active');
        }
    });
    $('[data-scroll-to]').on('click', function (event) {
        event.preventDefault();
        var target = $(this).data('scrollTo');
        console.log(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 400);
    });

    // menu bar open -------------------------
    $('.open-mobile-navbar').click(function () {
        $('.navbar-mobile, .overlay').addClass('active');
    });
    // menu bar close -------------------------
    $('.navbar-mobile__close, .overlay').click(function () {
        $('.navbar-mobile, .overlay').removeClass('active');
    });
    // dropdown toggle ------------------
    // $('.mobile-navigations li.has-dropdown > i').click(function () {
    //     $(this).parent().find('>ul').slideToggle()
    // });

    // $('.toggle-dropdown').click(function () {
    //     $(this).parent().find('>ul').slideToggle()
    // });

    // $('.sidebar-toggle').click(function () {
    //     $('.layout__sidebar').toggleClass('active');

    //     if ($(window).width() < 992) {
    //         $('.layout__main-container').toggleClass('overlay');
    //     }
    // });
});
